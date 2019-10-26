import React,{Component} from 'react'
import UserStatistics from '../ustic'
import UserList from '../us'

class User extends Component{
  render(){
    return(
        <div className='user'>
        这里是用户管理
    <UserList></UserList>
    <UserStatistics></UserStatistics>
        </div>

  )
  }
}
export default User