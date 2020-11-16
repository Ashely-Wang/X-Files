import React from 'react'
import {Login, logout, onLogin} from '../cookie.js'
class MW7 extends React.Component {
    constructor() {
        super()
        this.state = {
            images: [
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603427370074&di=8b5d2607c9115341b4b5e573e88b8eb2&imgtype=0&src=http%3A%2F%2Fwww.todayfocus.cn%2Fuploads%2F201904%2Fweixin%2F807fb39cdf0a2cc26bd7c0ec0855255d%2F1554210723583501.jpeg",
                "https://pic.rmb.bdstatic.com/1d1325cc3908f9bce1de67bd6e14cb40.png@wm_2,t_55m+5a625Y+3L+mYv+WNl+eahOWPsuWtpg==,fc_ffffff,ff_U2ltSGVp,sz_16,x_10,y_10",
                "http://imgsrc.baidu.com/forum/pic/item/66f0f736afc37931e7a65338e4c4b74542a911d1.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603427936940&di=baf56bd5306c875365972dce3437918c&imgtype=0&src=http%3A%2F%2Fp4.ssl.cdn.btime.com%2Ft019e3daff06586bfaf.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603427968431&di=66ccd44b49ab65c184bb74e9a609c439&imgtype=0&src=http%3A%2F%2Fwx1.sinaimg.cn%2Flarge%2F005Gh5VPgy1fmkrycyavaj30y70p0dpe.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603428002640&di=666342538b21985ae18a529911bbac06&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn20111%2F43%2Fw700h943%2F20181205%2F4360-hpinryc3648427.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603428032729&di=068255a996aa66acf2c1a028ab764ada&imgtype=0&src=http%3A%2F%2Falioss.gcores.com%2Fuploads%2Fimage%2F5645272b-55f6-4e09-8027-618ac7bb2c1a_watermark.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603428062752&di=6f7b38013304f5ef778af2ba915911e4&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F1f5fa311e416f9ca1fd2e01dc176f4c9de0eabd8.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603428084962&di=46e30c4bc448f24f26505ac0a7f7c62e&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F653d6fba143eb4a83aa0f013145b112e3b070c6a18bf1-7aO4j9_fw658",
                "https://bkimg.cdn.bcebos.com/pic/cefc1e178a82b90100cc5d9d7d8da9773912ef3f",
                "https://bkimg.cdn.bcebos.com/pic/5bafa40f4bfbfbed91f3a8d176f0f736aec31ff1",
                "https://bkimg.cdn.bcebos.com/pic/a8ec8a13632762d084763a11aeec08fa503dc6d0",
                "https://bkimg.cdn.bcebos.com/pic/9213b07eca806538a3553abd99dda144ac3482e5",
                "https://bkimg.cdn.bcebos.com/pic/cf1b9d16fdfaaf515f8b6e66865494eef11f7afb",
                "https://bkimg.cdn.bcebos.com/pic/7e3e6709c93d70cfe0e945d4f2dcd100bba12bdc",
                "https://bkimg.cdn.bcebos.com/pic/b8014a90f603738de16f884fbe1bb051f819ecb2",
                "https://bkimg.cdn.bcebos.com/pic/50da81cb39dbb6fd80372eec0224ab18962b3788",
                "https://cdn.ggac.net/media/work/image/2020/09/047c12de-017d-11eb-a201-0242c0a88002.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603702019450&di=08ae9a928126147cbfe8d2501ba083d1&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180419%2Fea70c7845eaa4d3d9fe43f80f1d682e9.jpeg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603702051878&di=438827b045da6adc669b4aa0078158b8&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20180711%2Fc49ae4519b7e48ddb967b0486d277f97.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603702282271&di=30c548f45512cf3e4cf7de0803b2dda1&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn22%2F204%2Fw1882h722%2F20181128%2Fb524-hpfyces7271618.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603702318278&di=e88850ed65e4094f5000730b0985dc0c&imgtype=0&src=http%3A%2F%2Fwww.5151du.com%2Fuploads%2Fallimg%2F191024%2F0312364413_0.jpeg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603702434781&di=55ac17666fd4dab9a9696ddb4d3d61e2&imgtype=0&src=http%3A%2F%2Fp0.ifengimg.com%2Fpmop%2F2018%2F0729%2FDB80A88FB8C8EAC94B0DB7E5019B6961A28147CA_size77_w736_h513.jpeg",
                "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4104013627,2143894729&fm=26&gp=0.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603701778645&di=7dfeb6f5d92177e016738c77b2e244e3&imgtype=0&src=http%3A%2F%2Fpic4.zhimg.com%2F50%2Fv2-6b0fd64262eac4031d65a8d6c412f550_hd.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603701684532&di=bb7b9218d2f862494f7006de3d1a6566&imgtype=0&src=http%3A%2F%2Fd.ifengimg.com%2Fq100%2Fimg1.ugc.ifeng.com%2Fnewugc%2F20190504%2F17%2Fwemedia%2Fc67424a67711653142a3e0b81797e7281a7a3fbd_size714_w594_h512.png",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603701528623&di=38e9f4b970eb236624db55b3cd7a2e8c&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F56ea2ea04e8892c53383f24bd9feb48961a608df.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603701453689&di=bc2b8972e14a418b5ac0dac20ee30955&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fafeeb933dc92b3ad7a7c2dcd9a55d225811ac1411afbb-ScZlwt_fw658",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603698404014&di=25e66f5fd20ce1fd8514ff88a5bd6d0b&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fbaike%2Fpic%2Fitem%2Fb219ebc4b74543a96c5acb0d12178a82b80114a9.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603698284100&di=004be7b0be0ce125bdac3534faea20cd&imgtype=0&src=http%3A%2F%2Fp2.qhimg.com%2Ft0165768f98f3bcfbe6.jpg%3Fsize%3D640x357",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603429003609&di=cf8ed274be43924b322a9a478760cd0b&imgtype=0&src=http%3A%2F%2Fp4.ssl.cdn.btime.com%2Ft01173d590a1ac006e8.jpg%3Fsize%3D389x533",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603429097738&di=bf657a953e227fc81096d4065f5deea3&imgtype=0&src=http%3A%2F%2Fcdn.aixifan.com%2Fdotnet%2Fartemis%2Fu%2Fcms%2Fwww%2F201404%2F12100957ut31.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603429139647&di=924b0fb37b12f4f6d4e18cca49de92d2&imgtype=0&src=http%3A%2F%2F00imgmini.eastday.com%2Fmobile%2F20181227%2F20181227215622_843963189a0c375fc070676b3b532d84_3.jpeg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603429272323&di=c70e34680c4eff13c230fabd7d6185cd&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3D82b8df10f8d3572c66e29cd4ba126352%2Fd8e2ad1ea8d3fd1fc95d2ac33a4e251f94ca5f58.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603429305957&di=2700f8d7fc3600b23c4354e6edea1690&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20180608%2Fe7cbab1bb1dd4497b8808e64d4a477bb.jpeg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603429403072&di=b557b94780f8439b05ba329c04c7cfde&imgtype=0&src=http%3A%2F%2F05.imgmini.eastday.com%2Fmobile%2F20180315%2F20180315141547_c52ade8158fbfd3c1d1fb58d03a0288c_17.jpeg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603429470394&di=b7955a7bd7aa049899fa794f57bac3b9&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn10109%2F222%2Fw640h382%2F20191226%2F9164-imfiehq2635545.png",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603429634331&di=ee853abe57c53397b237be983898cdc6&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181206%2F7ddad5ef617f4448a06f5267e1fa974a.jpeg",          
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603429670621&di=1229f2fabf075a75107a7f94ed05f9fa&imgtype=0&src=http%3A%2F%2Fhis.newdu.com%2Fuploads%2Fcollect%2F201812%2F04%2F5ACFE3DFE6EC2BB68FCEC4DF5E0CDC3CFC1FC744_size346_w1080_h66157.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603429738363&di=9ea79f298c03f6ad8e47e15d09eb650b&imgtype=0&src=http%3A%2F%2Falioss.gcores.com%2Fuploads%2Fimage%2Fd6854abd-6c7e-405b-b8a1-0380cc955728_watermark.png",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603429853941&di=22d560ed74bfde930987e932372b7b34&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fbaike%2Fpic%2Fitem%2Feac4b74543a9822610490a0e8682b9014a90eb0b.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603430027142&di=cb41d2a823378079953cb6b98e1d7079&imgtype=0&src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%253A%252F%252Fdingyue.ws.126.net%252FNja1t2CAuoIVidg1p5jNoOtgUFU9p7cUvOqQtUHAvs7JF1563787057319compressflag.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603430174148&di=b7122db4ac2caf505ffd9dc0368794e6&imgtype=0&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2F79c6c3ebc14c4def141062878bc92ee9.jpeg%40wm_2%2Ct_55m%2B5a625Y%2B3L%2BS7peWJjemCo%2BS6m%2BS6i%2BWEvw%3D%3D%2Cfc_ffffff%2Cff_U2ltSGVp%2Csz_66%2Cx_42%2Cy_42",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603430246433&di=66121c7a240b05712037df0fc4d8aae2&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FtRC6W84579WuwgIqIWQu1UCrPFspEtpZlIClqnrj2ZKDr1507599269567transferflag.png",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603430280261&di=85f8107adfbb41baa7be3ede51a23d5f&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2Fw640h371%2F20180112%2F577d-fyqnicm1052358.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603430383407&di=978f58071d997cd5379899f742dce84b&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20150818%2Fmp28014987_1439869739973_5.jpeg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603430513169&di=03bf73ba6205262abeaa49480d87535b&imgtype=0&src=http%3A%2F%2Fdingyue.ws.126.net%2F2019%2F04%2F24%2F006380e7c32c43d7b4cacabe0d085d7a.jpeg"
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
    render() {
        return (<div>
            <div className="sj7">
                    {this.state.images.map((item, index) => {
                        console.log(item + index)
                        return <div key={index} className="ite">
                        <img src={item} className="img-thumbnail" alt="..."/>
                        </div>
                    })}
            </div>
        </div>)
    }
}

export default MW7

