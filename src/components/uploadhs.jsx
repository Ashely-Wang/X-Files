import React from 'react'
import axios from 'axios'


class UHS extends React.Component {
    constructor() {
        super()
        this.state = {
            title: "",
            author: "",
            content: ""
        }
    }
    getStory = (e) => {
        // console.log(e.target.name)
        if (e.target.name == "title") {
            this.setState({
                title: e.target.value
            })
        }
        if (e.target.name == "content") {
            this.setState({
                content: e.target.value
            })
        }
        if (e.target.name == "author") {
            this.setState({
                author: e.target.value
            })
        }
    }
    uths = async (e) => {
        e.preventDefault()
        // console.log(this.state.title)
        // console.log(this.state.author)
        // console.log(this.state.content)
        const ret = await axios.post("http://127.0.0.1:3200/addhs", {
            title: this.state.title,
            author: this.state.author,
            content: this.state.content
        })
        console.log(ret)
    }
    render() {
        return (<div>
            <form action="">
                <input type="text" onChange={this.getStory} name="title"/>
                <input type="text" onChange={this.getStory} name="author"/>
                <textarea name="content" onChange={this.getStory} id="" cols="30" rows="10"></textarea>
                <button type="submit" onClick={this.uths}>Upload This Horror Story</button>
            </form>
        </div>)
    }
}


export default UHS