import { useState } from 'react'
import './App.css'
import iconSuccess from '../public/images/icon-list.svg'
import illustration from '../public/images/illustration-sign-up-desktop.svg'

function App() {

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='grid grid-cols-4 max-w-3xl'>
        <div className='col-span-2 flex flex-col justify-center space-y-11 m-7'>
          <h1 className='text-5xl font-bold text-justify'>Stay updated!</h1>
          <p className='text-justify'>Join 60,000+ product managers receiving monthly updates on:</p>
          <div>
            <div className='flex items-center space-x-2 text-sm'>
              <img src={iconSuccess} alt='Imagem de check' />
              <p className='text-justify'>Product discovery and building what matters</p>
            </div>
            <div className='flex items-center space-x-2 text-sm'>
              <img src={iconSuccess} alt='Imagem de check' />
              <p className='text-justify'>Measuring to ensure updates are a success</p>
            </div>
            <div className='flex items-center space-x-2 text-sm'>
              <img src={iconSuccess} alt='Imagem de check' />
              <p className='text-justify'>And much more</p>
            </div>
          </div>
          <form>
            <p className='text-xs'>Email address</p>
            <input type='text' className='border-solid border-2 border-black rounded-md h-10 w-72' />
            <button>Subscribe to monthly newsletter</button>
          </form>
        </div>
        <div className='col-span-2 flex items-center'>
          <img src={illustration} alt='Imagem de fundo' className="h-96 w-64"/>
        </div>
      </div>
    </div>
  )
}

export default App
