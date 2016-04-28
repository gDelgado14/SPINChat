import React, { Component } from 'react'

class InputToolbar extends Component {
  render() {
    return (
      <div className='example-chat-toolbar'>
        <label htmlFor="nameInput">Username:</label>
        <input onBlur={this.props.setUsername} onKeyDown={this.props.setUsername} type='text' id='nameInput' placeholder='enter a username...' />
      </div>
    )
  }
}

export default InputToolbar
