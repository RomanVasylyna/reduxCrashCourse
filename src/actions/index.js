export const petIncrement = number => {
    return {
        type: "PET_INCREASED",
        payload: number
    }
}


export const petDecrement = number => {
    return {
        type: "PET_DECREASED",
        payload: number
    }
}


export const favPetIncrement = () => {
    return {
        type: "PET_FAVOURITE_INCREASED"
    }
}

export const favPetDecrement = () => {
    return {
        type: "PET_FAVOURITE_DECREASED"
    }
}
