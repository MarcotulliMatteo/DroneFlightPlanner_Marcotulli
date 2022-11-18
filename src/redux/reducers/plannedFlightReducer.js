const initialState = {
    flightList: [],
    newFlightName: '',
    selectedFlight: {},
    isCreationMode: false,
    newCoordinates: []
}

const plannedFlightReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case 'ADD_FLIGHT':
            const newFlight = {
                name: payload.name,
                key: state.flightList.length,
                coordinates: payload.coordinates
            }
            const flightList = [...state.flightList]
            flightList.push(newFlight)
            return {...state, flightList}
        case 'ADD_NEW_COORDINATES':
            return {...state, newCoordinates: payload.newCoordinates}
        case 'ADD_NEW_FLIGHT_NAME':
            return {...state, newFlightName: payload.newFlightName}
        case 'SELECTED_FLIGHT':
            return {...state, selectedFlight: payload.selectedFlight}
        case 'RESET_SELECTED_FLIGHT':
            return {...state, selectedFlight: {}}
        case 'IS_CREATION_MODE':
            return {...state, isCreationMode: true}
        case 'RESET_NEW_PLANNING_VALUES':
            return {
                ...state,
                isCreationMode: false,
                newFlightName: '', 
                newCoordinates: [], 
                selectedFlight: {}
            }
        default:
            return state
    }
}

export default plannedFlightReducer;