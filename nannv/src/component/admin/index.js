import React,{Component} from 'react'
import { Menu, Icon,Button,Dropdown} from 'antd';
import CustomNav from '../customNav'
import './index.less'
// let navData=[
//   {name:'首页',path:'/admin/home'},
//   {name:'音乐模块',path:'/admin/home'},
//   {name:'管理',
//     path:'/user',
//     children:[
//       {name:'用户查询管理',path:'/admin/user/list'},
//       {name:'音乐点击量',path:'/admin/user/del'},
//       {name:'待办事项',path:'/admin/user/del'}
//     ]
//   },
//   {name:'画廊模块',
//     path:'/user',
//     children:[
//       {name:'时光相片',path:'/admin/user/list'},
//       {name:'瀑布流',path:'/admin/user/del'},
//     ]
//   },
//   {name:'搜索模块',path:'/admin/user/search'},
// ]
// const { SubMenu } = Menu;
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
export default Admin