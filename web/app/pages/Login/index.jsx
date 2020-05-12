import React from 'react'

import {
      Form,
      Input,
      Button,
      Checkbox,
      Row
} from 'antd'

import { 
      UserOutlined, 
      LockOutlined 
} from '@ant-design/icons'

export default () => {

      const onFinish = values => {
            console.log('Login successful' + values)
      }

      const onFinishFailed = errorInfo => {
            console.error('Error trying to log in:', errorInfo)
      }

      return (
            <div className='login-container' >
                  <Form
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                  >
                        <Form.Item
                              name='email'
                              rules={[ {required: true, message: 'Please enter your E-mail ID'} ]}
                        >
                              <Input
                                    prefix={<UserOutlined className="site-form-item-icon" />}
                                    placeholder='E-mail ID'
                              />
                        </Form.Item>

                        <Form.Item
                              name='Password'
                              rules={[ {required: true, message: 'Please enter your password!'} ]}
                        >
                              <Input.Password 
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    placeholder='Password'
                              />
                        </Form.Item>

                        <Form.Item
                              name='remember'
                              valuePropName='checked'
                        >
                              <Checkbox>Remember Me</Checkbox>

                              <a className='login-form-forgot' href=''>
                                    Forgot password
                              </a>
                        </Form.Item>

                        <Form.Item>
                              <Button 
                                    type='primary'
                                    htmlType='submit'
                                    className='login-form-submit'
                              >
                                    Login
                              </Button>
                        </Form.Item>
                  </Form>
            </div>

      )
}