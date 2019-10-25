import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
import './index.less'
let navData = [
  { name: '首页', path: '/home' },
  { name: '音乐模块', path: '/home' },
  {
    name: '工具模块',
    path: '/user',
    children: [
      { name: '小应用', path: '/user/list' },
      { name: '富文本编辑器', path: '/user/del' },
      { name: '待办事项', path: '/user/del' }
    ]
  },
  {
    name: '画廊模块',
    path: '/user',
    children: [
      { name: '时光相片', path: '/user/list' },
      { name: '瀑布流', path: '/user/del' },
    ]
  },
  { name: '搜索模块', path: '/home' },
]
const { SubMenu } = Menu;


class Admin extends Component {
  renderItem = (data) => {
    return data.map((item, index) => {
      if (item.children) {
        //多级
        return (
          <SubMenu title={item.name}>
            {this.renderItem(item.children)}
          </SubMenu>
        )
      } else {
        return <Menu.Item>{item.name}</Menu.Item>
      }
    })

  }
  render() {
    return (
      <div className='admin'>
        <div className='admin-nav'>
          <Menu mode="inline" style={{ width: 256 }}>,
            {this.renderItem(navData)}
          </Menu>
        </div>
        <div className='admin-content'>
          <div>
            头部信息
          </div>
          <div>
            {this.props.children}
          </div>
          <div>
            底部信息
          </div>
        </div>
      </div>
    )
  }
}
export default Admin