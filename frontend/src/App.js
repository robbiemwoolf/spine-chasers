import React from 'react'
import { Route } from 'react-router'
import Switch from 'react-switch'
import './App.css'

import Header from './header/Header'
import Home from './home/Home'
import AllBooks from './books/AllBooks'
import AllComics from './comics/AllComics'

function App() {

  return (
      <>
        <Header />
        <div>
          <Switch>
            <Route exact path='/'>
              <Home />
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