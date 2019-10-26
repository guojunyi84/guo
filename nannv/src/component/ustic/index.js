import React,{Component} from 'react'
import './index.less'
import {Card,Table,Spin,Pagination,Button,Popconfirm} from 'antd'
//第一步创建表头
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '类型',
    dataIndex: 'tit',
    key: 'tit',
  },
  {
    title: '国家',
    dataIndex: 'country',
    key: 'country',
  },
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
  },
];
//然后创建表格内容
//若果想要渲染表格的，需要ajax请求一波数据，请求一波数据把dataSource修改
const dataSource=[
  {name:"王菲", sex:1,tit:"华语",country:'中国',key:1},
  {name:"啦啦啦",sex:1, tit:"日语", sex:1,country:'日本',key:2},
  {name:"遛一遛",sex:1, tit:"英语", sex:1,country:'英国',key:3}
]
class UserStatistics  extends Component{
  render(){
    return(
      <div className='userlist-box'>
         <Card>
           <Table dataSource={dataSource} columns={columns}> </Table>
        </Card>
      </div>
    )
    
  }
}
export default UserStatistics