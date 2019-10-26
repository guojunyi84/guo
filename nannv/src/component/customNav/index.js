import React,{Component} from 'react'
import { Menu, Icon,Button,Dropdown} from 'antd';
import {withRouter} from 'react-router-dom'
let navData=[
  {name:'首页',path:'/admin/home'},
  {name:'音乐模块',path:'/admin/setting'},
  {name:'管理',
    path:'/user',
    children:[
      {name:'用户查询管理',path:'/admin/user/list'},
      {name:'音乐点击量',path:'/admin/user/num'},
      {name:'待办事项',path:'/admin/user/del'}
    ]
  },
  {name:'画廊模块',
    path:'/admin',
    children:[
      {name:'时光相片',path:'/admin/list'},
      {name:'瀑布流',path:'/admin/del'},
    ]
  },
  {name:'搜索模块',path:'/admin/search'},
]
const { SubMenu } = Menu;
class CustomNav extends Component{
    jump=(path)=>{
      console.log(this.props)
     this.props.history.push(path)
   }
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
         return <Menu.Item onClick={this.jump.bind(this,item.path)}>{item.name}</Menu.Item>
       }
     })
   }
   render(){
     console.log(this,'自定义导航')
     return(
       <div>
       <Menu style={{ width: 256 }}>
         {this.renderItem(navData)}
       </Menu>
      </div>
      
     )
   }
}
export default withRouter(CustomNav)
        