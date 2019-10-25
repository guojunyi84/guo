import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, Card, message } from 'antd';
import React, { Component } from 'react'
import './index.less'
import axios from 'axios'
class Reg extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
        verifyCode: ''
    };
    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };
    submit = () => {
        this.props.form.validateFieldsAndScroll((err, { nickname, password }) => {
            if (!err) {
                let url = '/api/admin/user/reg'
                axios({
                    url,
                    params: {
                        us: nickname,
                        ps: password,
                    }
                })
                    .then(data => {
                        // handle success
                        console.log(data);
                        if (data.err == -2) {
                            alert(data.msg)
                        } else {
                            message.success("登录成功", 1, () => {
                                this.props.history.push('./Login')
                            })

                        }
                    });
            }
        })
    }
    validate = () => {
        var oValue = this.codeInput.state.value;
        console.log(this.codeInput, 111, oValue, this.state.verifyCode)
        if (oValue == 0) {
            alert('请输入验证码');
        } else if (oValue !== this.state.verifyCode) {
            alert('验证码不正确，请重新输入');
            oValue = ' ';
            this.createCode();
        }
    }
    createCode = () => {
        //首先默认code为空字符串
        let code = '';
        //设置长度，这里看需求，我这里设置了4
        var codeLength = 4;
        var codeV = document.getElementById('code');
        //设置随机字符
        var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
        //循环codeLength 我设置的4就是循环4次
        for (var i = 0; i < codeLength; i++) {
            //设置随机数范围,这设置为0 ~ 36
            var index = Math.floor(Math.random() * 36);
            //字符串拼接 将每次随机的字符 进行拼接
            code += random[index];
        }
        //将拼接好的字符串赋值给展示的Value
        codeV.value = code;
        this.setState({
            verifyCode: code
        })
    }
    //设置此处的原因是每次进入界面展示一个随机的验证码，不设置则为空
    componentDidMount() {
        this.createCode();
    }
    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };
    render() {
        console.log(this)
        let { getFieldDecorator } = this.props.form
        //prefix前缀，，默认前缀为86
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{ width: 70 }}>
                <Select.Option value="86">+86</Select.Option>
                <Select.Option value="87">+87</Select.Option>
            </Select>,
        );

        //模板布局
        const formItemLayout = {
            labelCol: {
                xs: { span: 6 },
                sm: { span: 5 },
            },
            //控制输入框的字符个数
            wrapperCol: {
                xs: { span: 20 },
                sm: { span: 16 },
            },
        };
        //尾模板布局
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };

        return (
            <Card style={{ width: "600px", height: '500px', background: "#cccccc", position: "absolute", left: "50%", top: "50%", marginTop: "-250px", marginLeft: "-300px" }}>
                <Form {...formItemLayout} >
                    <Form.Item
                        label={
                            <span>
                                昵称
                        </span>
                        }
                    >
                        {getFieldDecorator('nickname', {
                            rules:
                                //required: true必填项
                                [
                                    { required: true, message: 'Please input your nickname!', whitespace: true },
                                    { min: 6, message: '最少6位最多八位' },
                                    { max: 6, message: '最少6位最多八位' },
                                ],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="密码" hasFeedback>
                        {getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                                { min: 6, message: '最少6位最多八位' },
                                { max: 6, message: '最少6位最多八位' },
                                {
                                    validator: this.validateToNextPassword,
                                },
                            ],
                        })(<Input.Password />)}
                    </Form.Item>
                    <Form.Item label="确认密码" hasFeedback>
                        {getFieldDecorator('confirm', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                { min: 6, message: '最少6位最多八位' },
                                { max: 6, message: '最少6位最多八位' },
                                {
                                    validator: this.compareToFirstPassword,
                                },
                            ],
                        })(<Input.Password onBlur={this.handleConfirmBlur} />)}
                    </Form.Item>
                    <Form.Item label="手机号">
                        {getFieldDecorator('phone', {
                            rules: [
                                { required: true, message: 'Please input your phone number!' }
                            ],
                        })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
                    </Form.Item>
                    <Form.Item label="验证码" >
                        <Row>
                            <Col span={8}>
                                {getFieldDecorator('captcha', {
                                    rules: [{ required: true, message: 'Please input the captcha you got!' }],
                                })(<Input id="input" ref={input => this.codeInput = input} onBlur={this.validate} />)}
                            </Col>
                            <input type='button' id="code" onClick={this.createCode} />
                        </Row>
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Checkbox>
                            I have read the <a href="">agreement</a>
                        </Checkbox>,
                </Form.Item>
                    <Form.Item   {...tailFormItemLayout}>
                        <Button type="primary" onClick={this.submit}>
                            Register
          </Button>
                    </Form.Item>
                </Form>
            </Card>
        );
    }
}

export default Form.create()(Reg);
