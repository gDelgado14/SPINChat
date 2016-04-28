import React, { Component } from 'react'
import Firebase from 'firebase'

import firebaseAccount from '../private.json'

import InputToolbar from './InputToolbar'
import Messages from './Messages'
import MsgInput from './MsgInput'
import ChatHeader from './ChatHeader'

import '../styles/fa.css'
import '../styles/app.css'

class ChatRoom extends Component {
  constructor () {
    super()
    this.handleMsgSend.bind(this)

    this.state = {
      items: [],
      username: ['Anonymous']
    }
  }

  handleMsgSend (e) {
    if (e.keyCode === 13) {
      console.log('Enter Key pressed')

      this.messagesRef.push({
        name: this.state.username,
        text: e.target.value
      })

      // clear input
      e.target.value = ''
    }
  }

  handleSetUsername (e) {
    // change username either when user clicks enter
    // or when user leaves inputbox focus
    if (e.keyCode === 13 || e.type === 'blur' && e.target.value.length > 0) {
      this.setState({
        username: e.target.value
      })
    }
  }

  componentDidUpdate (prevProps, prevState) {
    // show user latest message
    document.getElementById('example-messages').scrollTop = document.getElementById('example-messages').scrollHeight
  }

  componentWillMount () {
    let account = firebaseAccount.firebase
    let id = 'root'
    // check whether user is at '/' or 'room/:roomid'
    if (Object.keys(this.props.params).length > 0) {
      id = this.props.params.roomid
    }

    console.log('id: ', id)

    this.messagesRef = new Firebase(`https://${account}.firebaseio.com/messages/${id}`)

    // Add a callback that is triggered for each chat message.
    this.messagesRef.limitToLast(10).on('child_added', snapshot => {
      // GET DATA
      this.setState({
        items: this.state.items.concat({
          msg: snapshot.val().text,
          user: snapshot.val().name
        })
      })
    })
  }
  render () {
    return (
        <div className='container'>
          <ChatHeader />
          <div className='chat'>
            <InputToolbar
              setUsername={event => this.handleSetUsername(event)}
            />
            <Messages
              messages={this.state.items}
            />
            <MsgInput
              msgSend={event => this.handleMsgSend(event)}
            />
          </div>
          <div className='sidebar'>
            <i className='fa fa-plus' aria-hidden='true'></i>
          </div>
        </div>
    )
  }
}

export default ChatRoom
