
import React from 'react'
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker, Icon } from 'antd';

const { Option } = Select;
function onChange(value) {
  console.log(`selected ${value}`,this);
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
class DrawerForm extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Button type="primary" onClick={this.showDrawer}>
          <Icon type="plus" /> 添加
        </Button>
        <Drawer
          title="添加音乐"
          width={720}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="歌曲名" >
                  {getFieldDecorator('name', {
                    rules: [{ required: true, message: '请输入歌曲名' }],
                  })(<Input placeholder="请输入歌曲名"  onChange={(event)=>{
					  let name=event.target.value
						 this.setState(()=>({name:name }))
					 
				  }}  / >)}
                </Form.Item>
              </Col>
            
            </Row>
			<Row gutter={16}>
			  <Col span={12}>
			    <Form.Item label="歌手名">
			      {getFieldDecorator('singer', {
			        rules: [{ required: true, message: '请输入歌手名' }],
			      })(<Input placeholder="请输入歌手名" onChange={(event)=>{
					  let singer=event.target.value
					  console.log(singer)
					  this.setState(()=>({singer:singer }))
				  }}  />)}
			    </Form.Item>
			  </Col>
			
			</Row>
            <Row gutter={16}>
            <Col span={12}>
             <Form.Item style={{float:'left'}} label="歌曲类型">
             
               {getFieldDecorator('type', {
     
                 rules: [
             			
             	],
               })(
                 <Select  style={{ width: 120 } } showSearch
					allowClear='true'
                 	placeholder="Select a person"
                 	optionFilterProp="children"
                 	onChange={(value)=>{  
						let type=value
						this.setState(()=>({type:type }))
						console.log(type) }}
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
            </Col>
            </Row>
            <Row gutter={16}>
				<Col span={12}>
				 <Form.Item style={{float:'left'}} label="语种" >
				
				   {getFieldDecorator('yuzhong', {
			
				     rules: [
				 			
				 	],
				   })(
				     <Select  style={{ width: 120 } } showSearch
				     		allowClear='true'
				     	placeholder="Select a person"
				     	optionFilterProp="children"
				     	onChange={(value)=>{
							let yuzhong=value
							this.setState(()=>({yuzhong:yuzhong }))
						}}
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
				</Col>
             
            </Row>
            <Row gutter={16}>
             <Col span={12}>
              <Form.Item style={{float:'left'}} label="发行国家" >
             
                {getFieldDecorator('guajia', {
              	
                  rules: [
              			
              	],
                })(
                  <Select  style={{ width: 120 } } showSearch
                  		allowClear='true'
                  	placeholder="Select a person"
                  	optionFilterProp="children"
                  	onChange={(value)=>{
						let guajia = value
						this.setState(()=>({guajia:guajia }))
					}}
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
             </Col>
            </Row>
          </Form>
          <div
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              borderTop: '1px solid #e9e9e9',
              padding: '10px 16px',
              background: '#fff',
              textAlign: 'right',
            }}
          >
            <Button onClick={this.onClose} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button onClick={()=>{
				let url='/api/admin/music/addMusic'
				
				this.$axios.get(url,{params:{name:this.state.name,singer:this.state.singer,musicType:this.state.type,guoJia:this.state.guajia,yuZhong:this.state.yuzhong,musicNum:8684}})
				.then((data)=>{
					window.location.reload();
				})
				this.setState({
				  visible: false,
				});
				
			}} type="primary">
              Submit
            </Button>
          </div>
        </Drawer>
      </div>
    );
  }
}

const App = Form.create()(DrawerForm);
export default App