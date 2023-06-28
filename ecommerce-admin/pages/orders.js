import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";

export default function OrdersPage() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
       fetchOrders();
    }, []);

    function fetchOrders() {
        axios.get('/api/orders').then(res => {
            setOrders(res.data);
        });
    }

    const setPaidStatus = async (e, id, oldValue) => {
        const newValue = e.target.textContent;
        if(newValue !== oldValue) {
            const paidStatus = newValue === 'Yes' ? true : false;
            const data = {id, paidStatus};
            await axios.put('/api/orders', data);
            fetchOrders();   
        }
    };

    return (
        <Layout>
            <h1>Orders</h1>
            <table className="basic">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Recipient</th>
                        <th>Products</th>
                        <th>Details</th>
                        <th>Paid</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.length > 0 && orders.map(order => (
                        <tr key={order._id}>
                            <td>{(new Date(order.createdAt)).toLocaleString()}</td>
                            <td>{order.name} {order.email} <br/ > 
                                {order.phone} 
                            </td>
                            <td>
                                {order.line_items.map(line => (
                                    <>
                                    {line.price_data?.product_data.name} x {line.quantity} <br/>
                                    </>
                                ))}
                            </td>
                            <td>
                                {order.pickupLocation} <br/>
                                {order.paymentMethod}
                            </td>
                            <td contenteditable='true' onBlur={(e) => setPaidStatus(e, order._id, order.paid ? 'Yes' : 'No')}>
                                {order.paid ? 'Yes' : 'No'}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Layout>
    )
}