import React, { Component } from 'react'
import { HashRouter, Switch, Redirect, Route } from 'react-router-dom'

import Login from './component/login'
import Reg from './component/reg'
import Admin from './component/admin'
import User from './component/user'
import Home from './component/home'
import Search from './component/search'
import UserList from './component/ustic'
import  UserStatistics  from './component/us'
class RootRouter extends Component {
  render() {
    return (
      <HashRouter>
        {/*导航*/}
    component={User}
        {/*路由渲染*/}
        <Switch>
          <Redirect exact from='/' to='/login' />
          <Route path='/login' component={Login} />
          <Route path='/reg' component={Reg} />
          <Route path='/admin' render={() => {
            return (

            <Admin>
            <Route path='/admin/home' component={Home} />
          <Route path='/admin/user' render={() => {
        return (
                
            <div>
            <Route path='/admin/user/list' component={UserList} />
            <Route path='/admin/user/us' component={ UserStatistics} />
            </div>
      )
      }}/>
    <Route path='/admin/search' component={Search} />
          </Admin>
            )
          }} />
        </Switch>
      </HashRouter>
    )

  }
}
export default RootRouter