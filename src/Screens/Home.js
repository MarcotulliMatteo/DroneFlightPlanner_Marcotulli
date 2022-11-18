import MapCanvas from "../components/MapCanvas";
import React from "react";
import styled from "styled-components";
import FlightList from "../components/FlightList";

const Home = () => {
    return (
        <React.Fragment>
            <HomeBody>
                <ContainerComponent>
                    <FlightList/>
                    <MapContainer>
                        <MapCanvas/>
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