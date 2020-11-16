import React from 'react'
import PDD from './pdd.jsx'
import {Route} from 'react-router-dom'
import APD from './apd.jsx'
import axios from 'axios'


class PD extends React.Component {
    constructor() {
        super()
        this.state = {
            style1: {display: "block"},
            style2: {display: "none"},
            style3: {display: "inline-block"},
            style4: {display: "none"},
            style8: {display: "none"},
            pds: [],
            pds1: [
                {image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604384404130&di=009ae7c7eec2e88bdeda8b1f35bfc09b&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180429%2Fd01c777b0d884617933cd855107e9567.jpeg",
                name: "养鬼吃人" , intr: ""},
                {image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604383113336&di=ca3fea9547952a7611d2a51b387d6f42&imgtype=0&src=http%3A%2F%2Fa1.att.hudong.com%2F52%2F52%2F01300542392970143256527471668.jpg",
                name: "黑暗侵袭" , intr: ""},
                {image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604384222834&di=7cfa6292b3f8dfe71f70056b405915aa&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171113%2F3625b8522d1141559203443b4e7235fb.jpeg",
                name: "死神来了" , intr: ""},
                {image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604384260510&di=962f8235c37b12f0798f8c597cab49d0&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20160109%2Fmp53521099_1452346148478_15.jpg",
                name: "兽餐" , intr: ""},
                {image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604384692455&di=9dd95ad01cb684514278b3c9f0c27cc0&imgtype=0&src=http%3A%2F%2Fimg02.sogoucdn.com%2Fapp%2Fa%2F200765%2F05a9604ff13883c8a3a9bf12a76f56e0",
                name: "猛鬼街" , intr: ""},
                {image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604384801007&di=5a100df8e20a69d3c9eda57207c9b60f&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3Db859526b16ce36d3a20483380af23a24%2F48ab9a58d109b3de7f6e4ad9cfbf6c81820a4c97.jpg",
                name: "十三号星期五" , intr: ""},
                {image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604462057674&di=5eeb01d146189c3b1ea40f20092247d6&imgtype=0&src=http%3A%2F%2Fpic.baike.soso.com%2Fp%2F20140316%2F20140316221215-557225202.jpg",
                name: "致命弯道" , intr: ""},
                {image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604462455968&di=7e3c5904dbb8b0cf50b550e93d9e4620&imgtype=0&src=http%3A%2F%2Fww2.sinaimg.cn%2Fmw690%2F006lviFmjw1f73v8afenpj30go0axmxe.jpg",
                name: "潜伏" , intr: ""},
                {image: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=195771066,2715924439&fm=26&gp=0.jpg",
                name: "异形" , intr: ""},
                {image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604463204675&di=63645d0badbff246be9c5bfb4f90c9d5&imgtype=0&src=http%3A%2F%2Fimage11.m1905.cn%2Fuploadfile%2F2008%2F0905%2FWallpaper_1_1280.jpg",
                name: "隔山有眼" , intr: ""},
            ],
            pds2: [
                {image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604466216956&di=593652bf69b3d4d655dc972ffff3f3f1&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Fface%2Fd7e805eaa1d35292177b5d56654ba368dddd1ac7.jpg",
                name: "月光光心慌慌" , intr: ""},
                {image: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=712955055,2532327421&fm=26&gp=0.jpg",
                name: "电锯惊魂" , intr: ""},
                {image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604464758396&di=0d91b896e2ed36ba19107afe15f37f0b&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20191020%2Fb0dbe91d1e424499a6890749a1e1508c.jpeg",
                name: "鬼作秀" , intr: ""},
                {image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604465544309&di=2cfc0e2d331be1597818f1eae76e9835&imgtype=0&src=http%3A%2F%2Fn1.itc.cn%2Fimg8%2Fwb%2Frecom%2F2017%2F06%2F21%2F149803121840792539.PNG",
                name: "鬼娃回魂" , intr: ""},
                {image: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1385316018,2143503410&fm=26&gp=0.jpg",
                name: "生化危机" , intr: ""},
                {image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604465883285&di=615d812c707fd5e5d1deff1b163c620c&imgtype=0&src=http%3A%2F%2Falcdn.img.xiaoka.tv%2F20161022%2Fe6b%2F4d5%2F53912888%2Fe6b4d5c9a44f218966ada84e8dc6a822.jpg%401e_1c_0o_0l_640h_640w_90q_1pr.jpg",
                name: "招魂" , intr: ""},
                {image: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=537845377,75866398&fm=26&gp=0.jpg",
                name: "寂静岭" , intr: ""},
                {image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604465971813&di=ea0ce126949f1932ba96933bf0a3de4f&imgtype=0&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D915581261%2C2543429060%26fm%3D214%26gp%3D0.jpg",
                name: "人皮客栈" , intr: ""},
                {image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604465382290&di=0f9779e9472aad08a63d19f087cadb01&imgtype=0&src=http%3A%2F%2Fwww.qz123.com%2FUploads%2FImages%2F20171002%2F6364253158303975794369114.jpg",
                name: "小丑回魂" , intr: ""},
                {image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604466129280&di=e98ae24544acb1202ce1f12e1d932be2&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3D40d95df3203fb80e0cd161df06d02ffb%2F5a793c2ac65c103812739f00b3119313b17e8988.jpg",
                name: "异形魔怪" , intr: ""},
            ],
            pds3: [
                {image: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3044463528,1828148074&fm=26&gp=0.jpg",
                name: "活跳尸" , intr: ""},
                {image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604469611826&di=0365cd4a9fddb541e71d0f4fca01ed6f&imgtype=0&src=http%3A%2F%2Fimg3.doubanio.com%2Fview%2Fthing_review%2Fl%2Fpublic%2Fp1917046.jpg",
                name: "鬼玩人" , intr: ""},
                {image: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1251016224,814702597&fm=26&gp=0.jpg",
                name: "鬼追人" , intr: ""},
                {image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604469746170&di=078020309475b163aa82bab84224fd74&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fbaike%2Fw%253D268%2Fsign%3D2f30fe7a9145d688a302b5a29cc37dab%2F72f082025aafa40fa736f994a864034f79f01982.jpg",
                name: "南瓜恶灵" , intr: ""},
                {image: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2644168640,1329617249&fm=26&gp=0.jpg",
                name: "惊声尖叫" , intr: ""},
                {image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604469869768&di=0d6f30cb1807738d8e5642bce20e4214&imgtype=0&src=http%3A%2F%2Fwww.ttpaihang.com%2Fimage%2Fnews%2F20100517135339.jpg",
                name: "鬼哭神嚎" , intr: ""},
                {image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604469943881&di=02657d6b643a94261d1e5a1609723c20&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2Fkis%2Ffengmian%2F1071%2F1071977%2F1071977_ver_big.jpg",
                name: "篮子里的恶魔" , intr: ""},
                {image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604470070240&di=dfef1e873e5129a30edbfcad95fd0ec8&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F-4o3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F79f0f736afc37931e63ebf8eeac4b74542a911c6.jpg",
                name: "恶魔咆哮" , intr: ""},
                {image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604470125867&di=6308993619a21b981c9f2b3ea27ea445&imgtype=0&src=http%3A%2F%2Fwww.lovehhy.net%2Flib%2Fimg%2F3621976%2F804661_1411360467.jpg",
                name: "生人回避" , intr: ""},
                {image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604470195161&di=62949c09cb3fc15f7118cdd1068acd1c&imgtype=0&src=http%3A%2F%2Fimg1.cache.netease.com%2Fcatchpic%2F2%2F28%2F28FADB4E1B4FF51CAF9CCB2F9F8D2A5A.jpg",
                name: "惹鬼回路" , intr: ""},
            ],
            currentSeries: [],
            currentSeriesName: ""
        }
    }
    changeThePd = (e) => {
        e.preventDefault()
        if (this.state.pds == this.state.pds1) {
            this.setState({
                pds: this.state.pds2
            })
        } else if (this.state.pds == this.state.pds2) {
            this.setState({
                pds: this.state.pds3
            })
        } else {
            this.setState({
                pds: this.state.pds1
            })
        }
    }
    enterPd = async (e) => {
        // alert("进去啦" + e)
        const ret = await axios.get(`http://127.0.0.1:3200/gs?sname=${e.name}`)
        console.log(ret.data)
        this.setState({
            style1: {display: "none"},
            style2: {display: "block"},
            style3: {display: "none"},
            style4: {display: "inline-block"},
            currentSeries: ret.data,
            currentSeriesName: e.name
        })
    }
    backToPd = (e) => {
        e.preventDefault()
        this.setState({
            style1: {display: "block"},
            style2: {display: "none"},
            style3: {display: "inline-block"},
            style4: {display: "none"},
        })
    }
    componentDidMount() {
        this.setState({
            pds: this.state.pds1
        })
    }
    render() {
        return(<div>
            <div className="card">
            <div className="card-header chf">
                卐选择你喜欢的系列卍
                <span className="hid" onClick={() => {
                    if(this.state.style8.display == "none") {
                        this.setState({
                            style8: {display: "block"}
                        })
                    } else {
                        this.setState({
                            style8: {display: "none"}
                        })
                    }
                }}>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-double-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    <path fillRule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </span>
            </div>
            <div className="card-body series" style={this.state.style8}>
                <h3 className="card-title">Horror Series</h3>
                <div style={this.state.style1}>
                    <PDD epd={this.enterPd.bind(this)} pds={this.state.pds}></PDD>
                </div>
                <div style={this.state.style2}>
                    <APD currentSeries={this.state.currentSeries} currentSeriesName={this.state.currentSeriesName}></APD>
                </div>
                {/* <p className="card-text"></p> */}
                <button onClick={this.changeThePd} style={this.state.style3} className="btn btn-info ufo">
                    换一批&ensp;
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-repeat" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
                    <path fillRule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
                    </svg>
                </button>
                <button onClick={this.backToPd} style={this.state.style4} className="btn btn-info ufo">
                    返回片单&ensp;
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                    </svg>
                </button>
                {/* <a href="#" className="btn btn-success oooo">查看片单</a> */}
            </div>
            </div>
        </div>)
    }
}


export default PD