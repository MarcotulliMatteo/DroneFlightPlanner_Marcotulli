import styled from "styled-components";
import map from '../Images/map.png';

export const Canvas = styled.canvas`
    height: 700px;
    width: 1000px;
    background-image: url(${map});
`

export const ContainerCanvas = styled.div`
    padding: 20px;
`