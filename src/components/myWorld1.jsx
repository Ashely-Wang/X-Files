import React from 'react'
import {} from 'react-redux'
import {} from 'redux'
import {Login, logout, onLogin} from '../cookie.js'

class MW1 extends React.Component {
    constructor() {
        super()
        this.state = {
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
    render() {
        return (<div>
            <img src="https://game.gtimg.cn/images/ty/web201907/news-img.jpg" className="img-fluid" alt="Responsive image"></img>
            <img src="https://game.gtimg.cn/images/ty/cp/a20190709xdyk/tab_06.png" alt="..." className="img-thumbnail"></img>
            <img src="https://game.gtimg.cn/images/ty/cp/a20190709xdyk/tab_05.png" alt="..." className="img-thumbnail"></img>
            <img src="https://game.gtimg.cn/images/ty/cp/a20190709xdyk/tab_03.png" alt="..." className="img-thumbnail"></img>
            <img src="https://game.gtimg.cn/images/ty/cp/a20190709xdyk/202010/bg_gushi.jpg" className="img-fluid" alt="Responsive image"></img>
            <picture>
            <source type="image/svg+xml"/>
            <img src="https://game.gtimg.cn/images/ty/cp/a20200825tycsz/bg4.jpg" className="img-fluid img-thumbnail" alt="..."></img>
            </picture>
            <picture>
            <source type="image/svg+xml"/>
            <img src="https://game.gtimg.cn/images/ty/cp/a20200825tycsz/bg5.jpg" className="img-fluid img-thumbnail" alt="..."></img>
            </picture>
            <picture>
            <source type="image/svg+xml"/>
            <img src="https://game.gtimg.cn/images/ty/cp/a20200825tycsz/bg8.jpg" className="img-fluid img-thumbnail" alt="..."></img>
            </picture>
            <img src="https://game.gtimg.cn/images/ty/cp/a20200825tycsz/part2-img7.png" alt="..." className="img-thumbnail ttt"></img>
            <img src="https://game.gtimg.cn/images/ty/cp/a20200825tycsz/part2-img1.png" alt="..." className="img-thumbnail ttt"></img>
            <img src="https://game.gtimg.cn/images/ty/cp/a20200825tycsz/part2-img2.png" alt="..." className="img-thumbnail ttt"></img>
            <img src="https://game.gtimg.cn/images/ty/cp/a20200825tycsz/part2-img3.png" alt="..." className="img-thumbnail ttt"></img>
            <img src="https://game.gtimg.cn/images/ty/cp/a20200825tycsz/part2-img4.png" alt="..." className="img-thumbnail ttt"></img>
            <img src="https://game.gtimg.cn/images/ty/cp/a20200825tycsz/part2-img5.png" alt="..." className="img-thumbnail ttt"></img>
            <img src="https://game.gtimg.cn/images/ty/cp/a20200825tycsz/part2-img6.png" alt="..." className="img-thumbnail ttt"></img>
            <img src="https://game.gtimg.cn/images/ty/cp/a20200825tycsz/part2-img8.png" alt="..." className="img-thumbnail ttt"></img>
            {/* <img src="https://jx3.xoyo.com/../../assets/img/bg-8f63b331.jpg.webp" alt=""/> */}
            <div id="ppp">
            <img src="https://jx3.xoyo.com/uploadfile/2020/1015/20201015125108995.png" alt="..." className="img-thumbnail"></img>
            <img src="https://jx3.xoyo.com/uploadfile/2020/0717/20200717024755603.png" alt="..." className="img-thumbnail"></img>
            </div>
            <img src="https://jx3.xoyo.com/zt/2014/11/21/zt/menpai/assets/images/mp-pl/per.png" className="rounded float-left jwang3" alt="..."></img>
            <img src="https://jx3.xoyo.com/zt/2014/11/21/zt/menpai/assets/images/mp-tm/per.png" className="rounded float-left jwang3" alt="..."></img>
            <img src="https://jx3.xoyo.com/zt/2014/11/21/zt/menpai/assets/images/mp-bd/per.png" className="rounded float-left jwang3" alt="..."></img>
            <img src="https://jx3.xoyo.com/zt/2014/11/21/zt/menpai/assets/images/mp-wd/per.png" className="rounded float-left jwang3" alt="..."></img>
            <img src="https://jx3.xoyo.com/zt/2014/11/21/zt/menpai/assets/images/mp-qx/per.png" className="rounded float-left jwang3" alt="..."></img>
            {/* <img src="https://jx3.xoyo.com/gn/assets/images/page4/role/role-2.e3a3a904.png" className="rounded float-left jwang3" alt="..."></img> */}
            <img src="https://jx3.xoyo.com/gn/assets/images/page1/homepage.992f3f6e.jpg" className="img-fluid" alt="Responsive image"></img>
            <img src="https://ossweb-img.qq.com/upload/webplat/info/ty/20190722/11402974725480_BigAbbr.jpg" alt="..." className="img-thumbnail"></img>
            <img src="https://ossweb-img.qq.com/upload/webplat/info/ty/20190722/6828168257191_BigAbbr.png" alt="..." className="img-thumbnail"></img>
            <img src="https://ossweb-img.qq.com/upload/webplat/info/ty/20190721/80308812704922_BigAbbr.jpg" alt="..." className="img-thumbnail"></img>
            <img src="https://ossweb-img.qq.com/upload/webplat/info/ty/20190722/488631221866915_BigAbbr.jpg" alt="..." className="img-thumbnail"></img>
            <img src="https://ossweb-img.qq.com/upload/webplat/info/ty/20190722/50061634037607_BigAbbr.jpg" alt="..." className="img-thumbnail"></img>
            <div>
            <img src="http://i0.cy.com/wz_tlsq/community/site/20140520/ten_mr.jpg" className="rounded float-left iii" alt=""/>
            <img src="http://i0.cy.com/wz_tlsq/community/site/20140520/ten_xx.jpg" className="rounded float-left iii" alt=""/>
            <img src="http://i0.cy.com/wz_tlsq/community/site/20140520/ten_em.jpg" className="rounded float-left iii" alt=""/>
            <img src="http://i0.cy.com/wz_tlsq/community/site/20140520/ten_ts.jpg" className="rounded float-left iii" alt=""/>
            <img src="http://i0.cy.com/wz_tlsq/community/site/20140520/ten_wd.jpg" className="rounded float-left iii" alt=""/>
            </div>
            {/* <img src="http://zhuxian.wanmei.com/hd/1807/images/role-hehuan.png" className="rounded float-left" alt="..."></img> */}
            <div>
                <img src="https://sm.games.wanmei.com/images/index20200727/zy_fashi_img.png" className="rounded float-left zy" alt=""/>
                <video muted autoPlay src="https://webdownload.wmupd.com/webdownload/client/sm_fashi_0403.mp4"></video>
            </div>
            <img src="https://www.sanguosha.com/static/pc/dist/img/bg3.jpg?165c7ee7129" alt=""/>
            <img src="https://n.res.netease.com/pc/fab/20191204165635/img/role-jl_ce9f9cfb.png" className="rounded float-left" alt="..."></img>
            <img src="http://zhuxian.wanmei.com/hd/1807/profession/images/role-jinglan.png" className="mw" alt=""/>
            <img src="http://zhuxian.wanmei.com/hd/1807/profession/images/role-zhaoming.png" className="mw" alt=""/>
        </div>)
    }
}//www.sanguosha.com/Home/newsInfo/../../img/bg3.jpg?165c7ee7129
// http://i0.cy.com/wz_tlsq/community/site/20140520/ten_mr.jpg
//https://n.res.netease.com/pc/fab/20191204165635/img/role-jl_ce9f9cfb.png
//zhuxian.wanmei.com/hd/1807/profession
export default MW1