import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import styled from "styled-components";
import ListItem from "./ListItem";

const FlightList = ({selectedFlight, setSelectedFlight, newFlightName, setNewFlightName, isCreationMode, setIsCreationMode, createNewPlanning, cancelNewPlanning}) => {
    const flightList = useSelector(state => state.plannedFlightReducer);

    const [searchedFlight, setSearchedFlight] = useState([]);
    const [searchString, setSearchString] = useState('');
    
    useEffect(() => {
        const filteredList = flightList.filter(elem => {
            return elem.name.toLowerCase().includes(searchString.toLowerCase())
        })
        setSearchedFlight(filteredList)
    }, [flightList, searchString])

    const handleCheck = (event) => {
        const selected = flightList.find(elem => elem.key.toString() === event.target.value)
        setSelectedFlight(selected)
    }

    return (
        <Container>
            <SearchContainer>
                <FightSearchInput type='text' placeholder='Search Flight ...'
                 onChange={(e) => setSearchString(e.target.value)} value={searchString}/>
            </SearchContainer>
            <ListContainer>
                {   searchedFlight.length > 0 ?
                        searchedFlight.map(elem => {
                            return (
                                <ListItem value={elem}
                                index={elem.key}
                                key={elem.key}
                                isChecked={selectedFlight.key === elem.key ? true : false}
                                handleCheck={handleCheck}/>
                            )
                        }) 
                    :
                        <div>
                            <Text>Click on 'Draw New Planning'</Text>
                            <Text>for create a new Flight Planning.</Text>
                        </div>
                }
            </ListContainer>
            <CreationContainer>
                <NewPlannedFlightNameInput
                 isVisible={isCreationMode}
                 value={newFlightName}
                 onChange={(e) => setNewFlightName(e.target.value)}
                 placeholder='Insert new planning name'/>
                <ButtonContainer>
                    <CreateNewButton onClick={() => setIsCreationMode(true)}
                     isCreationMode={isCreationMode}>Draw New Planning</CreateNewButton>
                    <SaveButton onClick={() => createNewPlanning()}
                     isCreationMode={isCreationMode}>Save</SaveButton>
                    <CancelButton onClick={() => cancelNewPlanning()}
                     isCreationMode={isCreationMode}>Cancel</CancelButton>
                </ButtonContainer>
            </CreationContainer>
        </Container>
    )
}

export default FlightList;

const Container = styled.div`
    border-right: 1px solid lightgray;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 350px;
`

const ListContainer = styled.div`
    padding: 30px;
    flex: 7;
    max-height: 470px;
    overflow-y: auto;
`

const SearchContainer = styled.div`
    border-bottom: 1px solid lightgray;
    padding: 30px;
`

const FightSearchInput = styled.input`
    width: 90%;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid lightgray;
`

const CreationContainer = styled.div`
    flex: 1.3;
    display: flex;
    flex-direction: column;
`

const NewPlannedFlightNameInput = styled.input`
    padding: 10px;
    visibility: ${props => props.isVisible ? 'visible': 'hidden'};
`

const Text = styled.p`
    color: gray;
`

const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`

const CreateNewButton = styled.button`
    width: 100%;
    height: 100%;
    background-color: orange;
    border-bottom-left-radius: 10px;
    border: none;
    color: white;
    font-size: 18px;
    display: ${props => props.isCreationMode ? 'none': 'inline'};
`

const SaveButton = styled.button`
    width: 50%;
    height: 100%;
    background-color: darkgreen;
    border-bottom-left-radius: 10px;
    border: none;
    color: white;
    font-size: 18px;
    display: ${props => props.isCreationMode ? 'inline': 'none'};
`

const CancelButton = styled.button`
    width: 50%;
    height: 100%;
    background-color: red;
    border: none;
    color: white;
    font-size: 18px;
    display: ${props => props.isCreationMode ? 'inline': 'none'};
`