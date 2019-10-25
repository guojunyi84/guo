import React,{Component} from 'react'
import { Input,Button} from 'antd';
import '../utils/axios'
import './index.less'


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
    dataIndex: 'style',
    key: 'style',
    width:100,
  },
  {
    title: '国家',
    dataIndex: 'address',
    key: 'address',
    width:100,
  },
  {
    title: '语种',
    dataIndex: 'yuzhong',
    key: 'yuzhong',
    width:100,
  },
  {
    title: '点击量',
    dataIndex: 'num',
    key: 'num',
    width:100,
    
  },
  {
    title: 'id',
    width:200,
    dataIndex: 'id',
    key: 'id',
    fixed:'right',
    
  },
];
const dataSource=[
]
class Search extends Component{
  constructor() {
      super()
      
      this.state={
        spinning:true
      }
  }
  search(){
    let url ='localhost:3000/admin/music/getMuiscByKw?kw=抒情'
    this.$axios.get(url)
    .then((data)=>{
      console.log(data)
      this.setState({spinning:false})
    })
    .catch(()=>{
      this.setState({spinning:false})
    })
  }
  componentDidMount(){
    this.refreshData()
  }
  refreshData(){
    // let url ='/guojunyi/admin/music/getMusic'
    // this.$axios.get(url)
    // .then((data)=>{
    //   console.log(data)
    //   this.setState({spinning:false})
    // })
    // .catch(()=>{
    //   this.setState({spinning:false})
    // })
    setTimeout(()=>{
      this.setState({spinning:false})
    },500)
  }
  render(){
    let {spinning} =this.state
    return(
      <div className="userlist-box">
        <Input size="small" />
        <Button onClick={()=>{
          this.search()
        }} type="primary" icon="search">Search</Button>
        <Card style={{background:'black',overflow:'hidden',width:'100%',}}>,
        <Spin spinning={spinning}>
          <Table 
            dataSource={dataSource}
            columns={columns}
            scroll={{y:500,x:750}}
           >
          </Table>
        </Spin>
          
        </Card>
      </div>
    )
  }
}

export default Search