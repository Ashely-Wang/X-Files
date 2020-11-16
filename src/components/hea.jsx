import React from 'react'
import { NavLink } from 'react-router-dom'


class Head extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    convert = (e) => {
        this.props.getdata(e.target.title)
    }
    render() {
        return (
            <div>
                <header>
                <div className="collapse bg-dark" id="navbarHeader">
                    <div className="container">
                    <div className="row">
                        <div className="col-sm-8 col-md-7 py-4">
                        <h4 className="text-white">Content</h4>
                        <div id="fenlei">
                            <div className="card" id="beauty">
                                <img src="http://127.0.0.1:3200/public/ppp.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">漂亮小姐姐</h5>
                                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                    <a href="#" title="6" onClick={this.convert} className="btn btn-primary">查看分类</a>
                                </div>
                            </div>
                            <div className="card" id="beauty">
                                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603429139647&di=924b0fb37b12f4f6d4e18cca49de92d2&imgtype=0&src=http%3A%2F%2F00imgmini.eastday.com%2Fmobile%2F20181227%2F20181227215622_843963189a0c375fc070676b3b532d84_3.jpeg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">军队</h5>
                                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                    <a href="#" title="7" onClick={this.convert} className="btn btn-primary">查看分类</a>
                                </div>
                            </div>
                            <div className="card" id="beauty">
                                <img src="https://node.turawstock.com/?url=http://st4.imgcontent.net/1006593/27804/i/450/depositphotos_278041736-stock-photo-creepy-bloody-doll-dark.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">恐怖</h5>
                                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                    <a href="#" title="8" onClick={this.convert} className="btn btn-primary">查看分类</a>
                                </div>
                            </div>
                        </div>
                        {/* <p className="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p> */}
                        </div>
                        <div className="col-sm-4 offset-md-1 py-4">
                        <h4 className="text-white">Contact</h4>
                        <ul className="list-unstyled">
                            <li><a href="#" onClick={this.convert} title="1" className="text-white">page one</a></li>
                            <li><a href="#" onClick={this.convert} title="2" className="text-white">page two</a></li>
                            <li><a href="#" onClick={this.convert} title="3" className="text-white">page three</a></li>
                            <li><a href="#" onClick={this.convert} title="4" className="text-white">page four</a></li>
                            <li><a href="#" onClick={this.convert} title="5" className="text-white">page five</a></li>
                            <li><a href="#" onClick={this.convert} title="6" className="text-white">page six</a></li>
                            <li><a href="#" onClick={this.convert} title="7" className="text-white">page seven</a></li>
                            <li><a href="#" onClick={this.convert} title="8" className="text-white">page eight</a></li>
                            {/* <li><a href="#" onClick={this.convert} title="9" className="text-white">page nine</a></li> */}
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="navbar navbar-dark bg-dark shadow-sm">
                    <div className="container d-flex justify-content-between">
                    <a href="#" onClick={this.props.getdata2} className="navbar-brand d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" aria-hidden="true" className="mr-2" viewBox="0 0 24 24" focusable="false"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                        <strong>X档案</strong>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    </div>
                </div>
                </header>
            </div>
        )
    }
}

export default Head