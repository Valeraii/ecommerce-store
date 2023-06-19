import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";

export default async function handler(req, res) {
    await mongooseConnect();
    const {method} = req;

    if(method == 'GET') {
        res.json(await Order.find().sort({createdAt: -1}))
    }

    if(method == 'PUT') {
        console.log(req.body);
        const {id, paidStatus} = req.body;
        await Order.findOneAndUpdate({_id: id}, {paid: paidStatus}, {new: true});
        res.json(true);
    }
}