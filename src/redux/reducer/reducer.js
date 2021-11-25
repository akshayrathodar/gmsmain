export const languageReducer = (state, action) => {
    switch (action.type) {
        case "language/change":
            state = action.payload;
            break
    }

    return state
}