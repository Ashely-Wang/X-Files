import axios from 'axios'

const fetch_static = (user) => {
    console.log("sadad")
    return {
        name: user.first_name + user.last_name,
        password: user.password
    }
}



export function get_users() {
    return dispatch => {
        axios.get("http://192.168.31.220/api/test.php").then(res => res.json()).then(data => {
            dispatch(fetch_static(data))
        })
    }
}