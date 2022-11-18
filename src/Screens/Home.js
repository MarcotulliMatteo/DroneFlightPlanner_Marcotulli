import { useState } from "react";
import MapCanvas from "../components/MapCanvas";
import React from "react";
import styled from "styled-components";
import FlightList from "../components/FlightList";
import { useDispatch } from "react-redux";
import { ADD_FLIGHT } from '../redux/actions/index';

const Home = () => {
    const [selectedFlight, setSelectedFlight] = useState({});
    const [newFlightName, setNewFlightName] = useState('');
    const [isCreationMode, setIsCreationMode] = useState(false);
    const [coordinates, setCoordinates] = useState([]);

    const dispatch = useDispatch();

    const handleCreationMode = (value) => {
        setIsCreationMode(value);
        setSelectedFlight({});
    }

    const createNewPlanning = () => {
        if(coordinates.length < 1 || newFlightName === '') {
            alert("You have to type a name and draw a planning on the map for go ahead!")
            return
        }

        const payload = {
            name: newFlightName,
            coordinates: coordinates
        }
        dispatch({type: ADD_FLIGHT, payload});
        cancelNewPlanningValues()
    }

    const cancelNewPlanningValues = () => {
        setNewFlightName('');
        setIsCreationMode(false);
        setCoordinates([]);
        setSelectedFlight({});
    }

    return (
        <React.Fragment>
            <HomeBody>
                <ContainerComponent>
                    <FlightList selectedFlight={selectedFlight}
                     setSelectedFlight={(flight) => setSelectedFlight(flight)}
                     newFlightName={newFlightName}
                     setNewFlightName={(name) => {setNewFlightName(name)}}
                     isCreationMode={isCreationMode}
                     setIsCreationMode={(value) => handleCreationMode(value)}
                     createNewPlanning={createNewPlanning}
                     cancelNewPlanning={cancelNewPlanningValues}/>
                    <MapContainer>
                        <MapCanvas selectedFlight={selectedFlight}
                         isCreationMode={isCreationMode}
                         coordinates={coordinates}
                         setCoordinates={(coord) => setCoordinates(coord)}/>
                    </MapContainer>
                </ContainerComponent>
            </HomeBody>
        </React.Fragment>
    )
}

export default Home;

const HomeBody = styled.div`
    background-color: lightgray;
    padding: 0px 20px 0px 20px;
    height: 100vh;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`

const ContainerComponent = styled.div`
    border-radius: 10px;
    background-color: white;
    display: flex;
    flex-direction: row;
`

const MapContainer = styled.div`
    justify-content: center;
    display: flex;
`