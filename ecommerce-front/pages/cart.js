import Button from "@/components/Button";
import Center from "@/components/Center";
import Header from "@/components/Header";
import styled from "styled-components";
import {useContext, useEffect, useState, Image} from 'react';
import {CartContext} from "@/components/CartContext"
import axios from "axios";
import Table from "@/components/Table";
import Input from "@/components/Input";
import {useRouter} from "next/router";
import { sendEmail } from "@/components/Email";

const StyledSelect = styled.select`
    width: 100%;
    padding: 5px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
`;

const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 40px;
    margin-top: 40px;
`;

const Box = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 30px;
`;

const ProductInfoCell = styled.td`
    padding: 10px 0;
`;

const ProductImageBox = styled.div`
    width: 100px;
    height: 100px;
    padding: 10px;
    border: 1px solid rgba(0,0,0,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    img {
        max-width: 80px;
        max-height: 80px;
    }
`;

const QuantityLabel = styled.span`
    padding: 0 3px;
`;


export default function CartPage() {
    const {cartProducts, addProduct, removeProduct, clearCart} = useContext(CartContext);
    const [products, setProducts] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [pickupLocation, setPickupLocation] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const router = useRouter();

    useEffect(() => {
        if(cartProducts.length > 0) {
            axios.post('/api/cart' , {ids:cartProducts}).then(res => {
                setProducts(res.data);
            })
        } else {
            setProducts([]);
        }
    }, [cartProducts]);

    function incrementItem(id) {
        addProduct(id);
    }

    function decrementItem(id) {
        removeProduct(id);
    }

    function getAddress() {
        if(pickupLocation === 'Richmond') {
            return 'Richmond：Ironwood Canadian Tire 停車場📍11388 Steveston Hwy';
        } else if (pickupLocation === 'Burnaby') {
            return 'Burnaby: Wholesale Club 停車場 (舊Safeway旁邊）📍5335  Kingsway';
        } else if (pickupLocation === 'Vancouver') {
            'Vancouver: Oakridge Mall對面TD Bank 停車場📍511 WEST 41 AVE';
        } else if (pickupLocation === 'North Surrey') {
            return 'North Surrey: T&T 停車場📍15277 100 AVE';
        } else if (pickupLocation === 'South Surrey') {
            return 'South Surrey: South Point Canadian Tire 停車場📍3059 152 Street';
        } else if (pickupLocation === 'Langley') {
            return 'Langley: H-Mart 停車場📍19555 Fraser Hwy';
        } else if (pickupLocation === 'Coquitlam') {
            return 'Coquitlam: Coquilam Centre Walmart 停車場📍2929 Barnet Hwy';
        }
    }
    
    async function goToPayment() {
        if(name === '' || email === '' || phone === '' || pickupLocation === '' || paymentMethod === '') {
            document.getElementById('error').innerHTML = 'Please fill all fields';
            return;
        }
        const res = await axios.post('/api/checkout', {
            name, email, phone, pickupLocation, paymentMethod, cartProducts
        });

        var templateParams = {
            to_name: name,
            to_email: email,
            amount: total,
            pickupLocation: getAddress(),
            paymentMethod: paymentMethod,
            order: res.data.line_items.map(
                item => item.price_data.product_data.name + ' x ' + item.quantity).join('\n')
        }
        if(res.data) {
            clearCart();
            sendEmail(templateParams);
            router.push('/success');
        }
    }

    let total = 0;
    for(const productId of cartProducts) {
        const price = products.find(product => product._id === productId)?.price || 0;
        total += price;
    }
      
    return (
        <>
            <Header />
            <Center>
                <ColumnsWrapper>
                    <Box>        
                        <h2>Cart</h2>
                        {!cartProducts?.length && (
                            <div>Your cart is empty</div>
                        )}
                        {products?.length > 0 && (
                        <Table>
                            <thead>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </thead>
                            <tbody>       
                                {products.map(product => (
                                    <tr key={product._id}>
                                        <ProductInfoCell>
                                            <ProductImageBox>    
                                                <Image src={product.images[0]} alt=""/>
                                            </ProductImageBox> 
                                            {product.title} 
                                        </ProductInfoCell>
                                        <td> 
                                            <Button onClick={() => decrementItem(product._id)} primary>-</Button>
                                            <QuantityLabel>
                                                 {cartProducts.filter(id => id === product._id).length}    
                                            </QuantityLabel>
                                            <Button onClick={() => incrementItem(product._id)} primary>+</Button>
                                        </td>
                                        <td>
                                            ${cartProducts.filter(id => id === product._id).length * product.price}
                                        </td>
                                    </tr>
                                ))}
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>${total}</td>
                                </tr>
                            </tbody>
                        </Table> 
                        )}
                    </Box>
                    {!!cartProducts?.length && (   
                        <Box>
                            <h2>Order Information</h2>
                                <Input type="text" name="name" placeholder="Name" value={name} onChange={ev => setName(ev.target.value)} required />
                                <Input type="text" name="email" placeholder="Email" value={email} onChange={ev => setEmail(ev.target.value)}/> 
                                <Input type="text" name="phone" placeholder="Phone" value={phone} onChange={ev => setPhone(ev.target.value)}/>
                                <StyledSelect value={pickupLocation} onChange={ev => setPickupLocation(ev.target.value)}>
                                    <option value="0">Pickup Location: </option>
                                    <option value="Richmond">Richmond：Ironwood Canadian Tire 停車場📍11388 Steveston Hwy</option>
                                    <option value="Burnaby">Burnaby: Wholesale Club 停車場 (舊Safeway旁邊）📍5335  Kingsway</option>
                                    <option value="Vancouver">Vancouver: Oakridge Mall對面TD Bank 停車場📍511 WEST 41 AVE</option>
                                    <option value="North Surrey"> North Surrey: T&T 停車場📍15277 100 AVE</option>
                                    <option value="South Surrey"> South Surrey: South Point Canadian Tire 停車場📍3059 152 Street</option>
                                    <option value="Langley"> Langley: H-Mart 停車場📍19555 Fraser Hwy</option>
                                    <option value="Coquitlam"> Coquitlam: Coquilam Centre Walmart 停車場📍2929 Barnet Hwy</option>
                                </StyledSelect>
                                <StyledSelect value={paymentMethod} onChange={ev => setPaymentMethod(ev.target.value)}>
                                    <option value="0">Payment Method: </option>
                                    <option value="Cash">Cash</option>
                                    <option value="Etransfer">Etransfer</option>
                                </StyledSelect>
                                <div id="error" style={{color: 'red'}}></div>
                                <Button primary block onClick={goToPayment}>Continue to payment</Button>
                        </Box>
                    )}
                 
                </ColumnsWrapper>
            </Center>
       
        </>
    )
}