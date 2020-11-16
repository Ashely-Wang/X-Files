const clients = (state=0, action) => {
    switch(action.type) {
        case "cash":
            return state + action.account
        default:
            return state;
    }
}

export default clients