import emailSVG from '@/assets/email.svg'
import github from '@/assets/github.svg'
import instagram from '@/assets/instagram.svg'
import linkedin from '@/assets/linkedin.svg'
import twitch from '@/assets/twitch.svg'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function ContactCard() {
  const [name, setName] = useState<string | null>(null)
  const [email, setEmail] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)
  const [validate, setValidate] = useState(false)
  const [invalidEmail, setInvalidEmail] = useState(false)

  const handleSubmit = (event: any) => {
    let validation = false
    event.preventDefault()
    if (
      name === '' || name === null ||
      email === '' || email === null ||
      message === '' || message === null
    ) {
      setValidate(true)
      validation = true
    }
    if (email !== null && !/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email)) {
      setInvalidEmail(true)
      validation = true
    }
    if (validation) return
    console.log(event.target[0].value)
    console.log(event.target[1].value)
    console.log(event.target[2].value)
  }

  const handleNameChange = (event: any) => {
    setName(event.target.value)
  }

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value)
    setInvalidEmail(false)
  }

  const handleMessageChange = (event: any) => {
    setMessage(event.target.value)
  }

  return <div className='size-full pr-2 sm:pl-32 flex flex-col overflow-y-auto sm:overflow-hidden'>
    <form
      className='w-full flex flex-col justify-center items-center mb-8'
      noValidate
      onSubmit={handleSubmit}
    >
      <div className='relative w-full flex flex-col mb-6'>
        <label
          className='block text-gray-500 font-bold mb-1 md:mb-0 pr-4'
          htmlFor='full-name'
        >
          Nombre completo
        </label>
        <input
          id='full-name'
          className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
          type='text'
          placeholder='John Doe'
          onChange={handleNameChange}
        />
        <p className={`absolute text-red-500 text-xs italic bottom-[-1.2rem] left-0 ${validate === true && (name === '' || name === null) ? 'inline scale-up-center duration-75' : 'hidden'}`}>Por favor complete este campo.</p>
      </div>
      <div className='relative w-full flex flex-col mb-6'>
        <label
          className='block text-gray-500 font-bold mb-1 md:mb-0 pr-4'
          htmlFor='email'
        >
          Email
        </label>
        <input
          id='email'
          className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
          type='email'
          placeholder='john.doe@domain.com'
          onChange={handleEmailChange}
        />
        <p className={`absolute text-red-500 text-xs italic bottom-[-1.2rem] left-0 ${validate === true && (email === '' || email === null) ? 'inline scale-up-center duration-75' : 'hidden'}`}>Por favor complete este campo.</p>
        <p className={`absolute text-red-500 text-xs italic bottom-[-1.2rem] left-0 ${invalidEmail ? 'inline scale-up-center duration-75' : 'hidden'}`}>Email inválido.</p>
      </div>
      <div className='relative w-full flex flex-col mb-6'>
        <label
          className='block text-gray-500 font-bold mb-1 md:mb-0 pr-4'
          htmlFor='message'
        >
          Mensaje
        </label>
        <textarea
          id='message'
          rows={4}
          className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
          placeholder='Escriba su mensaje aquí...'
          onChange={handleMessageChange}
        />
        <p className={`absolute text-red-500 text-xs italic bottom-[-1.2rem] left-0 ${validate === true && (message === '' || message === null) ? 'inline scale-up-center duration-75' : 'hidden'}`}>Por favor complete este campo.</p>
      </div>
      <div className='w-full flex flex-col items-center'>
        <button
          className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
          type='submit'
        >
          Enviar mensaje
        </button>
      </div>
    </form >
    <div className='w-full grow flex flex-wrap place-content-evenly items-center'>
      <button>
        <Image
          src={emailSVG}
          alt='Email'
          width={40}
          height={40}
        />
      </button>
      <Link
        href='https://github.com/Matias-DR'
        target='_blank'
      >
        <Image
          src={github}
          alt='Github'
          width={40}
          height={40}
        />
      </Link>
      <Link
        href='https://www.instagram.com/_matiasdr/'
        target='_blank'
      >
        <Image
          src={instagram}
          alt='Instagram'
          width={40}
          height={40}
        />
      </Link>
      <Link
        href='https://www.linkedin.com/in/matias-diz-rendani/'
        target='_blank'
      >
        <Image
          src={linkedin}
          alt='LinkedIn'
          width={40}
          height={40}
        />
      </Link>
      <Link
        href='https://www.twitch.tv/matibaratt'
        target='_blank'
      >
        <Image
          src={twitch}
          alt='Twitch'
          width={40}
          height={40}
        />
      </Link>
    </div>
  </div >
}