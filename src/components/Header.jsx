import React, { Component } from 'react'
import logo from './../assets/logoo.png'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <header className='flex justify-between dark:bg-neutral-900 dark:text-white'>
        <img className=' w-40 overflow-hidden ml-4' src={logo} alt="" />
        <div className='flex items-end justify-around mr-4'>
          <div className='flex justify-around mr-20 w-60'>
          <Link to="/">Explorar</Link>
          <Link to="/">Publicar Trabajo</Link>
          </div>
          <div className='flex justify-around w-52'>
          <Link to="/">Registarse</Link>
          <Link to="/">Iniciar Sesión</Link>
          </div>
        </div>
        
        {/* <button className=' bg-slate-200 px-3 py-1 rounded hover:bg-slate-300'>theme</button> */}
      </header>
    )
  }
}
//rafce
