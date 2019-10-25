import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox, Card, message ,withRouter} from 'antd';
import './index.less';
import axios from 'axios'
//import '../../style/index.less'
class Login extends React.Component {
  jump=()=>{
     console.log(this.props)
     
    this.props.history.push('./reg')
  }
  
  submit = () => {
    console.log("登录")
    //getFieldsValue()获取一组输入控件的值
    //  let reuslt=this.props.form.getFieldsValue()
    //   console.log(reuslt)

    //校验并获取一组输入域的值与 Error，若 fieldNames 参数为空，则校验全部组件
    this.props.form.validateFields((err, { us, ps }) => {

      // console.log(err, data)
      if (err) {
        //利用message提示框（用法详见文档）
        message.error("输入有误，请重新输入")
      } else {
        let url = '/api/admin/user/login'
        axios({
          url,
          params: {
            us: us,
            ps: ps
          }
        }).then(data => {
          console.log(data)
          if (data.err == 0) {
            //登录成功1s后跳转到首页
            message.success("登录成功", 1, () => {
              this.props.history.push('./admin')
            })
          } else {
            alert("登录错误")
          }
        })

      }
    })
  }
  render() {
    console.log(this, "登录组件")
    //对象的解构赋值，，表单数据的双向绑定   form是从Form.cerate中创建出来的
    const { getFieldDecorator } = this.props.form;
    return (
      
      <div className="login-box">
        <Card style={{ width: "400px", height: '300px', background: "#cccccc", position: "absolute", left: "50%", top: "50%", marginTop: "-150px", marginLeft: "-200px" }}>
          <div className="login-form">
            <Form.Item>
              {getFieldDecorator("us",
                //设置用户名的验证要求
                {
                  rules: [{ required: true, message: 'Please input your username!' },
                  { min: 6, message: '最少6位最多八位' },
                  { max: 6, message: '最少6位最多八位' }]
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                  />
                )}

            </Form.Item>
            <Form.Item>
              {getFieldDecorator("ps", {})(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />
              )}
            </Form.Item>
            <Form.Item>
              <Checkbox>记住我</Checkbox>
              <a className="login-form-forgot" href="">
                忘记密码
              </a>
              <Button type="primary" onClick={this.submit} className="login-form-button" style={{ width: "100%" }}>
                登   录
              </Button>
              <div onClick={this.jump}>立即注册</div>
            </Form.Item>
          </div>
        </Card>
      </div>
    )
  }
}
//通过Form.create创建获取到form对象
export default Form.create()(Login)