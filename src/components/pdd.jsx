import React from 'react'


class PDD extends React.Component {
    constructor() {
        super()
        this.state = {
        }
    }
    eppd = (e) => {
        e.preventDefault()
        this.props.epd(this.props.pds[e.target.title])
    }
    render() {
        return(<div>
            <div className="pdbox">
                    {this.props.pds.map(val => {
                        return <div key={this.props.pds.indexOf(val)} className="card tttt">
                        <img src={val.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                    <h5 className="card-title">{val.name + "系列"}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" onClick={this.eppd} title={this.props.pds.indexOf(val)} className="btn btn-primary">进入片单</a>
                        </div>
                        </div>
                    })}
                </div>
        </div>)
    }
}

export default PDD