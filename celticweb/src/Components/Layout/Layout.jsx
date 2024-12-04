import React from 'react'
import {Header} from '../Header/Header'
import {Footer} from "../Footer/Footer";
import './Layout.css'

function Layout({children}) {
  return (
    <>
        <Header/>
        <div className='flex flex-col items-center overflow-auto'>
            {children}
        </div>
        <Footer/>
    </>
  )
}

export {Layout}