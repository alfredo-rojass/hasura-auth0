import React from 'react';
import {
    Form, Icon, Input, Button, Checkbox,
  } from 'antd';
  
  class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        this.props.auth.signup(values);
        if (!err) {
          // this.props.auth.loginDefault();
          console.log('Received values of form: ', values);
        }
      });
    }
  
    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <div className="container form-login-ant"><br/>
          <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
                  {getFieldDecorator('email', {
                  rules: [{ required: true, message: 'Please input your email!' }],
                  })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="email" />
                  )}
              </Form.Item>
              <Form.Item>
                  {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                  })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                  )}
              </Form.Item>
              <Form.Item>
                  {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                  })(
                  <Checkbox>Remember me</Checkbox>
                  )}
                  <Button type="primary" htmlType="submit" className="login-form-button" style={{width: 270}}>
                  Sign up
                  </Button>
              </Form.Item>
          </Form>
        </div>
      );
    }
  }
  
  const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
  export default WrappedNormalLoginForm;
//   ReactDOM.render(<WrappedNormalLoginForm />, mountNode);