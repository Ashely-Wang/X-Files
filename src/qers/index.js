import { combineReducers } from 'redux'
import client from './clients.js'
import users from './users.js'
import newImage from './addImages.js'
const rootQer = combineReducers({
    client,
    users,
    newImage
})


export default rootQer