import Center from "@/components/Center";
import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { styled } from "styled-components";
import ProductsGrid from "@/components/ProductsGrid";
import Title from "@/components/Title";
import SearchIcon from "@/components/icons/SearchIcon";
import React from "react";
import { useState } from "react";

const StyledSearch = styled.div`
    display: flex;
    align-items: center;
`;

const SearchBar = styled.input`
    display: flex;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-left: auto;
`;

const SearchBtn = styled.button`
    color: white;
    border: 1px solid #5542F6;
    background-color: #5542F6;
    padding: 4px 15px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    svg {
        height: 15px;
        margin-right: 5px;
    }
`;


export default function ProductsPage({products}) {
    const searchBar = React.useRef(null);
    const [searchResult, setSearchResult] = useState(products);

    const Search = () => {
        let searchResult = [];
        if(searchBar.current.value === "") {
            return setSearchResult(products);
        }
        for(let i = 0; i < products.length; i++) {
            if(products[i].title.toLowerCase().includes(searchBar.current.value.toLowerCase())) {
                searchResult.push(products[i]);
            }
        }
        console.log(searchResult);
        return setSearchResult(searchResult);
    }; 

    return (
        <>
            <Header />
            <Center>
                <StyledSearch> 
                    <Title>All products</Title>
                    <SearchBar type="text" ref={searchBar} placeholder="Search.."/>
                    <SearchBtn onClick={Search}> <SearchIcon /> </SearchBtn>
                </StyledSearch>
                <ProductsGrid products={searchResult}/>
            </Center>
        </>
    )
}

export async function getServerSideProps() {
    await mongooseConnect(); 
    const products = await Product.find({}, null, {sort:{'_id': -1}});
    return {props:{
        products: JSON.parse(JSON.stringify(products))
    }};
}