import React, { Component, PropTypes } from 'react'

class MsgInput extends Component {
  constructor () {
    super()
    this.state = {
      messages: ''
    }
  }
  add () {
    console.log('MsgInput - add')
  }
  componentDidMount () {
    console.log('MsgInput - componentDidMount')
  }

  render () {
    return (
      <footer>
        <input type='text' id='messageInput' onKeyDown={this.props.msgSend} placeholder='Type a message...' />
      </footer>
    )
  }
}

/* MsgInput.propTypes = {
  msgSend: PropTypes.func.isRequired
}*/

export default MsgInput
