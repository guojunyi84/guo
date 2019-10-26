import React,{Component} from 'react'

import {Card , Table,Spin,Pagination,Button,Popconfirm, Popover,Modal} from 'antd'
import Updata from './updata'	
	const hoverContent = <div style={{width:40}}>修 改</div>;
	const clickContent = <div style={{width:40}}>删除</div>;

class Musiclist extends Component{
	state = { visible: false };

	constructor(){

		super()
		this.columns=[
  {
    title:'序号',
     render:(text,record,index)=>`${index+1}`
    //生成序号  
  },
  {
    title: '歌曲名',
	width:'100',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '歌手',
	width:'100',
    dataIndex: 'singer',
    key: 'singer',
  },
  {
    title: '发行国家',
	width:'100',
    dataIndex: 'guoJia',
    key: 'guaJia',
		
  },
  {
    title: '语种',
  	width:'120',
    dataIndex: 'yuZhong',
    key: 'yuZhong',

  },

  {
    title: '操作',
  	width:'120',
    key: 'action',
  	render:(data)=>{
		let {updataData,updatastate}=this.state

  		return(
  		<div>
		{! updatastate || <Updata data={updataData}  refresh={this.refreshData}></Updata>}
		<Popover
				content={hoverContent}
		        arrowPointAtCenter
		        onVisibleChange={this.handleHoverChange}
		      >
			
		        
		        <Button icon='edit' 
				onClick={this.updata.bind(this,data)}></Button>  
				
				
				
				
		      </Popover>

		<Popconfirm title='你确定删除吗' onConfirm={()=>{
			this.del(data._id)
			console.log(data)
		}	
		}>
		<Popover
				content={clickContent}
		        arrowPointAtCenter
		        onVisibleChange={this.handleHoverChange}
		      >
		<Button  type="danger" icon='delete'></Button>
		</Popover>
		</Popconfirm>
		
		</div>
  		)
  	}
  },
]
		this.state={
			updatastate:false,
			spinning:true,
			nowPage:1,
			list:[],
			userUpdate:false,
			clicked: false,
			hovered: false,
			updataData:null,
		}
		}
		updata=(data)=>{
			this.setState({
			  visible: true,
			  updatastate:true,
			  updataData:data,			 
			});
			 console.log(data)
		}


	
		del=(id)=>{
			let url='/api/admin/music/delMusic'
			this.$axios.get(url,{params:{id:id}})
			.then(()=>{
				console.log('删除成功')
				this.refreshData()
			})
		}
		componentDidMount(){
			let page=this.nowPage
			this.refreshData(page)
			
		}
		refreshData=(page)=>{
			this.setState({spinning:true,updatastate:false})
			let url='/api/admin/music/getMusic'
			this.$axios.get(url)
			.then((data)=>{			
				let len=data.list.length
				console.log(len)
				console.log(data.list)
				
				this.setState({spinning:false,list:data.list})
			})
			.catch(()=>{
				this.setState({spinning:false})
			})		
		
		}
	render(){
		let {spinning}=this.state
		
		return(
		<div className='login'>
		
		<Card  style={{width:'100%', height:800}}>,
		<Spin spinning={spinning}>
		<Table pagination={true}   dataSource={this.state.list} columns={this.columns} scroll={{y:520,x:1250}}></Table>
	
		</Spin>
		</Card>
		</div>
		)
		
	}
}
export default Musiclist