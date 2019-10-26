import React,{Component} from 'react'
import CustomNav from '../customNav'
import './index.less'
import {withRouter} from 'react-router-dom'
import { Menu, Icon,Button,Dropdown } from 'antd';





const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        个人信息
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        联系服务
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" >
        退出登录
      </a>
    </Menu.Item>
  </Menu>
)
class Admin extends Component{
  

  render(){
    return(
      <div className='admin'>
        <div className='admin-nav'>
          
          <CustomNav></CustomNav>
        </div>
        <div className='admin-content'>
          <div className='admin-content-tou'>
            <Dropdown className='admin-content-tou-user' overlay={menu} placement="bottomRight">
              <Button>个人中心</Button>
            </Dropdown>
          </div>
          <div>
            {this.props.children}
          </div>

          
   

          <div className='admin-content-bottom'>
            React-Admin ©2019 Created by 865470087@qq.com
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(Admin)