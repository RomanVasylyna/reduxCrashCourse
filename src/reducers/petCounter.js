const petCounter = (state = 10, action) => {
    switch (action.type) {
        case "PET_INCREASED":
            return state + 1;
        case "PET_DECREASED":
            return state >0 ? state - 1 : state;
        default:
            return state;
    }
}

export default petCounter;