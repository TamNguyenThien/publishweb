import React from 'react'
import { Modal, Button } from 'antd'
import { useState } from 'react'
export default function Navbar () {
  const [visible, setVisible] = useState(false)
  const showModal = () => {
    setVisible(true)
  };

  const handleOk = e => {
    setVisible(false)
  };

  const handleCancel = e => {
    setVisible(false)

  };
  return (
    <div style={{ height: 100, width: '100%', backgroundColor: '#8aefd7', marginTop: -66 }}>
      <Button style={{ float: 'right', fontSize: 20, backgroundColor: '#ccc', marginTop: 10 }} onClick={() => setVisible(true)}>Create Hotel</Button>
      <h1 style={{ textAlign: 'center', justifyItems: 'center', color: '#e2541c', display: 'flex', justifyContent: 'center', paddingTop: 25 }}>BOOKING HOTEL</h1>
      <Modal
        title='Basic Modal'
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  )
}
