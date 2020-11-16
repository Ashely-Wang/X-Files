import React from "react"
import * as clientActions from '../actions/clients.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import {onLogin} from '../cookie.js'
class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            a: "fuck!",
            num: 0,
            username: "",
            password: ""
        }
    }
    getUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    getPassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    componentDidMount() {
        console.log("1")
        // document.execCommand("Refresh")
        // window.location.replace(window.location)
        // document.URL=location.href
    
        console.log("2")
    }
    login = async (e) => {
        e.preventDefault()
        const ret = await axios.post("http://127.0.0.1:3200/albumLogin", {
            username: this.state.username,
            password: this.state.password
        })
        console.log(ret.data.status)
        if (ret.data.status == "success") {
            console.log("login successfully")
            onLogin({
                username: this.state.username,
                password: this.state.password
            })
            this.props.history.push("/main")
        } else {
            this.setState({
                username: "",
                password: ""
            })
            alert("incorrect username or password")
        }
    }
    render() {
        return <div>
            <div id="login">
                <form className="form-signin" onSubmit={this.login}>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input onChange={this.getUsername} type="text" id="inputEmail" className="form-control" placeholder="Email address" required />
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" onChange={this.getPassword} id="inputPassword" className="form-control" placeholder="Password" required />
                <div className="checkbox mb-3">
                    <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted">&copy; 2017-2020</p>
                </form>
            </div>
        </div>
    }
}

const sb = (state) => {
    return {
        client: state.client
    }
}

const sp = (dispatch) => {
    return {
        clientActions: bindActionCreators(clientActions, dispatch)
    }
}


export default connect(sb, sp)(Login)