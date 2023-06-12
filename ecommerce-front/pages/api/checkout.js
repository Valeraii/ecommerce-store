import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";
import { Product } from "@/models/Product";

export default async function handle(req, res) {
    if(req.method !== 'POST') {
        res.json('should be a POST request');
        return;
    }

    await mongooseConnect();
    const {name, email, phone, pickupLocation, paymentMethod, cartProducts} = req.body;
    const productIds = cartProducts;
    const uniqueIds = [...new Set(productIds)];
    const productsInfo = Product.find({_id: uniqueIds});      

    async function getProductInfo(productId) {
        try {
          const productInfo = await Product.findOne({ _id: productId });
          if (productInfo) {
            // Found the product information
            return productInfo;
          } else {
            throw new Error('Product information not found');
          }
        } catch (error) {
          // Handle the error
          console.error(error);
          throw error;
        }
      }

    let line_items = [];
    for (const id of uniqueIds) {
        let info;
       try {
            info = await getProductInfo(id);
        } catch (error) {
            console.log(error);
        }
        const quantity = productIds.filter(q => q === id)?.length || 0;
        if(quantity > 0 && info) {
             line_items.push({
                quantity,
                price_data: {
                    currency: 'CAD',
                    product_data: {name:info.title},
                    unit_amount: quantity * info.price,
                },
            });
        }
    } 
    const orderDoc = await Order.create({
        line_items, name, email, phone, pickupLocation, paymentMethod, paid:false
    });

    res.json({line_items})
}

