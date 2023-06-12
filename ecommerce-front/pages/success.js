import Center from "@/components/Center";
import Header from "@/components/Header";
import styled from "styled-components";

const Box = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 30px;
    margin-top: 30px;
`;

export default function SuccessPage() {
    return (
        <>      
            <Header />
            <Center>
                <Box>
                    <h1>Thanks for your order!</h1>
                    <p>We will email you when your order will be sent</p>
                </Box>
            </Center>
        </>
    )
}