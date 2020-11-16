import React from 'react'
import axios from 'axios'
class APD extends React.Component {
    constructor() {
        super()
        this.state = {
            thisSeries: [
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604482963248&di=0906e0a4b1ef5855e18d3ee35b490572&imgtype=0&src=http%3A%2F%2Fimg3.doubanio.com%2Fview%2Fgroup_topic%2Fl%2Fpublic%2Fp97459180.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604483029925&di=9394f4d8afeb56d42bb33c93de208c08&imgtype=0&src=http%3A%2F%2Fstatic-movie.a.88cdn.com%2Fb5cb0a98db8cc4d558459f55082ddb2a.jpg%3FimageView2%2F1%2Fq%2F85%2Finterlace%2F1",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604483047917&di=978eeb7145301d20c8e864135ccb42e9&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F947545c3a1e6ba2996d3c987778feef849e59477cfa0-kB00uU_fw658",
                "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=487522574,2259491807&fm=26&gp=0.jpg",
                "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4163044434,4015211088&fm=26&gp=0.jpg",
                "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1707814860,974250308&fm=26&gp=0.jpg",
                "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3814801177,2828905722&fm=26&gp=0.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604483282406&di=645c662ced16e808d53602c0e7d60854&imgtype=0&src=http%3A%2F%2Fimg3.doubanio.com%2Fview%2Fphoto%2Fm%2Fpublic%2Fp2552319673.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604483147658&di=97d9181acb175554ade0f492f60b9fbd&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F13f69f428776e16b72573e63f362df6376f2c1ecdffe-Eef8OJ_fw236"
            ]
        }
    }
    render() {
        return (<div className="tse">
            <div className="seri">
                {this.props.currentSeries.map(val => {
                    return <div key={this.props.currentSeries.indexOf(val)} className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                        <img src={`http://127.0.0.1:3200/public/pd/${this.props.currentSeriesName}/${val.id}.jpg`} className="card-img" alt="..." />
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{this.props.currentSeriesName} {val.id == 1?"":val.id} {val.otherName} ({val.time})</h5>
                            <p className="card-text">{val.introduction}</p>
                            <p className="card-text"><small className="text-muted">{val.actress}</small></p>
                        </div>
                        </div>
                    </div>
                    </div>
                })}
            </div>
            {/* <h1 id="eq">{this.props.currentSeries.name}</h1> */}
            <div className="comments">
                <div className="media">
                <img src="https://ae01.alicdn.com/kf/U9071f6847ee8456da10eeb20e598ae87P.jpg" className="mr-3" alt="..." />
                <div className="media-body">
                    <h5 className="mt-0">死神来了2 BD1280高清中英双字版</h5>
                    <a href="http://www.youku6.com/u/858-1-1.html">http://www.youku6.com/u/858-1-1.html</a>
                </div>
                </div>
                {/* ###### */}
                <div className="media">
                <img src="http://127.0.0.1:3200/public/pd/死神来了/4.jpg" className="mr-3" alt="..." />
                <div className="media-body">
                    <h5 className="mt-0">死神来了4 云播</h5>
                    <a href="https://www.qukantv.net/kongbupian/sishenlailiao4/1-1.html">https://www.qukantv.net/kongbupian/sishenlailiao4/1-1.html</a>
                </div>
                </div>
            </div>
        </div>)
    }
}


export default APD