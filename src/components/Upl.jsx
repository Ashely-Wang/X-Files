import React from "react"
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import * as NewImageActions from '../actions/addImages.js'
import axios from 'axios'
class Upl extends React.Component {
    constructor() {
        super()
        this.state = {
            image: "",
            pI: ""
        }
    }
    getImage = (e) => {
        this.setState({
            image: e.target.value
        })
    }
    perviewTheImage = () => {
        this.setState({
            pI: this.state.image
        })
    }
    // addImage = () => {
    //     this.props.rr.addI({
    //         url: this.state.image,
    //         time: Date.now(),
    //         status: true
    //     })
    // }
    addGirls = async () => {
        console.log(this.state.image)
        var ret = await axios.post('http://127.0.0.1:3200/prettyGirls', {girls: [this.state.image]})
        console.log(ret)
        this.setState({
            image: "",
            pI: ""
        })
        
    }
    render() {
        return (
            <div>
                <div id="newImage">
                    <input type="text" onChange={this.getImage} value={this.state.image} className="form-control" placeholder="请输入图片地址"/>
                    <div className="ty">
                        <button type="button" onClick={this.perviewTheImage} className="btn btn-primary">预览</button>
                        <button type="button" onClick={this.addGirls} className="btn btn-success">添加</button>
                    </div>
                </div>
                <div id="previewImage">
                    <img src={this.state.pI} alt="..."/>
                </div>
            </div>
        )
    }
}

const sb = (state) => {
    return {
        newImage: state.newImage
    }
}
const sp = (dispatch) => {
    return {
        rr: bindActionCreators(NewImageActions, dispatch)
    }
}
export default connect(sb, sp)(Upl)
// export default Upl