import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD_NEW_COORDINATES } from '../redux/actions/index';
import { Canvas, ContainerCanvas } from '../StyledComponents/StyledComponentMapCanvas';

const MapCanvas = () => {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const plannedFlightStore = useSelector(state => state.plannedFlightReducer);
    const dispatch = useDispatch();
    
    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = 1000;
        canvas.height = 700;

        const context = canvas.getContext("2d");
        context.lineCap = "round";
        context.strokeStyle = "red";
        contextRef.current = context;

        if(plannedFlightStore.selectedFlight.hasOwnProperty('coordinates')) {
            const coord = plannedFlightStore.selectedFlight.coordinates
            for(let i = 0; i < coord.length; i++) {
                draw(coord[i], coord[i]);
                if(coord[i + 1]) {
                    draw(coord[i], coord[i + 1], 5);
                }
            }
        }
    }, [plannedFlightStore.selectedFlight])

    const drawPoint = ({nativeEvent}) => {
        if(!plannedFlightStore.isCreationMode) return
        const {offsetX, offsetY} = nativeEvent;
        draw([offsetX, offsetY], [offsetX, offsetY]);

        const coord = [...plannedFlightStore.newCoordinates];
        if(coord.length > 0) {
            const [prevX, prevY] = coord[coord.length - 1];
            draw([prevX, prevY], [offsetX, offsetY], 5);
        }
        coord.push([offsetX, offsetY]);
        dispatch({type: ADD_NEW_COORDINATES, payload: {newCoordinates: coord}})

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