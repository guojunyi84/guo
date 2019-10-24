import React,{Component} from 'react'
import { Menu, Icon,Button,Dropdown} from 'antd';
import './index.less'
let navData=[
  {name:'首页',path:'/home'},
  {name:'音乐模块',path:'/home'},
  {name:'管理',
    path:'/user',
    children:[
      {name:'用户查询管理',path:'/user/list'},
      {name:'音乐点击量',path:'/user/del'},
      {name:'待办事项',path:'/user/del'}
    ]
  },
  {name:'画廊模块',
    path:'/user',
    children:[
      {name:'时光相片',path:'/user/list'},
      {name:'瀑布流',path:'/user/del'},
    ]
  },
  {name:'搜索模块',path:'/home'},
]
const { SubMenu } = Menu;
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
      <a target="_blank" rel="noopener noreferrer" href="http://10.60.14.197:3000/#/login">
        退出登录
      </a>
    </Menu.Item>
  </Menu>
);


class Admin extends Component{
  state = {
    collapsed: false,
  };
  
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  
  
  renderItem=(data)=>{
    return data.map((item,index)=>{
      if(item.children){
        //多级
        return(
          <SubMenu title={item.name}>
            {this.renderItem(item.children)}
          </SubMenu>
        )
      }else{
        return <Menu.Item>{item.name}</Menu.Item>
      }
    })
  }
  
  render(){
    return(
      <div className='admin'>
        <div className='admin-nav'>
          <div style={{ width: 256 }}>
            <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
              <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
            </Button>
            <Menu
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme="dark"
              inlineCollapsed={this.state.collapsed}
            >
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="appstore" />
                    <span>Navigation Two</span>
                  </span>
                }
              >
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                  <Menu.Item key="11">Option 11</Menu.Item>
                  <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
              </SubMenu>
            </Menu>
          </div>
          <Menu mode="inline" style={{ width: 256 }}>,
            {this.renderItem(navData)}
          </Menu>
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