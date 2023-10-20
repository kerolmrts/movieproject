import styled from "styled-components";

export const Container = styled.header`
grid-area: header;
height: 50px;
width: 100%;
border-bottom-width: 1px;
border-bottom-style: solid;
display:flex;
justify-content:space-between;
align-items: center;
padding:0 80px;
height: ${(props) => (props.menuOpen ? "100px" : "auto")};
opacity: 0.5;


`

export const Button= styled.button`
display: flex;
position: absolute;
top: 10px;
right: 10px;


`

