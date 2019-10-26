import React,{Component} from 'react'
import { Select, Button ,Form, Modal, Input, Radio} from 'antd';
import CollectionsPage from './add'
import Musiclist from './list'
const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}
class Music extends Component{
constructor(props) {
    super(props)
    this.state = {
      fields: {},
      disabled: {},
      warnings: {}
    }
  }

	render(){
	const { visible, onCancel, onCreate, form } = this.props;
	const { getFieldDecorator } = this.props.form;
		return(
		<div>
		<Form onSubmit={this.onSubmit}>
			
			<Form.Item style={{float:'left'}}>
			<span>歌曲类型:</span>
			  {getFieldDecorator('type', {
				 initialValue:'热歌榜',
			    rules: [
						
				],
			  })(
			    <Select  style={{ width: 120 } } showSearch
			    		allowClear='true'
			    	placeholder="Select a person"
			    	optionFilterProp="children"
			    	onChange={onChange}
			    	onFocus={onFocus}
			    	onBlur={onBlur}
			    	onSearch={onSearch}
			    	filterOption={(input, option) =>
			      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
			    }>
			    	      <Option value="抒情">抒情</Option>
			    	      <Option value="摇滚">摇滚</Option>
			    	      <Option value="激情">激情</Option>
			    	      <Option value="流行">流行</Option>
			    		  <Option value="欧美金曲">欧美金曲</Option>
						  <Option value="网络歌曲">网络歌曲</Option>
			    		  <Option value="经典老歌">经典老歌</Option>
			    		  <Option value="情歌对唱榜">情歌对唱榜</Option>
			    	    </Select>
			  )}
			</Form.Item>
			<Form.Item style={{float:'left'}}>
			<span>发行国家:</span>
			  {getFieldDecorator('guojia', {
				 initialValue:'全部',
			    rules: [
						
				],
			  })(
			    <Select  style={{ width: 120 } } showSearch
			    		allowClear='true'
			    	placeholder="Select a person"
			    	optionFilterProp="children"
			    	onChange={onChange}
			    	onFocus={onFocus}
			    	onBlur={onBlur}
			    	onSearch={onSearch}
			    	filterOption={(input, option) =>
			      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
			    }>
			    	      <Option value="内地">内地</Option>
			    	      <Option value="港台">港台</Option>
			    	      <Option value="欧美">欧美</Option>
			    	      <Option value="韩国">韩国</Option>
						  <Option value="日本">日本</Option>
						  <Option value="中国">中国</Option>
						  <Option value="其他">其他</Option>
			    	    </Select>
			  )}
			</Form.Item>
			
			<Form.Item style={{float:'left'}}>
			<span>语种:</span>
			  {getFieldDecorator('yuzhong', {
				 initialValue:'全部',
			    rules: [
						
				],
			  })(
			    <Select  style={{ width: 120 } } showSearch
			    		allowClear='true'
			    	placeholder="Select a person"
			    	optionFilterProp="children"
			    	onChange={onChange}
			    	onFocus={onFocus}
			    	onBlur={onBlur}
			    	onSearch={onSearch}
			    	filterOption={(input, option) =>
			      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
			    }>
			    	      <Option value="华语">华语</Option>
			    	      <Option value="英语">英语</Option>
			    	      <Option value="日语">日语</Option>
			    	      <Option value="韩语">韩语</Option>
			    		  <Option value="粤语">粤语</Option>
			    		
			    	    </Select>
			  )}
			</Form.Item>

		  <div>	

		    <Button className="reset"  onClick={()=>{
				const {form:{resetFields}}=this.props
				resetFields()
			}								
			} icon="reload">
		      重置
		    </Button>
			
			<Button className="reset" onClick={()=>{
				const {form:{resetFields}}=this.props
				resetFields()
			}
				
				
			} icon="search">
			  搜索
			</Button>
		  </div>
		</Form>
		
			<CollectionsPage></CollectionsPage>
			<Musiclist></Musiclist>
		</div>
		
		
		)
	}

}
Music= Form.create({ name: 'form_in_modal'})(Music);
export default Music