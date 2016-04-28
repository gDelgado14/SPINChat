import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import ChatRoom from '../components/ChatRoom'

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={ChatRoom} />
    <Route path='room/:roomid' component={ChatRoom} />
  </Router>
)

export default routes
