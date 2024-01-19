import nfsps from '@/assets/nfs-pro-street.jpg'
import nextjs from '@/assets/nextjs.svg'
import react from '@/assets/react.svg'
import tailwind from '@/assets/tailwind.svg'
import reactHookForm from '@/assets/react-hook-form.svg'
import axios from '@/assets/axios.svg'
import makemymenuFrontend from '@/assets/makemymenu-frontend.mp4'

import Image from 'next/image'
import Link from 'next/link'

export default function ExperienceCard() {
  return <div className='w-full h-full flex flex-col gap-2 y-zinc-scrollbar pr-1'>

    {/* 1º Card */}

    <div className='w-full min-h-[20rem] flex'>
      <div className='w-[10rem] h-full flex flex-col items-center'>
        <p>
          01/2021 - 12/2023
        </p>
        <div className='w-0 h-full border-r'></div>
      </div>
      <div className='relative grow h-full'>
        <Image
          className='size-full object-cover opacity-15 hover:opacity-35 transition-opacity duration-500'
          fill
          src={nfsps}
          alt='NFS Pro Street'
        />
        <div className='absolute z-1 size-full p-4 flex flex-col gap-2'>
          <h1 className='w-full text-2xl'>MakeMyMenu</h1>
          <h2 className='w-full text-xl'>Frontend</h2>
          <p className='w-full'>
            Aplicación para la creación de recetas por IA en base a ingredientes proporcionados por la interfaz y seleccionados por el usuario.
          </p>
          <p className='w-full'>
            Tecnologías usadas:
          </p>
          <div className='w-full flex flex-wrap gap-2'>
            <Link
              href='https://nextjs.org/'
              target='_blank'
              className='max-w-max flex items-center gap-2 px-2 bg-blue-300 font-medium text-zinc-800 border border-2 border-zinc-900 rounded-full ring-2 ring-blue-300'
            >
              <Image
                src={nextjs}
                alt='NEXT.js'
                className='w-[1rem] h-[1rem] inline'
              />
              <p>NEXT.js</p>
            </Link>
            <Link
              href='https://react.dev/'
              target='_blank'
              className='max-w-max flex items-center gap-2 px-2 bg-blue-300 font-medium text-zinc-800 border border-2 border-zinc-900 rounded-full ring-2 ring-blue-300'
            >
              <Image
                src={react}
                alt='React'
                className='w-[1rem] h-[1rem] inline'
              />
              <p>React</p>
            </Link>
            <Link
              href='https://react-hook-form.com/'
              target='_blank'
              className='max-w-max flex items-center gap-2 px-2 bg-blue-300 font-medium text-zinc-800 border border-2 border-zinc-900 rounded-full ring-2 ring-blue-300'
            >
              <Image
                src={reactHookForm}
                alt='React-Hook-Form'
                className='w-[1rem] h-[1rem] inline'
              />
              <p>React-Hook-Form</p>
            </Link>
            <Link
              href='https://tailwindcss.com/'
              target='_blank'
              className='max-w-max flex items-center gap-2 px-2 bg-blue-300 font-medium text-zinc-800 border border-2 border-zinc-900 rounded-full ring-2 ring-blue-300'
            >
              <Image
                src={tailwind}
                alt='Tailwind'
                className='w-[1rem] h-[1rem] inline'
              />
              <p>Tailwind</p>
            </Link>
            <Link
              href='https://axios-http.com/'
              target='_blank'
              className='max-w-max flex items-center gap-2 px-2 bg-blue-300 font-medium text-zinc-800 border border-2 border-zinc-900 rounded-full ring-2 ring-blue-300'
            >
              <Image
                src={axios}
                alt='Axios'
                className='w-[1rem] h-[1rem] inline'
              />
              <p>Axios</p>
            </Link>
          </div>
        </div>
      </div>
    </div>

    {/* 2º Card */}

    <div className='w-full min-h-[20rem] flex'>
      <div className='w-[10rem] h-full flex flex-col items-center'>
        <p>
          01/2021 - 12/2023
        </p>
        <div className='w-0 h-full border-r'></div>
      </div>
      <div className='relative grow'>
        <Image
          className='size-full object-cover opacity-15 hover:opacity-35 transition-opacity duration-500'
          fill
          src={nfsps}
          alt='NFS Pro Street'
        />
        <div className='absolute z-1 size-full p-4 flex flex-col gap-2'>
          <h1 className='w-full text-2xl'>MakeMyMenu</h1>
          <h2 className='w-full text-xl'>Backend</h2>
          <p className='w-full'>
            Aplicación para la creación de usuarios y gestión de sesiones. Desarrollado bajo la arquitectura Clean.
          </p>
          <p className='w-full'>
            Tecnologías usadas:
          </p>
          <div className='w-full flex flex-wrap gap-2'>
            <Link
              href='https://tailwindcss.com/'
              target='_blank' className='max-w-max flex items-center gap-2 px-2 bg-blue-300 font-medium text-zinc-800 border border-2 border-zinc-900 rounded-full ring-2 ring-blue-300'>
              <Image
                src={nextjs}
                alt='NEXT.js'
                className='w-[1rem] h-[1rem] inline'
              />
              <p>Node.js</p>
            </Link>
            <Link
              href='https://tailwindcss.com/'
              target='_blank' className='max-w-max flex items-center gap-2 px-2 bg-blue-300 font-medium text-zinc-800 border border-2 border-zinc-900 rounded-full ring-2 ring-blue-300'>
              <Image
                src={react}
                alt='React'
                className='w-[1rem] h-[1rem] inline'
              />
              <p>Typescript</p>
            </Link>
            <Link
              href='https://tailwindcss.com/'
              target='_blank' className='max-w-max flex items-center gap-2 px-2 bg-blue-300 font-medium text-zinc-800 border border-2 border-zinc-900 rounded-full ring-2 ring-blue-300'>
              <Image
                src={tailwind}
                alt='Tailwind'
                className='w-[1rem] h-[1rem] inline'
              />
              <p>Mongoose</p>
            </Link>
            <Link
              href='https://tailwindcss.com/'
              target='_blank' className='max-w-max flex items-center gap-2 px-2 bg-blue-300 font-medium text-zinc-800 border border-2 border-zinc-900 rounded-full ring-2 ring-blue-300'>
              <Image
                src={tailwind}
                alt='Tailwind'
                className='w-[1rem] h-[1rem] inline'
              />
              <p>MongoDB - Atlas</p>
            </Link>
            <Link
              href='https://tailwindcss.com/'
              target='_blank' className='max-w-max flex items-center gap-2 px-2 bg-blue-300 font-medium text-zinc-800 border border-2 border-zinc-900 rounded-full ring-2 ring-blue-300'>
              <Image
                src={tailwind}
                alt='Tailwind'
                className='w-[1rem] h-[1rem] inline'
              />
              <p>Axios</p>
            </Link>
            <Link
              href='https://tailwindcss.com/'
              target='_blank' className='max-w-max flex items-center gap-2 px-2 bg-blue-300 font-medium text-zinc-800 border border-2 border-zinc-900 rounded-full ring-2 ring-blue-300'>
              <Image
                src={tailwind}
                alt='Tailwind'
                className='w-[1rem] h-[1rem] inline'
              />
              <p>Express</p>
            </Link>
            <Link
              href='https://tailwindcss.com/'
              target='_blank' className='max-w-max flex items-center gap-2 px-2 bg-blue-300 font-medium text-zinc-800 border border-2 border-zinc-900 rounded-full ring-2 ring-blue-300'>
              <Image
                src={tailwind}
                alt='Tailwind'
                className='w-[1rem] h-[1rem] inline'
              />
              <p>JWT</p>
            </Link>
            <Link
              href='https://tailwindcss.com/'
              target='_blank' className='max-w-max flex items-center gap-2 px-2 bg-blue-300 font-medium text-zinc-800 border border-2 border-zinc-900 rounded-full ring-2 ring-blue-300'>
              <Image
                src={tailwind}
                alt='Tailwind'
                className='w-[1rem] h-[1rem] inline'
              />
              <p>Bcrypt</p>
            </Link>
            <Link
              href='https://tailwindcss.com/'
              target='_blank' className='max-w-max flex items-center gap-2 px-2 bg-blue-300 font-medium text-zinc-800 border border-2 border-zinc-900 rounded-full ring-2 ring-blue-300'>
              <Image
                src={tailwind}
                alt='Tailwind'
                className='w-[1rem] h-[1rem] inline'
              />
              <p>dotenv</p>
            </Link>
            <Link
              href='https://tailwindcss.com/'
              target='_blank' className='max-w-max flex items-center gap-2 px-2 bg-blue-300 font-medium text-zinc-800 border border-2 border-zinc-900 rounded-full ring-2 ring-blue-300'>
              <Image
                src={tailwind}
                alt='Tailwind'
                className='w-[1rem] h-[1rem] inline'
              />
              <p>eslint</p>
            </Link>
            <Link
              href='https://tailwindcss.com/'
              target='_blank' className='max-w-max flex items-center gap-2 px-2 bg-blue-300 font-medium text-zinc-800 border border-2 border-zinc-900 rounded-full ring-2 ring-blue-300'>
              <Image
                src={tailwind}
                alt='Tailwind'
                className='w-[1rem] h-[1rem] inline'
              />
              <p>Clean Architecture</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
}