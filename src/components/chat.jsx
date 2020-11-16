import React, {useState} from 'react'

export default function ChatRoom() {
    const [message, setMessage] = useState("what do you wanna say?")
    var current;
    var sd = {topic: "asdasdasdasdas"}
    var sa = ["wr", "asdas", "safsdf", "qweqweqe"]
    const talk = (e) => {
        current = e.target.value
        for (let item of sa.entries()) {
            console.log(item)
        }
    }
    return (
        <div>
            <h1>{message}</h1>
            <input type="text" onChange={talk}/>
            <button type="button" onClick={() => {
                setMessage(current)
            }}>Chat</button>
        </div>
    )
}