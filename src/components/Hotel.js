import React from 'react'
import { Link } from 'react-router-dom'
import defaultImag from '../images/room-1.jpeg'
import { Button } from 'antd'
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
export default function Hotel (props) {
  const {hotels} = props
  return (
    // <div style={{ width: 400, height: 500, backgroundColor: '#61dafb', float: 'left', marginRight: 10, marginTop: 10 }}>
    //   <h2 style={{textAlign: 'center'}}>{hotels ? hotels.name : null}</h2>
    //   <p>{hotels ? hotels.description : null}</p>
    //   <p>{hotels ? hotels.phone : null}</p>

    // </div>
    <article style={{ width: 440, height: 400, backgroundColor: '', float: 'left', marginRight: 10, marginTop: 10, marginLeft: 10 }} className='room'>
      <div className='img-container'>
        <img src={defaultImag} alt='single room' />
        <div className='price-top'>
          <h6>{hotels ? hotels.name : null}</h6>
        </div>
        <Link to={`/home`} className='btn-primary room-link'>
          Dat phong
        </Link>
      </div>
      <p className='room-info'>{hotels ? hotels.description : null}</p>
      <p className='room-info'>Phone :{hotels ? hotels.phone : null}</p>
      <Button> <DeleteOutlined /></Button>
    </article>
    
  )
}
