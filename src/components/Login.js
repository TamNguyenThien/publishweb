import React, { useState } from 'react'
import { Form, Button, Input, Checkbox, notification } from 'antd'
import { withRouter, Link } from 'react-router-dom'
import { useMutation } from 'react-apollo'
import gql from 'graphql-tag'

export default function Login (props) {
  const { login1 } = props
  const [login, setLogin] = useState(false)
  // console.log(login)
  // useEffect(() => {
  //   login1(login)
  // })
  return (
    <div style={{ width: '100%', height: 500, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <>
        <Form className='login-form'>
          <Form.Item name='email' rules={[{ required: true, message: 'Vui lòng nhâp tên đăng nhập' }]}>
            <Input style={{ width: 300 }}
              size='large'
              placeholder='Tên đăng nhập'
              spellCheck={false}
            />
          </Form.Item>
          <Form.Item style={{ width: 100 }}name='password' rules={[{ required: true, message: 'Vui lòng nhâp mk' }]}>
            <Input.Password style={{ width: 300 }}
              type='password'
              size='large'
              placeholder='Mật khẩu'
              spellCheck={false}
            />
          </Form.Item>
          <Form.Item>
            <Button
            // type="primary"
              size='large'
              block
              // onClick={() => handle(getFieldsValue(["email", "password"]))}
              onClick={() => { setLogin(true); login1(login) }}
              // disabled={hasErrors(getFieldsError())}
              className='submitLogin'
              style={{ height: 46, width: '50%' }}
            >
            Đăng nhập
            </Button>
            <Button
              size='large'
              block
              className='submitLogin'
              style={{ height: 46, width: '50%' }}
            >
            Đăng Ky
            </Button>
          </Form.Item>
        </Form>
    </>
    </div>

  )
}
