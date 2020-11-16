import Axios from 'axios'
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux"
import * as userActions from '../actions/users.js'
import axios from 'axios'

class Users extends React.Component {
    constructor() {
        super()
        this.state = {
            count: "sadadqwewqqwrwrttttttt"
        }
    }
    ddo = async () => {
        // console.log("fuck")
        this.props.userActions.get_users()
    }
    channel2 = async () => {
        var ret = await axios.post("http://192.168.31.220:80/api/", {a: "asdasd"})
        console.log(ret)
    }
    render() {
        return <div>
            {/* <form action="http://192.168.31.220/api/test.php" method="POST">
                <input type="text" name="task" />
                <button type="submit">提交</button>
            </form> */}
            <button onClick={this.ddo}>test</button>
            <button onClick={this.channel2}>go</button>
            <h1>{this.props.users}</h1>
        </div>
    }
}

const sb = (state) => {
    return {
        users: state.users
    }
}
const sp = (dispatch) => {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
}


export default connect(sb, sp)(Users)