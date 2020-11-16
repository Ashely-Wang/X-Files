import React from 'react'
import {Login, logout, onLogin} from '../cookie.js'
class MW4 extends React.Component {
    constructor() {
        super()
        this.state = {}
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
    render() {
        return (<div>
            <img src="//game.gtimg.cn/images/wuxia/cp/a20191024version/bg-4.jpg" alt=""/>
            <img src="//game.gtimg.cn/images/wuxia/cp/a20191024version/bg-5.jpg" alt=""/>
            <div id="threegirls"> 
            <img src="http://game.gtimg.cn/images/ty/cp/a20201009tdjh/bj2.jpg" alt=""/>
            <img id="midd" src="http://game.gtimg.cn/images/ty/cp/a20201009tdjh/ct.jpg" alt=""/>
            <img src="//game.gtimg.cn/images/wuxia/act/a20150522clothes/xwly/bg.jpg" alt=""/>
            <img src="//game.gtimg.cn/images/wuxia/act/a20150522clothes/xwxjh/bg.jpg" alt=""/>
            <img src="//ossweb-img.qq.com/images/wuxia/act/a20150522clothes/xwsy/bg.jpg" alt=""/>
            <img src="//game.gtimg.cn/images/wuxia/act/a20150522clothes/xwdy/bg.jpg" alt=""/>
            <img src="http://game.gtimg.cn/images/wuxia/act/a20170524ydy/bg20170524.jpg" alt=""/>
            <img src="http://ossweb-img.qq.com/images/wuxia/act/a20141219sdmh/qwy/jt-2-2.jpg" className="img-thumbnail" alt=""/>
            <img src="http://game.gtimg.cn/images/wuxia/act/a20150522clothes/xwdy/b-2.jpg" className="img-thumbnail" alt=""/>
            </div>
        </div>)
    }
}



export default MW4