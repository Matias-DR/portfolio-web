import nextjs from '@/assets/nextjs.svg'
import react from '@/assets/react.svg'
import tailwind from '@/assets/tailwind.svg'
import reactHookForm from '@/assets/react-hook-form.svg'
import axios from '@/assets/axios.svg'
import nodejs from '@/assets/nodejs.svg'
import typescript from '@/assets/typescript.svg'
import mongoose from '@/assets/mongoose.svg'
import mongodb from '@/assets/mongodb.svg'
import express from '@/assets/express.svg'
import jwt from '@/assets/jwt.svg'
import bcrypt from '@/assets/bcrypt.svg'
import eslint from '@/assets/eslint.svg'
import cleanArchitecture from '@/assets/clean-architecture.svg'
import python from '@/assets/python.svg'
import pysimplegui from '@/assets/pysimplegui.svg'

import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

const chipsData: {
  [key: string]: {
    link: string,
    src: string,
    text: string
  }
} = {
  'nextjs': {
    link: 'https://nextjs.org/',
    src: nextjs,
    text: 'Next.js'
  },
  'react': {
    link: 'https://reactjs.org/',
    src: react,
    text: 'React'
  },
  'tailwind': {
    link: 'https://tailwindcss.com/',
    src: tailwind,
    text: 'Tailwind'
  },
  'react-hook-form': {
    link: 'https://react-hook-form.com/',
    src: reactHookForm,
    text: 'React Hook Form'
  },
  'axios': {
    link: 'https://axios-http.com/',
    src: axios,
    text: 'Axios'
  },
  'nodejs': {
    link: 'https://nodejs.org/',
    src: nodejs,
    text: 'Node.js'
  },
  'typescript': {
    link: 'https://www.typescriptlang.org/',
    src: typescript,
    text: 'TypeScript'
  },
  'mongoose': {
    link: 'https://mongoosejs.com/',
    src: mongoose,
    text: 'Mongoose'
  },
  'mongodb': {
    link: 'https://www.mongodb.com/',
    src: mongodb,
    text: 'MongoDB'
  },
  'express': {
    link: 'https://expressjs.com/',
    src: express,
    text: 'Express'
  },
  'jwt': {
    link: 'https://jwt.io/',
    src: jwt,
    text: 'JWT'
  },
  'bcrypt': {
    link: 'https://www.npmjs.com/package/bcrypt',
    src: bcrypt,
    text: 'Bcrypt'
  },
  'eslint': {
    link: 'https://eslint.org/',
    src: eslint,
    text: 'ESLint'
  },
  'clean-architecture': {
    link: 'https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html',
    src: cleanArchitecture,
    text: 'Clean Architecture'
  },
  'python': {
    link: 'https://www.python.org/',
    src: python,
    text: 'Python'
  },
  'pysimplegui': {
    link: 'https://pysimplegui.readthedocs.io/en/latest/',
    src: pysimplegui,
    text: 'PySimpleGUI'
  }
}

const chips: {
  [key: string]: ReactNode
} = {}

Object.entries(chipsData).map(([key, value]) => {
  chips[key] = <Link
    href={value.link}
    target='_blank'
    className='max-w-max flex items-center gap-2 px-2 bg-blue-300 font-medium text-zinc-800 border border-2 border-zinc-900 rounded-full ring-2 ring-blue-300'
  >
    <Image
      src={value.src}
      alt={value.text}
      className='w-[1rem] h-[1rem] inline'
    />
    <p>{value.text}</p>
  </Link>
})

export default function KnowledgesCard() {
  return <article className='size-full pe-1 y-zinc-scrollbar'>
    <h1 className='w-full text-center'>Conocimientos en lenguajes de programación.</h1>
    <div className='w-full border-t' />
    <div className='w-full h-[10rem] flex flex-wrap place-content-evenly items-center'>
      {chips['python']}
    </div>
    <h1 className='w-full text-center'>Conocimientos en aplicaciones.</h1>
    <div className='w-full border-t' />
    <div className='w-full h-[10rem] flex flex-wrap place-content-evenly items-center'>
      Excel
    </div>
    <h1 className='w-full text-center'>Conocimientos en conceptos.</h1>
    <div className='w-full border-t' />
    <div className='w-full h-[10rem] flex flex-wrap place-content-evenly items-center'>
      {chips['clean-architecture']}
    </div>
    <h1 className='w-full text-center'>Conocimientos en librerías/frameworks.</h1>
    <div className='w-full border-t' />
    <div className='w-full h-[10rem] flex flex-wrap place-content-evenly items-center'>
      {chips['eslint']}{chips['jwt']}{chips['bcrypt']}{chips['pysimplegui']}
    </div>
  </article>
}