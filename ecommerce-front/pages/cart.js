import Button from "@/components/Button";
import Center from "@/components/Center";
import Header from "@/components/Header";
import styled from "styled-components";
import {useContext, useEffect, useState} from 'react';
import {CartContext} from "@/components/CartContext"
import axios from "axios";
import Table from "@/components/Table";
import Input from "@/components/Input";

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
    const {cartProducts, addProduct, removeProduct} = useContext(CartContext);
    const [products, setProducts] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [postalCode, setPostalCode] = useState('');

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
                                    <tr>
                                        <ProductInfoCell>
                                            <ProductImageBox>    
                                                <img src={product.images[0]} alt=""/>
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
                            <form method="post" action="/api/checkout">
                                <Input type="text" placeholder="Name" value={name} onChange={ev => setName(ev.target.value)}/>
                                <Input type="text" placeholder="Email" value={email} onChange={ev => setEmail(ev.target.value)}/> 
                                <Input type="text" placeholder="Address" value={address} onChange={ev => setAddress(ev.target.value)}/>
                                <Input type="text" placeholder="Postal Code" value={postalCode} onChange={ev => setPostalCode(ev.target.value)}/>
                                <Button primary block type="submit">Continue to payment</Button>
                            </form>
                          
                        </Box>
                    )}
                 
                </ColumnsWrapper>
            </Center>
       
        </>
    )
}