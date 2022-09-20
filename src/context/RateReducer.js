
const rateReducer = (state, action) => {

    switch (action.type) {
        case "SET_RATE":
            return {
                ...state,
                rate: action.payload
            }
        default:
            return state;
    }

}

export default rateReducer;