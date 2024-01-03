import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Words from './components/Words'

function App() {

  return (
    <>
      <div className='xl:bg-[url(./assets/fondoXl.png)] 2xl:bg-[url(./assets/fondo.png)] 'id='padre'>
        <Header/>
        <Main/>   
      </div>
        <Words/>
        <Footer/>
    </>
    
  )
}

export default App
