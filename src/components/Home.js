import MapCanvas from "./MapCanvas";
import React from "react";
import { HomeBody, ContainerComponent, MapContainer } from '../StyledComponents/StyledComponentHome';
import FlightList from "./FlightList";

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