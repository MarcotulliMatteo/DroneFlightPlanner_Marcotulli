const plannedFlightReducer = (state = [], action) => {
    const { type, payload } = action;
    switch(type) {
        case 'ADD_FLIGHT':
            const newFlight = {
                name: payload.name,
                key: state.length,
                coordinates: payload.coordinates
            }
            return [...state, newFlight]
        default:
            return state
    }
}

export default plannedFlightReducer;