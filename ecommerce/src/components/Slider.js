import React from 'react'
import styled from 'styled-components'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
//import ShoppingImage from '../props/shopping.png'
import { sliderItems } from '../Data';

const Container = styled.div`
width: 100%;
height:100vh;
display: flex;
position: relative;
overflow: hidden;
`

const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${props => props.SlideIndex * -100}vw);
`

const Slide = styled.div`
width:100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #${(props) => props.bg};
`
const ImgContainer = styled.div`
flex: 1;
height: 100%;
`
const Image = styled.img`
height: 80%;
/* background-color: transparent; */
`
const InfoContainer = styled.div`
flex: 1;
/* border-style:solid; */
/* border-width:5px; */
padding: 50px;
`
const Title = styled.h1`
font-size:70px;
`
const Desc = styled.p`
margin:50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`
const Button = styled.button`
cursor:pointer;
padding: 10px 15px;
font-weight: 400;
background-color: transparent;
;
`



const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: beige;
color: crimson;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
margin: auto;
cursor: pointer;
opacity:0.5;
left:${props => props.direction === "left" && "10px"};
right:${props => props.direction === "right" && "10px"};
z-index: 2;
`


const Slider = () => {
    const [SlideIndex, setSlideIndex] = React.useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(SlideIndex > 0 ? SlideIndex - 1 : 2)
        }
        else {
            setSlideIndex(SlideIndex < 2 ? SlideIndex + 1 : 0);
        }
    }
    return (

        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowBackIcon />
            </Arrow>
            <Wrapper SlideIndex={SlideIndex}>
                {sliderItems.map((item) => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>SHOP NOW!</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowForwardIcon />
            </Arrow>

        </Container>
    )
}

export default Slider
