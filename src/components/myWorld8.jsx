import React from 'react'
import {Link} from 'react-router-dom'
import HM from '../components/horrorPart.jsx'
import PD from '../components/pd.jsx'
import MHF from '../components/moreHorrorFilms.jsx'
import {Login, logout, onLogin} from '../cookie.js'
class MW8 extends React.Component {
    constructor() {
        super()
        this.state = {
            images:[
                "https://www.tanmizhi.com/img/allimg/04/17-1P4131P237.png",
                "http://pic.qv67.com/uploads/2018071709/20180717091188.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603702889876&di=9a7c31e7535c519ae415c5f837889ebf&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fzhidao%2Fwh%253d680%252c800%2Fsign%3Df902fc893f9b033b2cddf4dc2dfe1aeb%2Fb21bb051f81986181b520e0941ed2e738bd4e622.jpg",
                "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=174725666,230222582&fm=26&gp=0.jpg",
                "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1297340580,364812077&fm=26&gp=0.jpg",
                "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3956760901,2714115272&fm=26&gp=0.jpg",
                "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1998752008,2756127030&fm=26&gp=0.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603703246341&di=27b57306be6fd5ae868f7e3d804d5f02&imgtype=0&src=http%3A%2F%2Fwx1.sinaimg.cn%2Flarge%2F007dL8h4ly1fupnxxrylbj30m80cialm.jpg",
                "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1031150112,1115525191&fm=26&gp=0.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603703606762&di=0d0926ab7e3533e713dfd75762e513c8&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farchive%2F6a4d3cb94239aae0e385613fd39111ccf90c7438.jpg",
                "https://w.wallhaven.cc/full/lm/wallhaven-lmvd7p.jpg",
                "https://w.wallhaven.cc/full/0q/wallhaven-0qg3pd.jpg",
                "https://w.wallhaven.cc/full/76/wallhaven-76dqk3.jpg",
                "https://w.wallhaven.cc/full/4o/wallhaven-4o3djm.jpg"
                // "https://wx2.sinaimg.cn/mw690/006z09Zkgy1ghsq1rqyawj31hc0s84lq.jpg"
            ],
            videos: [
                "//player.bilibili.com/player.html?aid=838144201&bvid=BV1gg4y1B7Sw&cid=192418979&page=1",
                "//player.bilibili.com/player.html?aid=371016710&bvid=BV15Z4y1H7ZV&cid=203359712&page=1",
                "//player.bilibili.com/player.html?aid=44010973&bvid=BV1Rb41117VF&cid=77089414&page=1",
                "//player.bilibili.com/player.html?aid=33497618&bvid=BV1vW41117Xi&cid=58643720&page=1",
                "//player.bilibili.com/player.html?aid=882683127&bvid=BV1iK4y1r7dP&cid=174396466&page=1",
                "//player.bilibili.com/player.html?aid=328760242&bvid=BV1jA411e7x6&cid=212619110&page=1",
                "//player.bilibili.com/player.html?aid=456132316&bvid=BV1M5411Y7RN&cid=207499633&page=1",
                "//player.bilibili.com/player.html?aid=18194429&bvid=BV1FW411q7Fp&cid=29704433&page=1",
            ],
            currentTowVideos: [
                "//player.bilibili.com/player.html?aid=838144201&bvid=BV1gg4y1B7Sw&cid=192418979&page=1",
                "//player.bilibili.com/player.html?aid=371016710&bvid=BV15Z4y1H7ZV&cid=203359712&page=1"
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
    ss = (e) => {
        this.props.history.push({pathname: "/hs", query: {id: this.state.images.indexOf(e.target.src)}})
    }
    getTwoVideos = () => {
        return [
            <iframe src={this.state.currentTowVideos[0]} key="0" scrolling="no" border="0" frameBorder="no" framespacing="0" allowFullScreen={true}> </iframe>,
            <iframe src={this.state.currentTowVideos[1]} key="1" scrolling="no" border="0" frameBorder="no" framespacing="0" allowFullScreen={true}> </iframe>
        ]
    }
    changeVideoA = () => {
        if (this.state.videos[this.state.videos.indexOf(this.state.currentTowVideos[1]) + 2]) {
            this.setState({
                currentTowVideos: [
                    this.state.videos[this.state.videos.indexOf(this.state.currentTowVideos[0]) + 2],
                    this.state.videos[this.state.videos.indexOf(this.state.currentTowVideos[1]) + 2]
                ]
            })
        }
        console.log("不能再加啦")
    }
    changeVideoR = () => {
        if (this.state.videos[this.state.videos.indexOf(this.state.currentTowVideos[0]) - 2]) {
            this.setState({
                currentTowVideos: [
                    this.state.videos[this.state.videos.indexOf(this.state.currentTowVideos[0]) - 2],
                    this.state.videos[this.state.videos.indexOf(this.state.currentTowVideos[1]) - 2]
                ]
            })
        }
        console.log("不能再减啦")
    }
    getHorrorFilm = () => {

    }
    render() {
        return (<div id="HorrorPage">
            <div className="ite ksp">
            <div className="mksp">
                <svg onClick={this.changeVideoR} width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-double-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                <path fillRule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                </svg>
            </div>
            {this.getTwoVideos()}
            <div className="mksp">
                <svg onClick={this.changeVideoA} width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-double-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </div>
            </div>
            <div className="monster">
                <HM/>
            </div>
            <div className="pd">
                <PD/>
            </div>
            <div className="mhfbox">
                <MHF></MHF>
            </div>
            {/* <h1>asd</h1> */}
            {/* <iframe src="//player.bilibili.com/player.html?aid=838144201&bvid=BV1gg4y1B7Sw&cid=192418979&page=1" scrolling="no" border="0" frameBorder="no" framespacing="0" allowFullScreen="true"> </iframe> */}
            <div className="sj8">
            {this.state.images.map((item, index) => {
                console.log(item + index)
                return <div key={index} className="ite">
                <img onClick={this.ss} src={item} className="img-thumbnail" alt="..."/>
                </div>
            })}
            </div>
        </div>)
    }
}

export default MW8

