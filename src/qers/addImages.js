const newImage = (state="", action) => {
    switch (action.type) {
        case true:
            return state + action.url
        case false:
            return state
        default: return state
    }
}


export default newImage