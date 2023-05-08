import React, { useState } from 'react'
import { Route } from 'react-router'
import Switch from 'react-switch'
import './App.css'

import Login from './login/Login'
import Header from './header/Header'
import Home from './home/Home'
import User from './user/User'
import AllBooks from './books/AllBooks'
import AllComics from './comics/AllComics'

function App() {
  const [token, setToken] = useState()

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
      <>
        <Header />
        <div>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/users/:userId'>
              <User />
            </Route>
            <Route path='/books'>
              <AllBooks />
            </Route>
            <Route path='/comics'>
              <AllComics />
            </Route>
          </Switch>          
        </div>        
      </>
  )
}

export default App