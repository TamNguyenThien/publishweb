import React, { useState } from 'react'
import './App.css'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { Route, Switch, BrowserRouter, Router } from 'react-router-dom'
import Users from './User'
import Hotel from './components/Hotel'
import Navbar from './components/Navbar'
import Login from './components/Login'
const client = new ApolloClient({
  uri: 'http://localhost:11011/graphql'
})
function App () {
  const [login, setLogin] = useState(false)
  const callback1 = (login) => {
    console.log(login, 'it')
    setLogin(true)
  }
  return (
    <ApolloProvider client={client}>

      { login === false ? (<Login login1={callback1} />) : (
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Users} />
            <Route exact path='/rooms' component={Hotel} />
          </Switch>
        </BrowserRouter>
      )}
      {/* <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Users} />
          <Route exact path='/Hotels' component={Room} />
        </Switch>
      </BrowserRouter> */}
    </ApolloProvider>
  )
}

export default App
