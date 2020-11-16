import cookie from 'react-cookies'

export const Login = () => {
    return cookie.load("userInfo")
}

export const onLogin = (user) => {
    return cookie.save("userInfo", user, {path: "http://127.0.0.1:3000/main"})
}

export const logout = () => {
    return cookie.remove('userInfo')
    window.location.href = "/login"
}


export default 5