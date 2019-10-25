import {Icon} from 'antd'
import React,{Component} from 'react'
import './icon.less'
class Micon extends Component{
	render(){
		return(
		<div className='icon-box'>
			<div>
				<div className='iconname'>
					<Icon style={{fontSize: '32px'}} type="heart" theme="twoTone" twoToneColor="#eb2f96"  />
				</div>
				<span>
					<h3>收藏</h3>
					<p>301</p>
				</span>				
			</div>
			
			<div>
				<div className='iconname'>
				<Icon style={{fontSize: '32px'}} type="camera" theme="twoTone" twoToneColor="#3C57C4" />
				</div>
				<span>
					<h3>照片</h3>
					<p>802</p>
				</span>				
			</div>
			<div>
				<div className='iconname'>
					<Icon  style={{fontSize: '32px',linHeight: '32px'}} type="cloud" theme="twoTone" twoToneColor="#808080" />
				</div>
				<span>
					<h3>云数据</h3>
					<p>30122</p>
				</span>				
			</div>
			<div>
				<div className='iconname'>
					<Icon  style={{fontSize: '32px'}} type="mail" theme="twoTone" twoToneColor="#2BD54D" />
				</div>
				<span>
					<h3>邮件</h3>
					<p>102</p>
				</span>				
			</div>
			
			
		
		
		
		</div>
		)
	}
}
export default Micon