import { images } from "@/next.config";
import { styled } from "styled-components"
import Button from "@/components/Button";
import CartIcon from "./icons/CartIcon";
import Link from "next/link"
import {CartContext} from "@/components/CartContext"
import {useContext} from 'react';

const ProductWrapper = styled.div`

`;

const Box = styled(Link) `
    background-color: #fff;
    padding: 20px;
    height: 150px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    img {
        max-width: 100%;
        max-height: 150px;
    }
`;

const Title = styled(Link) `
    font-weight: normal;
    font-size: 1rem;
    margin: 0;
    color: inherit;
    text-decoration: none;
`;

const ProductInfoBox = styled.div `
    margin-top: 5px;
`;

const PriceRow = styled.div `
    display: block;
    align-items: center;
    justify-content: space-between;
    margin-top: 2px;
`;

const Price = styled.div `
    font-size: 1rem;
    font-weight: bold;
    @media screen and (min-width: 768px) {
        font-size: 1.2rem;
        font-weight: bold;
    }
`;

export default function ProductBox({_id, title, description, price, images}) {
    const {addProduct} = useContext(CartContext);
    const url = '/product/'+_id;
    return (
        <ProductWrapper>
            <Box href={url}>
                <div>
                    <img src={images?.[0]} alt=""/>
                </div>
            </Box>
            <ProductInfoBox>
                <Title href={url}> {title} </Title>
                <PriceRow>
                    <Price> ${price} </Price>
                    <Button block primary onClick={() => addProduct(_id)}> <CartIcon /> Add </Button>
                </PriceRow>
            </ProductInfoBox>
        </ProductWrapper>
    )
}