import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {Login, logout, onLogin} from '../cookie.js'
// import {bindActionCreators} from 'redux'


class MW5 extends React.Component {
    constructor() {
        super()
        this.state = {
            images: [
                "https://cdn.ggac.net/media/work/image/2020/10/71313dd4-0932-11eb-afce-0242c0a82002.jpg",
                "https://cdn.ggac.net/media/work/image/2020/10/a0d54a54-0931-11eb-9beb-0242c0a82002.jpg",
                "https://cdn.ggac.net/media/work/image/2020/10/805eb80c-0605-11eb-8759-0242c0a82002.jpg",
                "https://cdn.ggac.net/media/work/image/2020/09/37335f58-ffc9-11ea-b2aa-0242c0a88002.jpg",
                "https://cdn.ggac.net/media/work/image/2020/07/3afb8e78-bc38-11ea-ac9d-0242c0a84002.jpg",
                "https://cdn.ggac.net/media/work/image/2020/09/64257ad2-fd3f-11ea-b96e-0242c0a88002.gif",
                "https://cdn.ggac.net/media/work/image/2020/09/39504cd4-fd3e-11ea-8835-0242c0a88002.jpg",
                "https://cdn.ggac.net/media/work/image/2020/09/78629334-fc0b-11ea-b96e-0242c0a88002.jpg",
                "https://cdn.ggac.net/media/work/image/2020/09/9b40c5a6-f805-11ea-95d6-0242ac110002.jpg",
                "https://cdn.ggac.net/media/work/image/2020/09/064cffc2-f59a-11ea-a4d5-0242c0a88002.jpg"
            ]
        }
    }
    componentDidMount() {
        var userStatus = Login()
        console.log(userStatus)
        if (userStatus) {
            console.log("yyyyyyy")
            return true
        } else {
            this.props.history.push("/login")
            console.log("asdasdasd")
        }
    }
    getGirls = async () => {
        var ret = await axios.get("http://127.0.0.1:3200/prettyGirls")
        console.log(ret.data)
        this.setState({
            images: ret.data
        })
    }
    render() {
        return (
            <div>
                <div className="sj">
                    {this.state.images.map((item, index) => {
                        console.log(item + index)
                        return <div key={index} className="ite">
                        <img src={item.girlurl} className="img-thumbnail" alt="..."/>
                        </div>
                    })}
                </div>
                <button type="button" className="btn btn-primary" onClick={this.getGirls}>get</button>
                <img src={this.props.newImage} className="img-thumbnail" alt=""/>
            </div>
        )
    }
}


const sb = (state) => {
    return {
        newImage: state.newImage
    }
}


export default connect(sb, {})(MW5)