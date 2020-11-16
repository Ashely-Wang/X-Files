import React from 'react'
import axios from 'axios'
class HM extends React.Component {
    constructor() {
        super()
        this.state = {
            monsterImages: [
                // "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3761100762,817807418&fm=26&gp=0.jpg",
                // "https://img1.doubanio.com/view/photo/l/public/p453665359.webp",
                // "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604316374534&di=10cd4f24b5aa13d24e3836e655b3c8ca&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3D96a0d9e309f41bd5da53e8fc61d881a0%2F4c11a9d7277f9e2fecb623c01830e924ba99f397.jpg",
                // "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604316570690&di=d71a32611f0b07018d79396a4fe2ace1&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F9vo3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3Ddc1a7c5dd739b6004d9b07b3dc60191c%2Fb21c8701a18b87d6eeabd4a1050828381e30fda7.jpg",
                // "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604316280866&di=0e93312d6db2b7e3c5165ffd43f42df2&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3D0c6a25603bdbb6fd255be52e3925aba6%2F8e56b6003af33a87b4e09181c45c10385243b50f.jpg",
                // "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604315321533&di=f91163d8562f63fa59197a98f33a0212&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180127%2F66315150892f45878680eb4ca6291314.jpeg",
                // "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604315802854&di=010d9ea8654d3f640985117336c06e1b&imgtype=0&src=http%3A%2F%2Fimg3.doubanio.com%2Fview%2Fphoto%2Fl%2Fpublic%2Fp2465743900.jpg"
            ],
            currentFilm: {},
            currentFilmId: 0,
            style1: {display: "none"}
        }
    }
    getHorrorFilm = async () => {
        const ret = await axios.get(`http://127.0.0.1:3200/gf?id=${this.state.currentFilmId}`)
        console.log(ret.data)
        this.setState({
            currentFilm: ret.data[0]
        })
        const fId = this.state.currentFilm.id
        console.log(fId)
        const iii = [1,2,3,4,5,6]
        let flist = []
        iii.map(val => {
            flist.push("http://127.0.0.1:3200/public/monster/" + fId + "-" + val + ".jpg")
        })
        console.log(flist)
        this.setState({
            monsterImages: flist
        })
    }
    changeHorrorFilm = async (e) => {
        e.preventDefault()
        if (this.state.currentFilmId == 6) {
            this.setState({
                currentFilmId: 0
            })
        } else {
            this.setState({
                currentFilmId: this.state.currentFilmId + 1
            })
        }
        this.getHorrorFilm()
    }
    async componentDidMount() {
        this.getHorrorFilm()
    }
    render() {
        return(<div>
            {/* <h1>this is a part of monster</h1> */}
            <div className="card">
            <div className="card-header chf">
                卐怪物、灾难和变异卍
                <span className="hid" onClick={() => {
                    if(this.state.style1.display == "none") {
                        this.setState({
                            style1: {display: "block"}
                        })
                    } else {
                        this.setState({
                            style1: {display: "none"}
                        })
                    }
                }}>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-double-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    <path fillRule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </span>
            </div>
            <div className="card-body mons" style={this.state.style1}>
                    <h3 className="card-title">{this.state.currentFilm.fname}</h3>
                    <span>主演：{this.state.currentFilm.actress}</span>
                    <p className="card-text">{this.state.currentFilm.fintroduction}</p>
                    <div className="movieSource">影片地址： <a href="#">http://asgfasfhafg.com/asfsaf/fdsff</a>
                    &emsp;&emsp;<a href="#">http://sadfsdshafg.com/asfsaf/fdsff</a>
                    &emsp;&emsp;<a href="#">http://ytignddgfhsadvxcv.com/asfsaf/fdsff</a>
                    </div>
                    <div className="sj-m">
                        {this.state.monsterImages.map(val => {
                            return <img key={this.state.monsterImages.indexOf(val)} src={val} className="img-thumbnail rounded float-left" alt=""/>
                        })}
                        {/* <img className="rounded float-left" src="" alt=""/> */}
                    </div>
                    <a href="#" onClick={this.changeHorrorFilm} className="btn btn-primary">换一个</a>
                    <a href="#" className="btn btn-success oooo">查看片单</a>
            </div>
            </div>
        </div>)
    }
}

export default HM
