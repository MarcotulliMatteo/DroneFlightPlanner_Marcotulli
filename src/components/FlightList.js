import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import ListItem from "./ListItem";
import { ADD_NEW_FLIGHT_NAME, SELECTED_FLIGHT, RESET_NEW_PLANNING_VALUES, ADD_FLIGHT, IS_CREATION_MODE, RESET_SELECTED_FLIGHT } from '../redux/actions/index';
import { Container,
     SearchContainer,
     FightSearchInput, 
     ListContainer, 
     Text, 
     CreationContainer, 
     NewPlannedFlightNameInput,
     ButtonContainer,
     CreateNewButton,
     SaveButton,
     CancelButton} from '../StyledComponents/StyledComponentFlightList';

const FlightList = () => {
    const plannedFlightStore = useSelector(state => state.plannedFlightReducer);
    const dispatch = useDispatch();

    const [searchedFlight, setSearchedFlight] = useState([]);
    const [searchString, setSearchString] = useState('');
    
    useEffect(() => {
        const filteredList = plannedFlightStore.flightList.filter(elem => {
            return elem.name.toLowerCase().includes(searchString.toLowerCase())
        })
        setSearchedFlight(filteredList)
    }, [plannedFlightStore.flightList, searchString])

    const handleCheck = (event) => {
        const selected = plannedFlightStore.flightList.find(elem => elem.key.toString() === event.target.value)
        dispatch({type: SELECTED_FLIGHT, payload: {selectedFlight: selected}})
    }

    const createNewPlanning = () => {
        if(plannedFlightStore.newCoordinates.length < 1 || plannedFlightStore.newFlightName === '') {
            return alert("You have to type a name and draw a planning on the map for go ahead!")
        }

        const payload = {
            name: plannedFlightStore.newFlightName,
            coordinates: plannedFlightStore.newCoordinates
        }
        dispatch({type: ADD_FLIGHT, payload});
        cancelNewPlanningValues()
    }

    const cancelNewPlanningValues = () => {
        dispatch({type: RESET_NEW_PLANNING_VALUES});
    }

    const handleCreationMode = () => {
        dispatch({type: IS_CREATION_MODE});
        dispatch({type: RESET_SELECTED_FLIGHT});
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
                                isChecked={plannedFlightStore.selectedFlight.key === elem.key ? true : false}
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
                 isVisible={plannedFlightStore.isCreationMode}
                 value={plannedFlightStore.newFlightName}
                 onChange={(e) => {
                    dispatch({type: ADD_NEW_FLIGHT_NAME, payload: {newFlightName: e.target.value}})
                 }}
                 placeholder='Insert new planning name'/>
                <ButtonContainer>
                    <CreateNewButton onClick={handleCreationMode}
                     isCreationMode={plannedFlightStore.isCreationMode}>Draw New Planning</CreateNewButton>
                    <SaveButton onClick={createNewPlanning}
                     isCreationMode={plannedFlightStore.isCreationMode}>Save</SaveButton>
                    <CancelButton onClick={cancelNewPlanningValues}
                     isCreationMode={plannedFlightStore.isCreationMode}>Cancel</CancelButton>
                </ButtonContainer>
            </CreationContainer>
        </Container>
    )
}

export default FlightList;