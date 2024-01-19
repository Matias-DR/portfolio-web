import email from '@/assets/email.svg'
import github from '@/assets/github.svg'
import instagram from '@/assets/instagram.svg'
import linkedin from '@/assets/linkedin.svg'
import twitch from '@/assets/twitch.svg'

import Image from 'next/image'

export default function ContactCard() {
  return <div className='size-full pr-2 sm:pl-32 flex flex-col overflow-y-auto sm:overflow-hidden'>
    <form className='w-full flex flex-col justify-center items-center mb-8'>
      <div className='w-full flex flex-col mb-6'>
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
        />
      </div>
      <div className='w-full flex flex-col mb-6'>
        <label
          className='block text-gray-500 font-bold mb-1 md:mb-0 pr-4'
          htmlFor='email'
        >
          Email
        </label>
        <input
          id='email'
          className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
          type='password'
          placeholder='john.doe@domain.com'
        />
      </div>
      <div className='w-full flex flex-col mb-6'>
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
        />
      </div>
      <div className='w-full flex flex-col items-center'>
        <button
          className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
          type='button'
        // type='submit'
        >
          Enviar mensaje
        </button>
      </div>
    </form>
    <div className='w-full grow flex flex-wrap place-content-evenly items-center'>
      <button>
        <Image
          src={email}
          alt='Email'
          width={40}
          height={40}
        />
      </button>
      <button>
        <Image
          src={github}
          alt='Github'
          width={40}
          height={40}
        />
      </button>
      <button>
        <Image
          src={instagram}
          alt='Instagram'
          width={40}
          height={40}
        />
      </button>
      <button>
        <Image
          src={linkedin}
          alt='LinkedIn'
          width={40}
          height={40}
        />
      </button>
      <button>
        <Image
          src={twitch}
          alt='Twitch'
          width={40}
          height={40}
        />
      </button>
    </div>
  </div>
}