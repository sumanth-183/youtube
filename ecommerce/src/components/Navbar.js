import React from "react"
import Styled from "styled-components"
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
// import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const Container = Styled.div`
    height:100px;
    
`
const Wrapper = Styled.div`
padding:10px 20px;
display:flex;
justify-content:space-between;
`

const Language = Styled.span`
    
    font-size:14px;
    cursor:pointer;

`
const SearchContainer = Styled.div`
    border:0.5px solid lightgray;
    /* width:200px; */
    display: flex;
    align-items: center;
    margin-left:25px;
    padding:5px;
`
const Input = Styled.input`
border: none;
`
const Left = Styled.div`
flex=1;    
display:flex;
align-items:center;

`
const Center = Styled.div`
flex=1;
align-items:center;
`
const Logo = Styled.h1`
font-weight:bold;

`
const Right = Styled.div`
flex=1;
display: flex;
align-items:center;
justify-content:flex-end;
/* margin-left:25px; */

`
const MenuItem = Styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;
`

export default function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>
                        EN
                    </Language>
                    <SearchContainer>
                        <Input />
                        <SearchIcon />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>
                        Site
                    </Logo>
                </Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sign In</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlinedIcon color="action" />
                        </Badge>
                    </MenuItem>


                </Right>
            </Wrapper>
        </Container>
    )
}