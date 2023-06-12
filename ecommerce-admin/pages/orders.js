import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";

export default function OrdersPage() {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        axios.get('/api/orders').then(res => {
            setOrders(res.data);
        });
    }, []);
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
                    </tr>
                </thead>
                <tbody>
                    {orders.length > 0 && orders.map(order => (
                        <tr>
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </Layout>
    )
}