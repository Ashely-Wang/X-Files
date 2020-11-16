import React from 'react'
import {Login, logout, onLogin} from '../cookie.js'
class MW6 extends React.Component{
    constructor() {
        super()
        this.state = {
            images: [
                // "https://c-ssl.duitang.com/uploads/item/202003/01/20200301221914_zwJzP.thumb.1000_0.jpeg",
                // 'https://c-ssl.duitang.com/uploads/item/202003/21/20200321211316_enmpm.thumb.1000_0.jpeg',
                // "https://c-ssl.duitang.com/uploads/item/202003/21/20200321211228_lgtrk.thumb.1000_0.jpeg",
                // "https://c-ssl.duitang.com/uploads/item/202003/27/20200327142814_igbcs.thumb.1000_0.jpg",
                // "https://c-ssl.duitang.com/uploads/item/202006/19/20200619150827_2QNdT.thumb.1000_0.jpeg",
                // "https://c-ssl.duitang.com/uploads/item/202001/23/20200123222530_jdram.thumb.1000_0.jpg",
                // "https://c-ssl.duitang.com/uploads/item/202002/22/20200222111242_uukml.thumb.1000_0.jpg",
                // "https://c-ssl.duitang.com/uploads/item/201711/29/20171129001425_sracf.thumb.400_0.jpeg",
                // "https://c-ssl.duitang.com/uploads/item/202004/07/20200407160128_etduv.thumb.1000_0.jpg",
                // "https://c-ssl.duitang.com/uploads/item/201910/23/20191023152135_kmwjl.thumb.400_0.jpeg",
                // "https://c-ssl.duitang.com/uploads/item/202007/13/20200713205310_eckmd.thumb.1000_0.jpg",
                // "https://c-ssl.duitang.com/uploads/item/202006/22/20200622170829_prcgr.thumb.1000_0.jpg",
                // "https://c-ssl.duitang.com/uploads/blog/202009/23/20200923220612_9903e.thumb.1000_0.jpeg",
                // "https://c-ssl.duitang.com/uploads/item/202003/13/20200313170139_riwog.thumb.1000_0.jpg",
                // // "https://c-ssl.duitang.com/uploads/item/202006/30/20200630173734_rdord.thumb.1000_0.jpg",
                // "https://c-ssl.duitang.com/uploads/blog/202008/11/20200811215359_axlww.thumb.1000_0.jpg",
                // "https://c-ssl.duitang.com/uploads/item/201910/06/20191006215119_yoeke.thumb.400_0.jpg",
                // "https://c-ssl.duitang.com/uploads/item/201705/13/20170513075031_kuBZP.thumb.400_0.jpeg",
                // "https://c-ssl.duitang.com/uploads/item/202006/17/20200617154226_djuni.thumb.1000_0.jpg",
                // "https://c-ssl.duitang.com/uploads/item/202008/07/20200807213900_mcdcf.thumb.1000_0.jpg",
                // "https://c-ssl.duitang.com/uploads/item/202003/07/20200307121149_NmxMN.thumb.1000_0.jpeg",
                // "https://img.zcool.cn/community/01cfa558e492f6a801219c77863db2.jpg@1280w_1l_2o_100sh.jpg",
                // "https://img.zcool.cn/community/011c195542deb10000019ae9a52fd5.jpg@1280w_1l_2o_100sh.jpg",
                // "https://img.zcool.cn/community/01588655419f5e000001a64b92a0bd.jpg@1280w_1l_2o_100sh.jpg",
                // "https://c-ssl.duitang.com/uploads/item/202003/22/20200322140717_uhgbq.thumb.1000_0.jpg",
                // "https://c-ssl.duitang.com/uploads/item/202008/21/20200821171940_xHnzN.thumb.1000_0.jpeg",
                // "https://c-ssl.duitang.com/uploads/item/202006/28/20200628195611_zXHZe.thumb.1000_0.jpeg",
                // "https://wx2.sinaimg.cn/mw1024/ec432dc9gy1ghcsbpct6sj21461jknpd.jpg",
                // "https://wx2.sinaimg.cn/mw1024/ec432dc9gy1gamzfifrbkj20sd15o4pw.jpg",
                // "https://wx1.sinaimg.cn/mw1024/ec432dc9gy1fuiajm6pspj20zk1eb7wh.jpg",
                // "https://wx2.sinaimg.cn/mw1024/ec432dc9ly1fnv44gd10qj20qw15o7lh.jpg",
                // "https://wx3.sinaimg.cn/mw1024/ec432dc9gy1fvii8f2gtnj20zr1ekkjl.jpg",
                // "https://hbimg.huabanimg.com/e760f3df1ac5c96fbd9dbb7ab57ef44f28b1efc9291244-nCFCVB_fw658/format/webp",
                // "https://i0.hdslb.com/bfs/article/ff0368d7eafb9b1cb7a90863e985ccd3de073db3.jpg@1320w_986h.webp",
                // "https://i0.hdslb.com/bfs/article/6c7aab35aba829070f09e5d08f68154db08cfdeb.jpg@1320w_814h.webp",
                // "https://c-ssl.duitang.com/uploads/item/202005/14/20200514210712_qdywt.thumb.1000_0.png",
                // "https://cdn.ggac.net/media/work/image/2020/09/bba0aaae-0166-11eb-ab55-0242c0a88002.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603366219665&di=0dbf1179f12aa41200a2fe366d7c7664&imgtype=0&src=http%3A%2F%2Fs.lanqb.com%2F20160411%2F1460368791-c-1378x1034.jpg",
                "https://c-ssl.duitang.com/uploads/blog/202010/10/20201010221930_0c78b.thumb.1000_0.jpg",
                "https://img.zcool.cn/community/0139005ab88c7ca80120be14e59de4.jpg@1280w_1l_2o_100sh.jpg",
                "https://c-ssl.duitang.com/uploads/item/202008/27/20200827234508_hlvlf.thumb.1000_0.jpg",
                "https://hbimg.huabanimg.com/a1d6716ff3ad63b0d9e81f7ba262eed9e86315b21876c-yEnMiz_fw658/format/webp",
                "https://hbimg.huabanimg.com/454bb1b3bc64b076b8afa20a9a55ec4033f4bb3283a9eb-WdCm1H_fw658/format/webp",
                "https://cdn.ggac.net/media/work/image/2020/05/92aeb748-95a6-11ea-940d-0242c0a82002.jpg",
                "https://cdn.ggac.net/media/work/image/2019/10/a07cafa4-e8d8-11e9-a89d-0242c0a82003.jpg",
                "https://cdn.ggac.net/media/work/image/2020/10/84cd92aa-0e8e-11eb-8df2-0242c0a84002.jpg",
                "https://cdn.ggac.net/media/work/image/2020/10/21aaa4cc-0a62-11eb-8f43-0242c0a88002.jpg",
                "https://cdn.ggac.net/media/work/image/2020/10/036463f6-1406-11eb-8757-0242ac110002.jpg",
                "https://cdn.ggac.net/media/work/image/2020/10/7cd0ae54-1085-11eb-8a18-0242c0a82002.jpg",
                "https://cdn.ggac.net/media/work/image/2020/10/41521208-0489-11eb-b462-0242c0a82002.jpg",
                "https://cdn.ggac.net/media/work/image/2020/09/e80983ae-f324-11ea-9d03-0242c0a82002.jpg",
                "https://cdn.ggac.net/media/work/image/2020/03/b07c284e-7041-11ea-86a3-0242c0a82002.jpg",
                "https://cdn.ggac.net/media/work/image/2020/07/024ed436-bed1-11ea-b6f5-0242c0a88002.jpg",
                "https://cdn.ggac.net/media/work/image/2020/10/4b64df68-094e-11eb-9c97-0242c0a82002.jpg",
                "https://cdn.ggac.net/media/work/image/2020/10/34c9533e-1929-11eb-934a-0242c0a84002.jpg",
                "https://cdn.ggac.net/media/work/image/2020/10/c524093c-0a39-11eb-8fe1-0242c0a82002.jpg",
                "https://cdn.ggac.net/media/work/image/2020/10/970aa19a-10ed-11eb-947a-0242c0a82002.jpg",
                "https://cdn.ggac.net/media/work/image/2020/10/4ea6e48c-09f8-11eb-8ed0-0242c0a82002.jpg"
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

            <div className="sj6">
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


export default MW6