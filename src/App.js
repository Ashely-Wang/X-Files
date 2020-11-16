import React from 'react'
import Login from './components/login.jsx'
import Users from "./components/getUsers.jsx" 
import ChatRoom from "./components/chat.jsx"
import MW1 from './components/myWorld1.jsx'
import MW2 from './components/myWorld2.jsx'
import MW3 from './components/myWorld3.jsx'
import MW4 from './components/myWorld4.jsx'
import MW5 from './components/myWorld5.jsx'
import MW6 from './components/myWorld6.jsx'
import MW7 from './components/myWorld7.jsx'
import MW8 from './components/myWorld8.jsx'
import MW9 from './components/myWorld9.jsx'
import Upl from './components/Upl.jsx'
import Head from './components/hea.jsx'
import HS from './components/horrorStories.jsx'
import UHS from './components/uploadhs.jsx'



import {Route,Switch, BrowserRouter} from 'react-router-dom'
const album = {1:MW1, 2:MW2, 3:MW3, 4:MW4, 5:MW5, 6:MW6, 7:MW7, 8:MW8}
const wocao = <Upl/>
const nicao = <h1>sadasd</h1>
// var h = window.location.href
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      page: 6,
      uploadStatus: "nu",
      upload_background_id: "nw",
      // currentStyle: {display: (window.location.href == "http://127.0.0.1:3000/login" ||  "http://127.0.0.1:3000/login#")?"none":"block"}
    }
  }
  changeData = (e) => {
    this.setState({
      page: e
    })
  }
  changeData2 = () => {
    var currentStatus = this.state.uploadStatus
    if (currentStatus == "u") {
      this.setState({
        uploadStatus: "nu",
        upload_background_id: "nw"
      })
    } else {
      this.setState({
        uploadStatus: "u",
        upload_background_id: "wowowo"
      })
    }
  }
  componentDidMount() {
    // console.log(window.location.href + "ad")
  }
  // lf = () => {
  //   // if (window.location.href != "http://127.0.0.1:3000/login" && window.location.href != "http://127.0.0.1:3000/login#") {
  //   //   return <div style={this.state.currentStatus} className="mainHeader">
  //   //   <Head getdata={this.changeData.bind(this)} getdata2={this.changeData2.bind(this)}></Head>
  //   // </div>
  //   // } else {
  //   //   return <p></p>
  //   // }
  //   return <div style={this.state.currentStyle} className="mainHeader">
  //     <Head getdata={this.changeData.bind(this)} getdata2={this.changeData2.bind(this)}></Head>
  //   </div>
  //   // window.location.replace(window.location)
  // }
  render() {
    return (
      <div className="App">
        {/* <Route path="/login" component={Login}></Route> */}
        {/* <ChatRoom/> */}
        <Head getdata={this.changeData.bind(this)} getdata2={this.changeData2.bind(this)}></Head>
        <Route path="/login" component={Login}></Route>
        <Route path="/hs" component={HS}></Route>
        <Route path="/uph" component={UHS}></Route>
        <main>
          <div className={this.state.uploadStatus + "Cover"}></div>
          <div id={this.state.upload_background_id}>
            <Route path="/main" component={album[this.state.page]}></Route>
          </div>
          <div className={this.state.uploadStatus}>
            <Upl/>
          </div>
        </main>
         {/* <input type="password" name="pwd" placeholder="give me your password" /> */}
      </div>
    )
  }
}


export default App;
