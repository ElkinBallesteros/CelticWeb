import { useState } from 'react'
import { Home } from './Pages/Home/Home'
import {useRoutes, BrowserRouter} from 'react-router-dom'
import './App.css'
import { Outsorcing } from './Pages/Outsorcing/Outsorcing'
import { Software } from './Pages/Software/Software'
import {Resources} from './Pages/Resources/Resources'

const  AppRoutes = () => {
  let routes = useRoutes([
    { path : "/", element : <Home />},
    { path : "/Outsorcing", element : <Outsorcing />},
    { path : "/Software", element : <Software />},
    // { path : "/Resources", element : <Resources />},
    // { path : "/*", element : <Notfound />},
  ])

  return routes;
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  )
}

export default App
