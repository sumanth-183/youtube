import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
flex: 1;
height: 70vh;
margin: 5px;
position: relative;
`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;

`
const Info = styled.div`
position: absolute;
top: 95px;
bottom: 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction:column;
`
const Title = styled.h1`
color: white;
margin-bottom: 20px;
`
const Button = styled.button`
padding: 10px 20px;
cursor: pointer;
font-weight: 700px;
color:gray;
background-color: white;
border-color:white;
/* border-radius: 5%; */

`
const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button>Shop Now</Button>
            </Info>

        </Container>
    )
}

export default CategoryItem
