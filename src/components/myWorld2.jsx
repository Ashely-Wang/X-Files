import React from 'react'
import {Login, logout, onLogin} from '../cookie.js'

class MW2 extends React.Component {
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
        return (
            <div>
                <div className="zxgirl">
                <img src="http://zhuxian.wanmei.com/hd/1807/profession/images/role-huaying.png" className="rounded float-left zx" alt="..."></img>
                <img src="http://zhuxian.wanmei.com/hd/1807/profession/images/role-guiyun.png" className="rounded float-left zx" alt="..."></img>
                <img src="http://zhuxian.wanmei.com/hd/1807/profession/images/role-lieshan.png" className="rounded float-left zx" alt="..."></img>
                <img src="http://zhuxian.wanmei.com/hd/1807/profession/images/role-tianhua.png" className="rounded float-left zx" alt="..."></img>
                <img src="http://zhuxian.wanmei.com/hd/1807/profession/images/role-hehuan.png" className="rounded float-left zx" alt="..."></img>
                <img src="http://zhuxian.wanmei.com/hd/1807/profession/images/role-guidao.png" className="rounded float-left zx" alt="..."></img>
                </div>
                {/* <img src="https://jianghu.res.netease.com/pc/gw/20191009165720/img/bg_41376e5.jpg" alt=""/> */}
                
                <div>
                <img src="https://jianghu.res.netease.com/pc/gw/20191009165720/img/bz/10_70ff6fe.jpg" className="img-thumbnail mx-auto d-block" alt="..."/>
                </div>
                <img src="https://jianghu.res.netease.com/pc/gw/20191009165720/img/page3/r_5_2_1a3a165.png" className="rounded float-left ym" alt="..."/>
                <img src="https://jianghu.res.netease.com/pc/gw/20191009165720/img/page3/r_3_1_c2c1fee.png" className="rounded float-left ym" alt="..."/>
                <img src="https://jianghu.res.netease.com/pc/gw/20191009165720/img/page3/r_8_2_34d109b.png" className="rounded float-left ym" alt="..."/>
                <img src="https://jianghu.res.netease.com/pc/gw/20191009165720/img/page3/r_1_2_663f5e1.png" className="rounded float-left ym" alt="..."/>
                <img src="https://jianghu.res.netease.com/pc/gw/20191009165720/img/page3/r_6_2_b2209c7.png" className="rounded float-left ym" alt="..."/>
                {/* <h2>古剑奇谭</h2> */}
                <div>
                <img src="http://i3.gbimg.cn/zt/2020/06/zp/zx_bg.png" className="img-fluid" alt="Responsive image"/>
                <img src="http://i3.gbimg.cn/zt/2020/06/zp/zy_bg.png" className="img-fluid" alt="Responsive image"/>
                <img src="http://i3.gbimg.cn/zt/2020/06/zp/sm_bg.png" className="img-fluid" alt="Responsive image"/>
                <img src="http://i3.gbimg.cn/zt/2020/06/zp/zf_bg.png" className="img-fluid" alt="Responsive image"/>
                </div>
                <img src="http://xx2.ztgame.com/act/zhiyejieshao/images/role8.png" className="img-fluid" alt="Responsive image"/>
                <img src="http://xx2.ztgame.com/act/zhiyejieshao/images/role2.png" className="img-fluid" alt="Responsive image"/>
                <div>
                    <img src="https://xxa.wanmei.com/images/cover2007/mp_wuxian_ren.png" className="rounded float-left xa" />
                    <img src="https://xxa.wanmei.com/images/cover1912/mp_huashan_ren.png" className="rounded float-left xa" />
                </div>
                <div>
                <img src="http://xxa.wanmei.com/resources/jpg/191209/10841575825638507.jpg" alt="..." className="img-thumbnail" />
                </div>
                <div>
                    <img src="https://tx3.res.netease.com/pc/gw/20191126164820/images/jobs_11_figure_d6d7306.png" alt=""/>
                    <img src="https://tx3.res.netease.com/pc/gw/20191126164820/images/jobs_6_figure_8334063.png" alt=""/>
                </div>
            </div>
            
        )
       
    }
}



export default MW2