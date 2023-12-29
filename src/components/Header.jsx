import React, { Component } from 'react'
import logo from './../assets/logo.png'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <header className='flex justify-between dark:text-white sticky top-0'>
        <img className=' w-40 overflow-hidden ml-4' src={logo} alt="" />
        <div className='flex items-center justify-around mr-4'>
          <div className='flex justify-around mr-20 w-60'>
            <Link to="/">Explorar</Link>
            <Link to="/">Publicar Trabajo</Link>
          </div>
          <div className='flex justify-around items-center w-52'> 
            <Link to="/">Registarse</Link>
            <button className='btn btn-outline btn-accent btn-sm'>Iniciar Sesión</button> 
          {/* <Link to="/">Iniciar Sesión</Link> */}
          </div>
        </div>
      </header>
    )
  }
}
//rafce
