import React, { Component } from 'react'
import { HashRouter, Switch, Redirect, Route } from 'react-router-dom'


import Login from './component/login'
import Reg from './component/reg'
import Admin from './component/admin'
import User from './component/user'
import Home from './component/home'

import Music from './component/music/music'


import Search from './component/search'
class RootRouter extends Component {
  render() {
    return (

      <HashRouter>
        {/*导航*/}

        {/*路由渲染*/}
        <Switch>
          <Redirect exact from='/' to='/login' />
          <Route path='/login' component={Login} />
          <Route path='/reg' component={Reg} />
          <Route path='/admin' render={() => {
            return (
              <Admin>

                <Route path='/admin/home' component={Home}/>
				<Route path='/admin/setting' component={Music}/>
                <Route path='/admin/user' component={User}/>

                <Route path='/admin/user' component={User} />
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