import React,{Component} from 'react'

import {Card ,message, Table,Spin,Pagination,Button,Popconfirm} from 'antd'
import './index.less'
class Updata extends Component{
	constructor(props){
		super(props)
		this.state={
			name:props.data.name|| '',
			guojia:props.data.guoJia|| '',
			singer:props.data.singer|| '',
			yuzhong:props.data.yuZhong|| ''
		}
	}
	submit=()=>{
		setTimeout(()=> {
			this.props.refresh()
			
		}, 1000);

	}
	upload=()=>{
		
		
	}
	render(){	
		console.log(this,'xinxi')
		return(
		<div className='userUpdate-box'>
		<Card>
		<p>修改音乐</p>
		<lable>歌曲名:</lable>
		<input tepe='text' value={this.state.name} onChange={
			(e)=>{
				this.setState({name:e.target.value})
			}
		}/>
		<hr/>
		<lable>歌手名:</lable>
		<input tepe='text' value={this.state.singer} onChange={
			(e)=>{
				this.setState({singer:e.target.value})
			}
		}/>
		<hr/>
		<lable>发行国家:</lable>
		<input tepe='text' value={this.state.guojia} onChange={
			(e)=>{
				this.setState({guojia:e.target.value})
			}
		}/>
		<hr/>
		<lable>语种:</lable>
		<input tepe='text' value={this.state.yuzhong} onChange={
			(e)=>{
				this.setState({yuzhong:e.target.value})
			}
		}/>
			<button onClick={this.upload}>关闭</button >
	
			<button onClick={this.submit}> 提交</button >
		</Card>
		</div>
		)
		
	}
}
export default Updata