import { useState } from 'react'
import './App.css'
import iconSuccess from '../images/icon-list.svg'
import illustration from '../images/illustration-sign-up-desktop.svg'

function App() {
  const [validation, setValidation] = useState<boolean>(true)
  const [email, setEmail] = useState<string>('')
  const [emailList, setEmailList] = useState<string[]>([])
  const [validationMessage, setValidationMessage] = useState<string>('');

  const handleValidate = () => {
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]{2,3}$/i
    if (email.match(regex)) {
      setValidation(false)
      setEmailList([...emailList, email])
      setValidationMessage('Email is valid. Subscribed!');
      setEmail('')
    } else {
      setValidationMessage('Invalid email format. Please enter a valid email.');
    }
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='grid grid-cols-4 max-w-3xl'>
        <div className='col-span-2 flex flex-col justify-center space-y-6 m-7'>
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
          <div>
            {
              validationMessage && 
              <p className={validation ? 'text-red-500' : 'text-green-500'}
            >
              { validationMessage }
            </p>
            }
            <input
              type='text'
              value={ email }
              onChange={(e) => {
                setEmail(e.target.value)
                setValidation(true)
              }}
              className='border-solid border-black border-2 rounded-md h-10 w-72'/>
            <button
              disabled={ !validation }
              onClick={ handleValidate }
              placeholder='Digite seu e-mail'
              className="mt-5 border text-black  duration-300 relative group cursor-pointer overflow-hidden h-16 w-48 rounded-md bg-laranja p-2 font-extrabold hover:bg-rosa">
              <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150 duration-700 right-12 top-12 bg-yellow-500"></div>
              <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150 duration-700 right-20 -top-6 bg-orange-500"></div>
              <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8 rounded-full group-hover:scale-150 duration-700 right-32 top-6 bg-pink-500"></div>
              <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4 rounded-full group-hover:scale-150 duration-700 right-2 top-12 bg-red-600"></div>
              <p className="z-10 absolute bottom-2 left-2">Se inscreva!</p>
            </button>
          </div>
        </div>
        <div className='col-span-2 flex items-center'>
          <img src={illustration} alt='Imagem de fundo' className="h-96 w-64"/>
        </div>
      </div>
    </div>
  )
}

export default App
