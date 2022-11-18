import { useEffect, useRef } from "react";
import styled from "styled-components";
import map from '../Images/map.png';

const MapCanvas = ({selectedFlight, isCreationMode, coordinates, setCoordinates}) => {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    
    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = 1000;
        canvas.height = 700;

        const context = canvas.getContext("2d");
        context.lineCap = "round";
        context.strokeStyle = "red";
        contextRef.current = context;

        if(selectedFlight.hasOwnProperty('coordinates')) {
            const coord = selectedFlight.coordinates
            for(let i = 0; i < coord.length; i++) {
                draw(coord[i], coord[i]);
                if(coord[i + 1]) {
                    draw(coord[i], coord[i + 1], 5);
                }
            }
        }
    }, [selectedFlight])

    const drawPoint = ({nativeEvent}) => {
        if(!isCreationMode) return
        const {offsetX, offsetY} = nativeEvent;
        draw([offsetX, offsetY], [offsetX, offsetY]);

        const coord = [...coordinates];
        if(coord.length > 0) {
            const [prevX, prevY] = coord[coord.length - 1];
            draw([prevX, prevY], [offsetX, offsetY], 5);
        }
        coord.push([offsetX, offsetY]);
        setCoordinates(coord);

        nativeEvent.preventDefault();
    }


    const draw = (begin, end, width = 15) => {
        if(width) contextRef.current.lineWidth = width;

        contextRef.current.beginPath();
        contextRef.current.moveTo(...begin);
        contextRef.current.lineTo(...end);
        contextRef.current.stroke();
    }

    
    return (
        <ContainerCanvas>
            <Canvas ref={canvasRef}
                onMouseDown={drawPoint}>
            </Canvas>
        </ContainerCanvas>
    )
}

export default MapCanvas;

const Canvas = styled.canvas`
    height: 700px;
    width: 1000px;
    background-image: url(${map});
`

const ContainerCanvas = styled.div`
    padding: 20px;
`