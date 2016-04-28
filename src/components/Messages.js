import React from 'react'

const Messages = props => {
  const msgs = props.messages.map((msgObj, i) => <li key={i}><strong className="example-chat-username">{msgObj.user}: </strong>{msgObj.msg}</li>)
  return (
    <ul id='example-messages' className="messages">
      {msgs}
    </ul>
  )
}
export default Messages
