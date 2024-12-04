import React from 'react'
import logo from '/images/LogoCeltic2.png'
import './Footer.css'

function Footer() {
  const today = new Date()
  const year = today.getFullYear();
  return (
    <>
     <div className='flex mt-10 bg-gradient-to-r from-ligth-gray from-5% via-main-gray via-35% to-main-dark-gray to-60%
     items-center text-white p-4'>
     <div className='flex justify-between p-10'>
        <div>
          <img src={logo} className='logo-footer'/>
        </div>
        <div>
          <div>
            <h1>Contact us</h1>
dadsa;fjdlskldsjfflkadskfkj          </div>
        </div>
      </div>
      <div className='flex flex-row justify-center items-center pb-5'>
        <span>
          ©Copyright {year} | Celtic Inc. | All Rights Reserved | Privacy Policy
        </span>
      </div>
     </div>
    </>    
  )
}

export {Footer}