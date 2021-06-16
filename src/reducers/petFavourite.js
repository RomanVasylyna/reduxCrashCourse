const petFavourite = (state = 5, action) => {
    switch (action.type) {
        case "PET_FAVOURITE_INCREASED":
            return state + 1;
        case "PET_FAVOURITE_DECREASED":
            return state >0 ? state - 1 : state;
        default:
            return state;
    }
}

export default petFavourite;
