const users = (state="nobody", action) => {
    if (action.name) {
        return action.name + "son of a bitch"
    } else {
        return "get fuck away!!!!!!!!!!!! you motherfucker!!!!!!"
    }
}


export default users

