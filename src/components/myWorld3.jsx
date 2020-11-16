import React from 'react'
import {Login, logout, onLogin} from '../cookie.js'

class MW3 extends React.Component {
    constructor() {
        super()
        this.state = {
            videos: {2:6,3:6,4:14,5:7,6:7,7:8},
            currentVideo: 2
        }
    }
    // componentDidCatch() {
    //     console.log("sdasdsadasd")
    //     setInterval(() => {
    //         this.setState({
    //             currentVideo: 3
    //         })
    //     }, 7)
    // }
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({
    //             currentVideo: 3
    //         })
    //     }, 6000)
    // }
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
    changeVideo = (e) => {
        console.log("sadsaddgggggggggggggg")
        setTimeout(() => {
            if (this.state.currentVideo != 7) {
                this.setState({
                    currentVideo: this.state.currentVideo + 1
                })
            } else {
                this.setState({
                    currentVideo: 2
                })
            }
        }, (this.state.videos[this.state.currentVideo]) * 1000) 
    }
    render() {
        return (
            <div>
                <div>
                    <img src="https://xxa.wanmei.com/images/main2010/head_img_game.jpg" className="img-fluid" alt="Responsive image"/>
                </div>
                <div>
                    <img src="https://9yin.woniu.com/static/web201588/images/shenjiying-big.png" className="rounded mx-auto d-block" alt=""/>
                    <img src="https://9yin.woniu.com/static/web201588/images/xinmiaoge-big.png" className="rounded mx-auto d-block" alt=""/>
                    <img src="https://9yin.woniu.com/static/web201588/images/wuxianjiao-big.png" className="rounded mx-auto d-block" alt=""/>
                    <img src="https://9yin.woniu.com/static/web201588/images/nianluoba-big.png" className="rounded mx-auto d-block" alt=""/>
                    <img src="https://9yin.woniu.com/static/web201588/images/klp-big.png" className="rounded mx-auto d-block" alt=""/>
                </div>
                <div id="xaol">
                    <img src="http://xa.wanmei.com/images/main160909/school_img05.jpg" className="img-thumbnail" alt=""/>
                    <img src="http://xa.wanmei.com/images/main160909/school_img06.jpg" className="img-thumbnail" alt=""/>
                    <img src="http://xa.wanmei.com/images/main160909/school_img07.jpg" className="img-thumbnail" alt=""/>
                    <img src="http://xa.wanmei.com/images/main160909/school_img08.jpg" className="img-thumbnail" alt=""/>
                </div>
                <div>
                    <img src="https://p.qpic.cn/wegame/0/cb3a0452e80fc4f69bf18c7893fa81f6.jpg/1000" className="img-thumbnail rounded mx-auto d-block" alt=""/>
                    <img src="https://p.qpic.cn/wegame/0/715ae7cec23197482a7555601787c8e7.jpg/1000" className="img-thumbnail rounded mx-auto d-block" alt="..."/>
                    <img src="https://p.qpic.cn/wegame/0/efd461f52dd391ef68aa2fc2acd4f51a.jpg/1000" className="img-thumbnail rounded mx-auto d-block" alt="..."/>
                    <img src="https://p.qpic.cn/wegame/0/278f46bf35c126c41af4108735a3afa5.jpg/1000" className="img-thumbnail rounded mx-auto d-block" alt="..."/>
                </div>
                <img src="http://event51.wanmei.com/xa/201403/tese/images/menpai/right_mp_huashan.jpg" className="rounded mx-auto d-block img-thumbnail" alt=""/>
                <img src="http://event51.wanmei.com/xa/201403/tese/images/menpai/right_mp_hengshan2.jpg" className="rounded mx-auto d-block img-thumbnail" alt=""/>
                <img src="http://event51.wanmei.com/xa/201403/tese/images/menpai/right_mp_wuxian.jpg" className="rounded mx-auto d-block img-thumbnail" alt=""/>
                <img src="http://event51.wanmei.com/xa/201403/tese/images/menpai/right_mp_emei.jpg" className="rounded mx-auto d-block img-thumbnail" alt=""/>
                <img src="http://event51.wanmei.com/xa/201403/tese/images/menpai/right_mp_tangmen.jpg" className="rounded mx-auto d-block img-thumbnail" alt=""/>
                <img src="https://xa.games.wanmei.com/images/cover20200715/page2.jpg" alt=""/>
                <div id="wegame">
                <img src="https://xa.games.wanmei.com/images/cover20200715/renGirl2.png" alt=""/>
                </div>
                <img src="http://xa.wanmei.com/hd/1810/classics2/images/pic1.png" className="rounded mx-auto d-block" alt=""/>
                <img src="http://xa.wanmei.com/hd/1810/classics2/images/pic2.png" className="rounded mx-auto d-block" alt=""/>
                <img src="http://xa.wanmei.com/hd/1810/classics2/images/pic3.png" className="rounded mx-auto d-block" alt=""/>
                <img src="http://xa.wanmei.com/hd/1810/classics2/images/pic4.png" className="rounded mx-auto d-block" alt=""/>
                <img src="http://xa.wanmei.com/hd/1810/classics2/images/pic5.png" className="rounded mx-auto d-block" alt=""/>
                <video src={"https://webdownload.wmupd.com/webdownload/client/xaol_20200724_" + this.state.currentVideo + ".mp4"} onPlay={this.changeVideo} muted={true} autoPlay preload="" loop=""></video>
                {/* <figure class="figure">
                <img src="https://xa.games.wanmei.com/images/main20200731/neiye.jpg" className="figure-img img-fluid rounded" alt="..." />
                <figcaption class="figure-caption">A caption for the above image.</figcaption>
                </figure> */}
            </div>
        )
    }
}



export default MW3