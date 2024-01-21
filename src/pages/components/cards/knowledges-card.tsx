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
import excel from '@/assets/excel.svg'
import vsCode from '@/assets/vs-code.svg'
import postman from '@/assets/postman.svg'
import sublimeText from '@/assets/sublime-text.svg'
import mysql from '@/assets/mysql.svg'
import code from '@/assets/code.svg'
import java from '@/assets/java.svg'

import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

const chipsData: {
  [ket: string]: {
    [key: string]: {
      link: string,
      src: string,
      text: string
    }
  }
} = {
  'programming-languajes': {
    'typescript': {
      link: 'https://www.typescriptlang.org/',
      src: typescript,
      text: 'TypeScript'
    },
    'python': {
      link: 'https://www.python.org/',
      src: python,
      text: 'Python'
    },
    'java': {
      link: 'https://www.java.com/en/',
      src: java,
      text: 'Java'
    }
  },
  'applications': {
    'vs-code': {
      link: 'https://code.visualstudio.com/',
      src: vsCode,
      text: 'Visual Studio Code'
    },
    'postman': {
      link: 'https://www.postman.com/',
      src: postman,
      text: 'Postman'
    },
    'sublime-text': {
      link: 'https://www.sublimetext.com/',
      src: sublimeText,
      text: 'Sublime Text'
    },
    'excel': {
      link: 'https://www.microsoft.com/es-ar/microsoft-365/excel?ef_id=_k_Cj0KCQiA-62tBhDSARIsAO7twbYn5AQRYQW47qCAvDZTHaUh9O8cbb2PRkszKcct2f55IDuH_tsbdE0aAnxyEALw_wcB_k_&OCID=AIDcmmvw9nbcb3_SEM__k_Cj0KCQiA-62tBhDSARIsAO7twbYn5AQRYQW47qCAvDZTHaUh9O8cbb2PRkszKcct2f55IDuH_tsbdE0aAnxyEALw_wcB_k_&gad_source=1&gclid=Cj0KCQiA-62tBhDSARIsAO7twbYn5AQRYQW47qCAvDZTHaUh9O8cbb2PRkszKcct2f55IDuH_tsbdE0aAnxyEALw_wcB',
      src: excel,
      text: 'Excel'
    }
  },
  'concepts': {
    'object-oriented-programming': {
      link: 'https://es.wikipedia.org/wiki/Programaci%C3%B3n_orientada_a_objetos',
      src: code,
      text: 'OOP'
    },
    'design-patterns': {
      link: 'https://refactoring.guru/es/design-patterns',
      src: code,
      text: 'Design Patterns'
    },
    'refactoring': {
      link: 'https://refactoring.guru/es/refactoring',
      src: code,
      text: 'Refactoring'
    },
    'clean-architecture': {
      link: 'https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html',
      src: cleanArchitecture,
      text: 'Clean Architecture'
    }
  },
  'databases': {
    'mongodb': {
      link: 'https://www.mongodb.com/',
      src: mongodb,
      text: 'MongoDB (NoSQL)'
    },
    'mysql': {
      link: 'https://www.mysql.com/',
      src: mysql,
      text: 'MySQL (SQL)'
    },
  },
  'frameworks&libraries': {
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
    'mongoose': {
      link: 'https://mongoosejs.com/',
      src: mongoose,
      text: 'Mongoose'
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
    'pysimplegui': {
      link: 'https://pysimplegui.readthedocs.io/en/latest/',
      src: pysimplegui,
      text: 'PySimpleGUI'
    }
  }
}

const chips: {
  [key: string]: {
    [key: string]: ReactNode
  }
} = {}

Object.entries(chipsData).map(([superKey, value]) => {
  Object.entries(value).map(([subKey, value]) => {
    chips[superKey] = {
      ...chips[superKey],
      [subKey]: <Link
        href={value.link}
        target='_blank'
        className='max-w-max flex items-center gap-2 px-2 bg-blue-300 font-medium text-zinc-800 border border-2 border-zinc-900 rounded-full ring-2 ring-blue-300 hover:scale-[1.05] active:scale-100'
      >
        <Image
          src={value.src}
          alt={value.text}
          className='w-[1rem] h-[1rem] inline'
        />
        <p>{value.text}</p>
      </Link>
    }
  })
})

export default function KnowledgesCard() {
  return <article className='size-full pe-1 y-zinc-scrollbar'>
    <h2 className='w-full text-center text-xl'>Conceptos</h2>
    <div className='w-full border-t' />
    <div className='w-full p-2 mb-2 flex gap-2 flex-wrap justify-center items-center y-zinc-scrollbar bg-zinc-800 hover:scale-[1.02] duration-100'>
      {Object.values(Object.values(chips['concepts']))}
    </div>
    <h2 className='w-full text-center text-xl'>Lenguajes de programación</h2>
    <div className='w-full border-t' />
    <div className='w-full p-2 mb-2 flex gap-2 flex-wrap justify-center items-center y-zinc-scrollbar bg-zinc-800 hover:scale-[1.02] duration-100'>
      {Object.values(Object.values(chips['programming-languajes']))}
    </div>
    <h2 className='w-full text-center text-xl'>Librerías y Frameworks</h2>
    <div className='w-full border-t' />
    <div className='w-full p-2 mb-2 flex gap-2 flex-wrap justify-center items-center y-zinc-scrollbar bg-zinc-800 hover:scale-[1.02] duration-100'>
      {Object.values(Object.values(chips['frameworks&libraries']))}
      {Object.values(Object.values(chips['frameworks&libraries']))}
      {Object.values(Object.values(chips['frameworks&libraries']))}
    </div>
    <h2 className='w-full text-center text-xl'>Bases de datos</h2>
    <div className='w-full border-t' />
    <div className='w-full p-2 mb-2 flex gap-2 flex-wrap justify-center items-center y-zinc-scrollbar bg-zinc-800 hover:scale-[1.02] duration-100'>
      {Object.values(Object.values(chips['databases']))}
    </div>
    <h2 className='w-full text-center text-xl'>Aplicaciones</h2>
    <div className='w-full border-t' />
    <div className='w-full p-2 mb-2 flex gap-2 flex-wrap justify-center items-center y-zinc-scrollbar bg-zinc-800 hover:scale-[1.02] duration-100'>
      {Object.values(Object.values(chips['applications']))}
    </div>
  </article>
}