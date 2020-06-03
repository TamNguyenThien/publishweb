import React, { useState } from 'react'
import { Form, Button, Input, notification } from 'antd'
// import { Button, notification } from '@digihcs/innos-ui3'
import { withRouter, Router } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const LOGIN_USER = gql`
  mutation login($input: LoginUserInput!) {
    login(input: $input) {
      accessToken
    }
  }
`

function NormalLoginForm (props) {
  const { login1 } = props
  const [login, setLogin] = useState(false)

  const [login2] = useMutation(LOGIN_USER)

  const hasErrors = fieldsError => Object.keys(fieldsError).some(field => fieldsError[field])

  // const handleSubmit = e => {
  //   console.log(e)
  //   e.preventDefault()
  //   const { form } = props
  //   form.validateFields((err, values) => {
  //     if (!err) {
  //       // console.log('Received values of form: ', values)
  //       const { email, password } = values
  //       login({
  //         variables: {
  //           input: {
  //             email,
  //             password
  //           }
  //         }
  //       })
  //         .then(res => {
  //           const { accessToken } = res.data.login
  //           console.log(accessToken)
  //           props.store.Auth.authenticate(accessToken)
  //           props.history.push('/')
  //           notification.bar({
  //             title: 'Đăng nhập thành công',
  //             type: 'success',
  //             placement: 'bottomRight',
  //             theme: 'pharmacy'
  //           })
  //         })
  //         .catch(err => {
  //           console.log(err)
  //           notification.bar({
  //             title: 'Tên đăng nhập hoặc mật khẩu sai',
  //             type: 'error',
  //             placement: 'bottomRight',
  //             theme: 'pharmacy'
  //           })
  //         })
  //     }
  //   })
  // }
  // const onFinish = values => {
  //   const {email, password} = values
  //   login({
  //     variables: {
  //       input: {
  //         email,
  //         password
  //       }
  //     }
  //   })
  //     .then(res => {
  //       const { accessToken } = res.data.login
  //       console.log(accessToken)
  //       // props.store.Auth.authenticate(accessToken)
  //       props.history.push('/')
  //       notification.bar({
  //         title: 'Đăng nhập thành công',
  //         type: 'success',
  //         placement: 'bottomRight',
  //         theme: 'pharmacy'
  //       })
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }
  return (
    <>
      <Form className='login-form'>
        <Form.Item name='email' rules={[{ required: true, message: 'Vui lòng nhâp tên đăng nhập' }]}>
          <Input
            size='large'
            placeholder='Tên đăng nhập'
            spellCheck={false}
          />
        </Form.Item>
        <Form.Item name='password' rules={[{ required: true, message: 'Vui lòng nhâp mk' }]}>
          <Input.Password
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
        </Form.Item>
      </Form>
      <div
        className='error-wrapper'
        // style={{ opacity: hasErrors(getFieldsError()) ? '1' : '0' }}
      >
        <span className='text'>
          Sai tên đăng nhập hoặc mật khẩu, vui lòng nhập lại{' '}
        </span>
      </div>
    </>
  )
}

export default NormalLoginForm
