import React, { useState } from 'react'
import {Bars3Icon, XMarkIcon, BookOpenIcon, ChevronDownIcon} from '@heroicons/react/24/solid'
import logo from '/images/LogoCeltic2.png'
import './Header.css'
import { NavLink } from 'react-router-dom';

const Links =[
  {id:1, title:"HOME",link:"/"},
  {id:2, title:"SERVICES",link:"/",
    subItems: [
      { id: "2-1", title: "Outsorcing", link:"/Outsorcing" },
      { id: "2-2", title: "Software Development", link:"/Software" },
      // { id: "2-3", title: "Resources", link:"/Resources" }
    ]
  },
  {id:3, title:"ABOUT",link:"/"},
  {id:4, title:"CONTACT",link:"/"},
];
function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmenuOpen, setisSubmenuOpen] = useState(false)
  const buttonClasses='text-gray-100 font-bold text-sm px-2 py-1 hover:text-gray-10 rouned-lg transition duration-300'

  return (
    <>
     <nav className='w-full fixed justify-between top-0 left-0'>
           <div className='bg-gradient-to-r from-ligth-gray from-5% via-main-gray via-35% to-main-dark-gray to-60% text-white 
           fixed w-full md:flex items-center justify-between bg-white py-4 md:px-10 px-7 navbar-container'>
           <a href='#' className="flex text-2xl cursor-pointer items-center gap-2 l-50 ml-10">
              <img src={logo} className='navbar-logo'/>
            </a>            
            <div onClick={()=>setIsOpen(!isOpen)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    isOpen ? <XMarkIcon/> : <Bars3Icon />
                }
            </div>
            <div className='hidden md:block mt-2'>
                <div className='md-flex pl-9 md:pl-10 ml-10 items-baseline space-x-2'>                
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                  {
                    Links.map((item) => (
                      <li key={item.title} className={buttonClasses}>
                        {(item.subItems !== null && item.subItems?.length >0)?
                        <>
                        <div className='flex'>
                          <button className='flex w-full text-white hover:text-ligth-gray duration-500 mr-2'
                          onClick={() => {
                            setisSubmenuOpen((prev)=> !prev)
                            console.log(isSubmenuOpen);
                          }}>
                            {item.title}
                            {!isSubmenuOpen? <ChevronDownIcon height={20} className='text-white'/>:<ChevronDownIcon height={20} className='text-white'/>}
                          </button>                        
                          
                        </div>
                        {isSubmenuOpen && 
                        <ul className='absolute top-10 items-start p-4 bg-main-dark-gray opacity-3 mt-6 rounded-lg'>
                            {item.subItems.map((subItem)=>(
                              <li className='pt-2'>
                                <NavLink to={subItem.link} className='text-white hover:text-ligth-gray duration-500 -ml-4 pl-3'>
                                  {subItem.title}
                                </NavLink>
                              </li>
                            ))}
                        </ul>}
                        </>
                        :<a href={item.link} className='text-white hover:text-ligth-gray duration-500'>{item.title}</a>}
                      </li>))
                  }
                  </ul>
                </div>
              </div>
            {
              isOpen && (
              <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-14' : 'top-[-490px]'}
              bg-gradient-to-r from-ligth-gray from-25% via-main-gray via-35% to-main-dark-gray to-40% text-white pt-4`}>
                {item.subItems.map((subItem)=>(
                  <li className={buttonClasses}>
                    <NavLink to={subItem.link} className='text-white hover:text-ligth-gray duration-500 -ml-4'>
                      {subItem.title}
                    </NavLink>
                  </li>
                ))}
                  {
                      Links.map((item) => (
                      <li className={buttonClasses}>
                          <a href={item.link} className='text-white hover:text-blue-400 duration-500'>{item.title}</a>
                      </li>))
                  }
              </ul>)
            }
           </div>
        </nav>
    </>
  )
}

export {Header}