import styled from "styled-components";
const Container = styled.div`
height: 30px;
background-color: teal;
color:white;
display: flex;
align-items: center;   //placing in center  vertically 
justify-content: center;   // placing in center horizontally
font-size: 14px;
font-weight: 500;
`


const Announcements = () => {
    return (
        <Container>
            Super Deal!! Free shipping on orders over $50
        </Container>
    )
}

export default Announcements
