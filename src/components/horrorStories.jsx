import React from 'react'
import axios from 'axios'

class HS extends React.Component {
    constructor() {
        super()
        this.state = {
            title: "",
            author: "",
            content: "",
            otherStories: [
                // {title: "惨死的室友", content: "在郑大的医院院里边，玉田友忙完了一天的功课回到了寝室里面，躺在床上很快就睡了过去!半夜的时候忽然尿急起床就要去厕所，可是坐起来以后却发现寝室的中间站着一个人，三个室友都均匀的发出不同的鼾声，那么这个站在寝室中间的人是谁。那个人显然也发现了玉田友..."},
                // {title: "围炉夜话", content: "村头的一栋独立的屋子里，几个人围坐在一起，围着一堆火，说着各种离奇的故事。现在正是冬天，外面冷得要死，这个房子本来是作为接待厅用的，可是后来却是不知道怎么回事没有用，而是空在那里了。后来的后来，放着各种杂物，成了大家没事聚集的地方。&ldquo;你们相..."},
                // {title: "见到的是谁", content: "见到的是谁事情发生在八十年代。那时候交通工具基本上是步行，农村条件好的就骑牛车或驴车。县城里条件好的就骑自行车。不过平舆县东皇庙段营村骆庄的冯老农却是个例外。因为他有一辆自行车。自行车在那个年代，可是不得了的。相当于现在的一辆进口小轿车了。那骑..."},
                // {title: "租喉咙", content: "(一)阴阳喉咙很多人都听说过阴阳眼，既能看到阴阳两界的眼睛，那阴阳喉咙是能让阴阳两界的人或鬼物听到的嗓子么?非也，但要具体说是什么，阿风也不是很清楚，他只是听自己的死党大朋说过一次。那时大朋半夜穿衣服准备出去，阿风好奇便问了去“去哪啊?”。“整个‘阴阳..."},
                // {title: "晚自习上的电话", content: "张振华躲在空教室里和他女朋友打着电话，这个时候是第二节晚自习下课，而这里，是华新高考补习学校。现在是十月份，华新高考补习学校开学已经三个月了。所谓高三高四，最难的不是开始的适应和结束的拼搏。最难熬的是中间那段，时间那么长，心是那么累，如何坚持下去，..."},
                // {title: "显微镜下的人脸", content: "为了避免不必要的不开心，下面做出说明。本故事所有人名地名机构名纯属虚构，如有冒犯，还请见谅。本故事并不属于现实，请不要对号入座，谢谢。作者留。好了，正文开始。“刘庆新，你过来一下，去我办公室里拿实验室钥匙，然后晚点去实验室拿器材过来。今...["},
                // {title: "趴在楼顶的人", content: "天渐渐的黑了起来，走廊的灯也熄了，这一刻整栋寝室楼的吵闹声，喧哗声也静止了，只剩下窗外的风呜呜的叫着，每当这个时候每个寝室都会传来或多或少的夜谈声。以往我们都是在熄灯之后聊聊女生，或者最近在学校里发生不开心的事情，互相抱怨一下，但是今天门口上铺的玉..."},
                // {title: "石桥县", content: "我的家乡在四川一个很偏远的小县城，县城不大也就两条街和一座被封的石板桥，但这儿的村民却非常勤劳，过了桥左右有两条小路，往前再直走便是大河了，而这地儿原本在四十年代时都还只是村民的一个货物交换点，那时候交通非常不便，去趟城里来回要花一两天，费力又费时，于..."}
            ],
            images: [
                "http://www.guidada.com/images/img/65.jpg",
                "http://www.guidada.com/images/img/131.jpg",
                "http://www.guidada.com/images/img/83.jpg",
                "http://www.guidada.com/images/img/43.jpg",
                "http://www.guidada.com/images/img/192.jpg",
                "http://www.guidada.com/images/img/100.jpg",
                "http://www.guidada.com/images/img/87.jpg",
                "http://www.guidada.com/images/img/19.jpg",
                "http://www.guidada.com/images/img/36.jpg",
                "http://www.guidada.com/images/img/133.jpg",
                "http://www.guidada.com/images/img/48.jpg",
                "http://www.guidada.com/images/img/63.jpg",  
            ]
        }
    }
    async componentDidMount() {
        console.log(this.props.location.query)
        const id = this.props.location.query.id
        const ret = await axios.get(`http://127.0.0.1:3200/geths?id=${id}`)
        const ret2 = await axios.get('http://127.0.0.1:3200/sos')
        console.log(ret2.data)
        console.log("asfaf")
        this.setState({
            title: ret.data[0].title,
            author: ret.data[0].author,
            content: ret.data[0].content,
            otherStories: ret2.data
        })
        console.log(ret.data)
    }
    getTheStory = async (a) => {
        const ret = await axios.get(`http://127.0.0.1:3200/geths?id=${a.target.title}`)
        this.setState({
            title: ret.data[0].title,
            author: ret.data[0].author,
            content: ret.data[0].content,
        })
        // this.props.history.push({pathname: "/hs", query: {id: parseInt(a.target.title)}})
        // alert(a.target.title)
        // alert("asfsfa")
    }
    render() {
        return(<div className="hsroot">
            <div className="klh" role="alert">
            &emsp;&emsp;体验惊悚恐怖故事，挑战心理承受极限!&emsp;&emsp;
                <img src="https://cdn.ggac.net/media/work/image/2020/04/edb03804-86a8-11ea-b1f7-0242c0a84002.jpg" alt=""/>
                <img src="https://cdn.ggac.net/media/work/image/2020/04/edb03804-86a8-11ea-b1f7-0242c0a84002.jpg" alt=""/>
                <img src="https://cdn.ggac.net/media/work/image/2020/04/edb03804-86a8-11ea-b1f7-0242c0a84002.jpg" alt=""/>
                <img src="https://cdn.ggac.net/media/work/image/2020/04/edb03804-86a8-11ea-b1f7-0242c0a84002.jpg" alt=""/>
                <img src="https://cdn.ggac.net/media/work/image/2020/04/edb03804-86a8-11ea-b1f7-0242c0a84002.jpg" alt=""/>
                <img src="https://cdn.ggac.net/media/work/image/2020/04/edb03804-86a8-11ea-b1f7-0242c0a84002.jpg" alt=""/>
            
            </div>
            {/* <button onClick={this.getTheStory}>dqw</button> */}
            <div className="hso">
                <div className="hsc">
                    <img src="https://w.wallhaven.cc/full/k9/wallhaven-k9ww76.jpg" alt="" className="rounded mx-auto d-block"/>   
                    {this.state.otherStories.map(val => {
                        return <div key={this.state.otherStories.indexOf(val)} className="card mb-3">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                            <img onClick={this.getTheStory} title={val.id} src={this.state.images[this.state.otherStories.indexOf(val)]} className="card-img" alt="..." />
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                            <h4 className="card-title" onClick={this.getTheStory} title={val.id}>{val.title}</h4>
                                <p className="card-text">{val.introduction}</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                            </div>
                        </div>
                        </div>
                    })}
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603703606762&di=0d0926ab7e3533e713dfd75762e513c8&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farchive%2F6a4d3cb94239aae0e385613fd39111ccf90c7438.jpg" alt="..." className="rounded mx-auto d-block" />
                    <img src="https://w.wallhaven.cc/full/gj/wallhaven-gjmged.jpg" alt="" className="rounded mx-auto d-block"/>
                    <img src="https://w.wallhaven.cc/full/nk/wallhaven-nk9ewm.jpg" alt="" className="rounded mx-auto d-block"/>
                    <img src="https://w.wallhaven.cc/full/od/wallhaven-odj27m.jpg" alt="" className="rounded mx-auto d-block"/>
                </div>
                <div className="hsc">
                    <div className="jumbotron">
                        <div className="tit">
    <h1 className="display-4">{this.state.title}</h1> <h5 className="author">作者: @{this.state.author}</h5>
                            <div className="kl">
                                <img src="https://cdn.ggac.net/media/work/image/2020/02/9d001026-5919-11ea-a2f5-0242c0a82002.jpg" alt=""/>
                            </div>
                        </div>
                        <hr className="my-4" />
                        <p className="lead">
                        {this.state.content}
                        </p>
                        <hr className="my-4" />
                        <p>更多精彩恐怖故事请关注微信公众号小王讲故事或微博关注小王鬼故事 QQ: 455889577</p>
                        <a className="btn btn-primary btn-lg" href="#" role="button">加入书签</a>
                    </div>
                </div>
            </div>
            {/* <h1>welcome to horror community</h1> */}
        </div>)
    }
}


export default HS


{/* <div className="card mb-3">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                            <img src="http://www.guidada.com/images/img/112.jpg" className="card-img" alt="..." />
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="card mb-3">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                            <img src="http://www.guidada.com/images/img/211.jpg" className="card-img" alt="..." />
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="card mb-3">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                            <img src="http://www.guidada.com/images/img/45.jpg" className="card-img" alt="..." />
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="card mb-3">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                            <img src="http://www.guidada.com/images/img/149.jpg" className="card-img" alt="..." />
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="card mb-3">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                            <img src="http://www.guidada.com/images/img/32.jpg" className="card-img" alt="..." />
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="card mb-3">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                            <img src="http://www.guidada.com/images/img/218.jpg" className="card-img" alt="..." />
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="card mb-3">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                            <img src="http://www.guidada.com/images/img/37.jpg" className="card-img" alt="..." />
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="card mb-3">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                            <img src="http://www.guidada.com/images/img/35.jpg" className="card-img" alt="..." />
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                            </div>
                        </div>
                        </div> */}