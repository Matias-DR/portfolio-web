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
import ey from '@/assets/ernst-&-young-ey.svg'
import papelerabasto from '@/assets/papelerabasto.png'
import bialet from '@/assets/bialet.png'
import ethernet from '@/assets/ethernet.jpg'
import django from '@/assets/django.svg'

import Image from 'next/image'
import Link from 'next/link'

export default function ExperienceCard() {
  const newLocal = 'w-full min-h-[20rem] flex flex'
  return (
    <article className='size-full flex flex-col gap-2 y-zinc-scrollbar'>
      {/* ToDo Front-End Card */}

      <div className='w-full min-h-[20rem] flex'>
        <div className='w-[10rem] h-full flex flex-col items-center'>
          <p>02/2024 - 02/2024</p>
          <div className='w-0 h-full border-r' />
        </div>
        <Link
          href='https://mdr-todo-frontend.vercel.app/'
          target='_blank'
          className='relative grow h-full hover:cursor-pointer hover:scale-[1.02] duration-100'
        >
          <iframe
            className='absolute size-full opacity-10 object-cover'
            src='https://www.youtube.com/embed/JEOoG25qQac?si=_jzL1uqk_wlFRBSC&amp;controls=0&mute=1&autoplay=1&loop=1&playlist=JEOoG25qQac&disablekb=1&showinfo=0'
            title='ToDo-Frontend'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;'
          />
          <div className='absolute z-1 size-full p-4 flex flex-col gap-2'>
            <h1 className='w-full text-2xl'>ToDo</h1>
            <h2 className='w-full text-xl'>Frontend</h2>
            <p className='w-full'>
              Aplicación para la creación de tareas compuestas por un título, una
              descripción y estado (completo/incompleto) a través de cuentas de
              usuario.{' '}
              <Link
                href='https://github.com/Matias-DR/mdr-todo-challenge-nextjs'
                target='_blank'
                className='font-bold text-blue-500'
              >
                Git
              </Link>
            </p>
            <p className='w-full'>Tecnologías usadas:</p>
            <div className='w-full flex flex-wrap gap-2'>
              <Link
                href='https://nextjs.org/'
                target='_blank'
                className='max-w-max flex items-center gap-2 px-2 bg-blue-300 font-medium text-zinc-800 border border-zinc-900 rounded-full ring-2 ring-blue-300 hover:scale-[1.05] active:scale-100'
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
                className='max-w-max flex items-center gap-2 px-2 bg-blue-300 font-medium text-zinc-800 border border-zinc-900 rounded-full ring-2 ring-blue-300 hover:scale-[1.05] active:scale-100'
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
                className='max-w-max flex items-center gap-2 px-2 bg-blue-300 font-medium text-zinc-800 border-2 border-zinc-900 rounded-full ring-2 ring-blue-300 hover:scale-[1.05] active:scale-100'
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
                className='max-w-max flex items-center gap-2 px-2 bg-blue-300 font-medium text-zinc-800 border-2 border-zinc-900 rounded-full ring-2 ring-blue-300 hover:scale-[1.05] active:scale-100'
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
                className='max-w-max flex items-center gap-2 px-2 bg-blue-300 font-medium text-zinc-800 border-2 border-zinc-900 rounded-full ring-2 ring-blue-300 hover:scale-[1.05] active:scale-100'
              >
                <Image
                  src={axios}
                  alt='Axios'
                  className='w-[3rem] h-[1rem] inline'
                />
                <p>Axios</p>
              </Link>
            </div>
          </div>
        </Link>
      </div>

      {/* ToDo Back-End Card */}

      <div className='w-full min-h-[20rem] flex'>
        <div className='w-[10rem] h-full flex flex-col items-center'>
          <p>02/2024 - 02/2024</p>
          <div className='w-0 h-full border-r' />
        </div>
        <Link
          href='https://github.com/Matias-DR/mdr-todo-backend'
          target='_blank'
          className='relative grow h-full hover:cursor-pointer hover:scale-[1.02] duration-100'
        >
          <iframe
            className='absolute size-full opacity-10 object-cover'
            src='https://www.youtube.com/embed/JEOoG25qQac?si=_jzL1uqk_wlFRBSC&amp;controls=0&mute=1&autoplay=1&loop=1&playlist=JEOoG25qQac&disablekb=1&showinfo=0'
            title='ToDo-Frontend'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;'
          />
          <div className='absolute z-1 size-full p-4 flex flex-col gap-2'>
            <h1 className='w-full text-2xl'>ToDo</h1>
            <h2 className='w-full text-xl'>Backend</h2>
            <p className='w-full'>
              Aplicación que permite realizar operaciones CRUD referentes a usuarios y
              tareas. También permite la autenticación de usuarios y mantenimiento de
              sesiones.
            </p>
            <p className='w-full'>Tecnologías usadas:</p>
            <div className='w-full flex flex-wrap gap-2'>
              <Link
                href='https://www.python.org/'
                target='_blank'
                className='max-w-max flex items-center gap-2 px-2 bg-blue-300 font-medium text-zinc-800 border border-zinc-900 rounded-full ring-2 ring-blue-300 hover:scale-[1.05] active:scale-100'
              >
                <Image
                  src={python}
                  alt='Python'
                  className='w-[1rem] h-[1rem] inline'
                />
                <p>Python</p>
              </Link>
              <Link
                href='https://www.djangoproject.com/'
                target='_blank'
                className='max-w-max flex items-center gap-2 px-2 bg-blue-300 font-medium text-zinc-800 border border-zinc-900 rounded-full ring-2 ring-blue-300 hover:scale-[1.05] active:scale-100'
              >
                <Image
                  src={django}
                  alt='DJango'
                  className='w-[1rem] h-[1rem] inline'
                />
                <p>DJango</p>
              </Link>
              <Link
                href='https://www.django-rest-framework.org/'
                target='_blank'
                className='max-w-max flex items-center gap-2 px-2 bg-blue-300 font-medium text-zinc-800 border-2 border-zinc-900 rounded-full ring-2 ring-blue-300 hover:scale-[1.05] active:scale-100'
              >
                <p>rest_framework</p>
              </Link>
              <Link
                href='https://django-rest-framework-simplejwt.readthedocs.io/en/latest/'
                target='_blank'
                className='max-w-max flex items-center gap-2 px-2 bg-blue-300 font-medium text-zinc-800 border-2 border-zinc-900 rounded-full ring-2 ring-blue-300 hover:scale-[1.05] active:scale-100'
              >
                <Image
                  src={jwt}
                  alt='Simple JWT'
                  className='w-[1rem] h-[1rem] inline'
                />
                <p>Simple JWT</p>
              </Link>
              <Link
                href='https://drf-spectacular.readthedocs.io/en/latest/'
                target='_blank'
                className='max-w-max flex items-center gap-2 px-2 bg-blue-300 font-medium text-zinc-800 border-2 border-zinc-900 rounded-full ring-2 ring-blue-300 hover:scale-[1.05] active:scale-100'
              >
                <p>drf-spectacular</p>
              </Link>
            </div>
          </div>
        </Link>
      </div>

      {/* 1º Card */}

      <div className='w-full min-h-[20rem] flex'>
        <div className='w-[10rem] h-full flex flex-col items-center'>
          <p>12/2023 - 01/2024</p>
          <div className='w-0 h-full border-r' />
        </div>
        <Link
          href='https://github.com/Matias-DR/makemymenu-frontend'
          target='_blank'
          className='relative grow h-full hover:cursor-pointer hover:scale-[1.02] duration-100'
        >
          <iframe
            className='absolute size-full opacity-10 object-cover'
            src='https://www.youtube.com/embed/JL3xnqurkrc?si=uzxDEiGYL42fRuf4&amp;controls=0&mute=1&autoplay=1&loop=1&playlist=JL3xnqurkrc&disablekb=1&showinfo=0'
            title='MakeMyMenu-Frontend'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;'
          />
          <div className='absolute z-1 size-full p-4 flex flex-col gap-2'>
            <h1 className='w-full text-2xl'>MakeMyMenu</h1>
            <h2 className='w-full text-xl'>Frontend</h2>
            <p className='w-full'>
              Aplicación para la creación de recetas por IA en base a ingredientes
              proporcionados por la interfaz y seleccionados por el usuario.
            </p>
            <p className='w-full'>Tecnologías usadas:</p>
            <div className='w-full flex flex-wrap gap-2'>
              <Link
                href='https://nextjs.org/'
                target='_blank'
                className='max-w-max flex items-center gap-2 px-2 bg-blue-300 font-medium text-zinc-800 border border-zinc-900 rounded-full ring-2 ring-blue-300 hover:scale-[1.05] active:scale-100'
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
                className='max-w-max flex items-center gap-2 px-2 bg-blue-300 font-medium text-zinc-800 border border-zinc-900 rounded-full ring-2 ring-blue-300 hover:scale-[1.05] active:scale-100'
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
                className='max-w-max flex items-center gap-2 px-2 bg-blue-300 font-medium text-zinc-800 border-2 border-zinc-900 rounded-full ring-2 ring-blue-300 hover:scale-[1.05] active:scale-100'
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
                className='max-w-max flex items-center gap-2 px-2 bg-blue-300 font-medium text-zinc-800 border-2 border-zinc-900 rounded-full ring-2 ring-blue-300 hover:scale-[1.05] active:scale-100'
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
                className='max-w-max flex items-center gap-2 px-2 bg-blue-300 font-medium text-zinc-800 border-2 border-zinc-900 rounded-full ring-2 ring-blue-300 hover:scale-[1.05] active:scale-100'
              >
                <Image
                  src={axios}
                  alt='Axios'
                  className='w-[3rem] h-[1rem] inline'
                />
                <p>Axios</p>
              </Link>
            </div>
          </div>
        </Link>
      </div>

      {/* 2º Card */}

      <div className='w-full min-h-[20rem] flex'>
        <div className='w-[10rem] h-full flex flex-col items-center'>
          <p>10/2023 - 01/2024</p>
          <div className='w-0 h-full border-r' />
        </div>
        <Link
          href='https://github.com/Matias-DR/makemymenu-backend'
          target='_blank'
          className='relative grow h-full hover:cursor-pointer hover:scale-[1.02] duration-100'
        >
          <iframe
            className='absolute size-full opacity-10 object-cover'
            src='https://www.youtube.com/embed/hkk7BekV3_o?si=GLVRzfM0jmVNv2vx&amp;controls=0&mute=1&autoplay=1&loop=1&playlist=hkk7BekV3_o&disablekb=1&showinfo=0'
            title='MakeMyMennu-Backend'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          />
          <div className='absolute z-1 size-full p-4 flex flex-col gap-2'>
            <h1 className='w-full text-2xl'>MakeMyMenu</h1>
            <h2 className='w-full text-xl'>Backend</h2>
            <p className='w-full'>
              Aplicación para la creación de usuarios y gestión de sesiones.
              Desarrollado bajo la arquitectura Clean.
            </p>
            <p className='w-full'>Tecnologías usadas:</p>
            <div className='w-full flex flex-wrap gap-2'>
              <Link
                href='https://nodejs.org/en'
                target='_blank'
                className='max-w-max flex items-center gap-2 px-2 bg-blue-300 font-medium text-zinc-800 border-2 border-zinc-900 rounded-full ring-2 ring-blue-300 hover:scale-[1.05] active:scale-100'
              >
                <Image
                  src={nodejs}
                  alt='Node.js'
                  className='w-[1rem] h-[1rem] inline'
                />
                <p>Node.js</p>
              </Link>
              <Link
                href='https://www.typescriptlang.org/'
                target='_blank'
                className='max-w-max flex items-center gap-2 px-2 bg-blue-300 font-medium text-zinc-800 border-2 border-zinc-900 rounded-full ring-2 ring-blue-300 hover:scale-[1.05] active:scale-100'
              >
                <Image
                  src={typescript}
                  alt='Typescript'
                  className='w-[1rem] h-[1rem] inline'
                />
                <p>Typescript</p>
              </Link>
              <Link
                href='https://mongoosejs.com/'
                target='_blank'
                className='max-w-max flex items-center gap-2 px-2 bg-blue-300 font-medium text-zinc-800 border-2 border-zinc-900 rounded-full ring-2 ring-blue-300 hover:scale-[1.05] active:scale-100'
              >
                <Image
                  src={mongoose}
                  alt='Mongoose'
                  className='w-[1rem] h-[1rem] inline'
                />
                <p>Mongoose</p>
              </Link>
              <Link
                href='https://www.mongodb.com/es'
                target='_blank'
                className='max-w-max flex items-center gap-2 px-2 bg-blue-300 font-medium text-zinc-800 border-2 border-zinc-900 rounded-full ring-2 ring-blue-300 hover:scale-[1.05] active:scale-100'
              >
                <Image
                  src={mongodb}
                  alt='MongoDB - Atlas'
                  className='w-[1rem] h-[1rem] inline'
                />
                <p>MongoDB - Atlas</p>
              </Link>
              <Link
                href='https://axios-http.com/'
                target='_blank'
                className='max-w-max flex items-center gap-2 px-2 bg-blue-300 font-medium text-zinc-800 border-2 border-zinc-900 rounded-full ring-2 ring-blue-300 hover:scale-[1.05] active:scale-100'
              >
                <Image
                  src={axios}
                  alt='Axios'
                  className='w-[3rem] h-[1rem] inline'
                />
                <p>Axios</p>
              </Link>
              <Link
                href='https://expressjs.com/'
                target='_blank'
                className='max-w-max flex items-center gap-2 px-2 bg-blue-300 font-medium text-zinc-800 border-2 border-zinc-900 rounded-full ring-2 ring-blue-300 hover:scale-[1.05] active:scale-100'
              >
                <Image
                  src={express}
                  alt='Express'
                  className='w-[1rem] h-[1rem] inline'
                />
                <p>Express</p>
              </Link>
              <Link
                href='https://jwt.io/'
                target='_blank'
                className='max-w-max flex items-center gap-2 px-2 bg-blue-300 font-medium text-zinc-800 border-2 border-zinc-900 rounded-full ring-2 ring-blue-300 hover:scale-[1.05] active:scale-100'
              >
                <Image
                  src={jwt}
                  alt='JWT'
                  className='w-[1rem] h-[1rem] inline'
                />
                <p>JWT</p>
              </Link>
              <Link
                href='https://www.npmjs.com/package/bcrypt'
                target='_blank'
                className='max-w-max flex items-center gap-2 px-2 bg-blue-300 font-medium text-zinc-800 border-2 border-zinc-900 rounded-full ring-2 ring-blue-300 hover:scale-[1.05] active:scale-100'
              >
                <Image
                  src={bcrypt}
                  alt='Bcrypt'
                  className='w-[1rem] h-[1rem] inline'
                />
                <p>Bcrypt</p>
              </Link>
              <Link
                href='https://www.npmjs.com/package/dotenv'
                target='_blank'
                className='max-w-max flex items-center gap-2 px-2 bg-blue-300 font-medium text-zinc-800 border-2 border-zinc-900 rounded-full ring-2 ring-blue-300 hover:scale-[1.05] active:scale-100'
              >
                <p>dotenv</p>
              </Link>
              <Link
                href='https://eslint.org/'
                target='_blank'
                className='max-w-max flex items-center gap-2 px-2 bg-blue-300 font-medium text-zinc-800 border-2 border-zinc-900 rounded-full ring-2 ring-blue-300 hover:scale-[1.05] active:scale-100'
              >
                <Image
                  src={eslint}
                  alt='eslint'
                  className='w-[1rem] h-[1rem] inline'
                />
                <p>eslint</p>
              </Link>
              <Link
                href='https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html'
                target='_blank'
                className='max-w-max flex items-center gap-2 px-2 bg-blue-300 font-medium text-zinc-800 border-2 border-zinc-900 rounded-full ring-2 ring-blue-300 hover:scale-[1.05] active:scale-100'
              >
                <Image
                  src={cleanArchitecture}
                  alt='Clean Architecture'
                  className='w-[1rem] h-[1rem] inline'
                />
                <p>Clean Architecture</p>
              </Link>
            </div>
          </div>
        </Link>
      </div>

      {/* 3º Card */}

      <div className={newLocal}>
        <div className='w-[10rem] h-full flex flex-col items-center'>
          <p>08/2021 - 12/2023</p>
          <div className='w-0 h-full border-r' />
        </div>
        <div className='relative grow hover:scale-[1.02] duration-100'>
          <Image
            src={ey}
            alt='Ernst & Young'
            className='absolute size-full opacity-10 content-cover'
          />
          <div className='absolute z-1 size-full p-4 flex flex-col gap-2'>
            <h1 className='w-full text-2xl'>EY - Ernst & Young</h1>
            <h2 className='w-full text-xl'>Auditoría TI (interna SOX)</h2>
            <ul className='list-disc'>
              <li>
                Relevamiento y análisis de procesos genéricos (ej. gestión de
                usuarios, gestión de cambios a programa).
              </li>
              <li>
                Identificación de riesgos y controles de mitigación (ej. segregación
                de funciones, validación de cambios a programa, validación de{' '}
                <Link
                  href='https://es.wikipedia.org/wiki/CRUD'
                  className='underline'
                  target='_blank'
                >
                  ABM
                </Link>{' '}
                de usuarios).
              </li>
              <li>
                Revisión, análisis y documentación de la ejecución de controles.
              </li>
              <li>Presentación y comunicación de resultados.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 4º Card */}

      <div className='w-full min-h-[20rem] flex'>
        <div className='w-[10rem] h-full flex flex-col items-center'>
          <p>08/2020 - 02/2021</p>
          <div className='w-0 h-full border-r' />
        </div>
        <div className='relative grow hover:scale-[1.02] duration-100'>
          <Image
            src={ey}
            alt='Ernst & Young'
            className='absolute size-full opacity-10 content-cover'
          />
          <div className='absolute z-1 size-full p-4 flex flex-col gap-2'>
            <h1 className='w-full text-2xl'>EY - Ernst & Young</h1>
            <h2 className='w-full text-xl'>Auditoría TI (externa) - Intrern</h2>
            <ul className='list-disc'>
              <li>
                Introducción a las metodologías de EY para la participación en
                proyectos de auditoría
              </li>
              <li>
                Revisión, análisis y documentación de la ejecución de controles.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 5º Card */}

      <div className='w-full min-h-[20rem] flex'>
        <div className='w-[10rem] h-full flex flex-col items-center'>
          <p>09/2020 - 02/2021</p>
          <div className='w-0 h-full border-r' />
        </div>
        <Link
          href='https://github.com/Matias-DR/papelerabastonew'
          target='_blank'
          className='relative grow h-full hover:cursor-pointer hover:scale-[1.02] duration-100'
        >
          <Image
            src={papelerabasto}
            alt='Papelera Abasto'
            className='absolute size-full opacity-10 object-cover'
          />
          <div className='absolute z-1 size-full p-4 flex flex-col gap-2'>
            <h1 className='w-full text-2xl'>Autónomo</h1>
            <h2 className='w-full text-xl'>Aplicación de escritorio</h2>
            <p className='w-full'>
              Desarrollo de aplicación para control de stock, compra y venta.
            </p>
            <p className='w-full'>Tecnologías usadas:</p>
            <div className='w-full flex flex-wrap gap-2'>
              <Link
                href='https://www.python.org/'
                target='_blank'
                className='max-w-max flex items-center gap-2 px-2 bg-blue-300 font-medium text-zinc-800 border-2 border-zinc-900 rounded-full ring-2 ring-blue-300 hover:scale-[1.05] active:scale-100'
              >
                <Image
                  src={python}
                  alt='Python'
                  className='w-[1rem] h-[1rem] inline'
                />
                <p>Python</p>
              </Link>
              <Link
                href='https://www.pysimplegui.org/en/latest/'
                target='_blank'
                className='max-w-max flex items-center gap-2 px-2 bg-blue-300 font-medium text-zinc-800 border-2 border-zinc-900 rounded-full ring-2 ring-blue-300 hover:scale-[1.05] active:scale-100'
              >
                <Image
                  src={pysimplegui}
                  alt='PySimpleGUI'
                  className='w-[2.5rem] h-[1rem] inline'
                />
                <p>PySimpleGUI</p>
              </Link>
            </div>
          </div>
        </Link>
      </div>

      {/* 6º Card */}

      <div className='w-full min-h-[20rem] flex'>
        <div className='w-[10rem] h-full flex flex-col items-center'>
          <p>06/2020 - 12/2020</p>
          <div className='w-0 h-full border-r' />
        </div>
        <Link
          href='https://github.com/Matias-DR/Bialet'
          target='_blank'
          className='relative grow h-full hover:cursor-pointer hover:scale-[1.02] duration-100'
        >
          <Image
            src={bialet}
            alt='Bialet'
            className='absolute size-full opacity-10 content-cover'
          />
          <div className='absolute z-1 size-full p-4 flex flex-col gap-2'>
            <h1 className='w-full text-2xl'>Autónomo</h1>
            <h2 className='w-full text-xl'>Aplicación de escritorio</h2>
            <p className='w-full'>
              Desarrollo de aplicación para registro de tareas laborales.
            </p>
            <p className='w-full'>Tecnologías usadas:</p>
            <div className='w-full flex flex-wrap gap-2'>
              <Link
                href='https://www.python.org/'
                target='_blank'
                className='max-w-max flex items-center gap-2 px-2 bg-blue-300 font-medium text-zinc-800 border-2 border-zinc-900 rounded-full ring-2 ring-blue-300 hover:scale-[1.05] active:scale-100'
              >
                <Image
                  src={python}
                  alt='Python'
                  className='w-[1rem] h-[1rem] inline'
                />
                <p>Python</p>
              </Link>
              <Link
                href='https://www.pysimplegui.org/en/latest/'
                target='_blank'
                className='max-w-max flex items-center gap-2 px-2 bg-blue-300 font-medium text-zinc-800 border-2 border-zinc-900 rounded-full ring-2 ring-blue-300 hover:scale-[1.05] active:scale-100'
              >
                <Image
                  src={pysimplegui}
                  alt='PySimpleGUI'
                  className='w-[2.5rem] h-[1rem] inline'
                />
                <p>PySimpleGUI</p>
              </Link>
            </div>
          </div>
        </Link>
      </div>

      {/* 7º Card */}

      <div className='w-full min-h-[20rem] flex'>
        <div className='w-[10rem] h-full flex flex-col items-center'>
          <p>2017 - Eventual</p>
          <div className='w-0 h-full border-r' />
        </div>
        <div className='relative grow hover:scale-[1.02] duration-100'>
          <Image
            src={ethernet}
            alt='Ethernet'
            className='absolute size-full opacity-10 content-cover'
          />
          <div className='absolute z-1 size-full p-4 flex flex-col gap-2'>
            <h1 className='w-full text-2xl'>Autónomo</h1>
            <h2 className='w-full text-xl'>Tecnicatura Electrónica</h2>
            <p className='w-full'>
              Mantenimiento e instalación de redes LAN, Ethernet y a internet en
              edificaciones con oficinas.
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}
