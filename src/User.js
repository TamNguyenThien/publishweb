// import React from 'react'
// import { Query } from 'react-apollo';
import gql from 'graphql-tag'
import React, { useState } from 'react'
import { useQuery } from 'react-apollo'
import Hotel from './components/Hotel'
import { Modal, Button } from 'antd'

export default function Users () {
  const GET_USERS = gql`query
  {
    users {
      _id
      email
      password
    }
  }
`
  const GET_HOTELS = gql`query
{
  hotels {
    _id
    name
    description
    phone
    avatar
    photos
  }
}
`
  const { loading, error, data } = useQuery(GET_USERS)
  const { data: hotels } = useQuery(GET_HOTELS)
  const [visible, setVisible] = useState(false)

  return (
    <div>
      {/* {data ? data.users.map(({ _id, email, password }) => (
        <div key={_id}>
          <p>{`${email}} and ${password}`}</p>
        </div>
      )) : <div>not data</div>} */}
      {hotels ? hotels.hotels.map((hotel, key) => (
        <Hotel key={hotel._id} hotels={hotel || null} />
      )) : <div>not data</div>}
    </div>
  )
}
