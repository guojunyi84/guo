import React,{Component} from 'react'
import { Input,Button} from 'antd';
import '../utils/axios'
import './index.less'
import axios from 'axios'

import {Card,Table,Spin} from 'antd'
const columns = [
  {
    title: '歌手',
    dataIndex: 'img',
    key: 'img',
    fixed:'left',
    width:200,
    render(imgpath){
      return(
        <img src={imgpath} width='80' height='50' alt=''/>
      )
    }
  },
  {
    title: '歌曲名',
    dataIndex: 'name',
    key: 'name',
    width:150,
  },
  {
    title: '风格',
    dataIndex: 'musicType',
    key: 'musicType',
    width:100,
  },
  {
    title: '国家',
    dataIndex: 'guoJia',
    key: 'guoJia',
    width:100,
  },
  {
    title: '语种',
    dataIndex: 'yuZhong',
    key: 'yuZhong',
    width:100,
  },
  {
    title: '点击量',
    dataIndex: 'musicNum',
    key: 'musicNum',
    width:100,
    
  },
  {
    title: 'id',
    width:200,
    dataIndex: '_id',
    key: '_id',
    fixed:'right',
    
  },
];


class Search extends Component{
  constructor() {
      super()
      
      this.state={
        spinning:true
      }
  }
  search(){
    console.log(this)
    let url ='/api/admin/music/getMuiscByKw'
    axios.get(url,{params:{kw:this.state.kw}})
    .then((data)=>{
      console.log(data)
      this.setState({spinning:false,data:data.list})
      
    })
    .catch(()=>{
      this.setState({spinning:false})
    })
  }
  componentDidMount(){
    this.refreshData()
  }
  refreshData(){
    
    setTimeout(()=>{
      this.setState({spinning:false})
    },500)
  }
  render(){
    const dataSource=this.state.data
    let {spinning} =this.state
    return(
      <div className="userlist-box">
        <Input onChange={(event)=>{
          let kw = event.target.value
          this.setState(()=>({kw:kw}))
          console.log(kw)
        }} size="small" />
        <Button onClick={(kw)=>{
          this.search(kw)
          console.log(this)
          
        }} type="primary" icon="search">Search</Button>
        <Card style={{background:'black',overflow:'hidden',width:'100%',height:'500px'}}>,
        <Spin spinning={spinning}>
          <Table 
            dataSource={dataSource}
            columns={columns}
            scroll={{y:400,x:750}}
           >
          </Table>
        </Spin>
          
        </Card>
      </div>
    )
  }
}

export default Search