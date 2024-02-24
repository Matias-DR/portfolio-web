import freeCodeCamp from '@/assets/certificates/free-code-camp.png'
import excel from '@/assets/certificates/excel.jpg'
import css from '@/assets/certificates/css.jpg'
import html from '@/assets/certificates/html.jpg'

import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

const cardsData: {
  [key: string]: {
    date: string
    src: StaticImageData | null
    text: string
    link: {
      text: string
      url: string
    } | null
  }
} = {
  'Responsive Web Design': {
    date: '06/2023',
    src: freeCodeCamp,
    text: 'Cruso en freeCodeCamp de diseño web responsive',
    link: {
      url: 'https://www.freecodecamp.org/certification/Matias-DR/responsive-web-design',
      text: 'Responsive Web Design',
    },
  },
  'Excel': {
    date: '07/2021',
    src: excel,
    text: 'Cruso en Udemy de Excel',
    link: {
      url: 'https://www.udemy.com/certificate/UC-fa7b52b7-31ed-418e-816f-d1f487e20d00/',
      text: '¡Curso Profesional Excel 2021 - Para Empresas!',
    },
  },
  'CSS': {
    date: '07/2021',
    src: css,
    text: 'Cruso en Udemy de CSS',
    link: {
      url: 'https://www.udemy.com/certificate/UC-4210d126-da5a-44c2-ada6-65f4bf780e12/',
      text: 'Desarrollo web. CSS desde cero. Edición 2020',
    },
  },
  'HTML': {
    date: '07/2021',
    src: html,
    text: 'Cruso en Udemy de HTML',
    link: {
      url: 'https://www.udemy.com/certificate/UC-32458696-76ee-45e1-a236-d5e5723b4b16/',
      text: 'HTML5 desde cero Edición 2020',
    },
  },
  'Universidad': {
    date: '2019 - Actualidad',
    src: null,
    text: 'Estudiante de la carrera Licenciatura Informática. (3er año)',
    link: null,
  },
  'Secundario': {
    date: '2012 - 2018',
    src: null,
    text: 'Tecnicatura Electrónica en la Escuela Industrial n° 6 Albert Thomas La Plata.',
    link: null,
  },
}

const cards: {
  [key: string]: ReactNode
} = {}

Object.entries(cardsData).map(([key, value]) => {
  cards[key] = (
    <div className='w-full flex mb-8'>
      <div className='min-w-[8rem] max-w-[8rem] h-[6rem] flex flex-col items-center'>
        <p className='w-full text-right'>{value.date}:</p>
      </div>
      <div className='relative grow max-h-[6rem] ms-2 border-s bg-zinc-800 hover:scale-[1.02] duration-100'>
        {value.src && (
          <Image
            src={value.src}
            alt={`Certificado de ${key}`}
            className='size-full object-cover opacity-15'
          />
        )}
        <div className='absolute top-0 size-full y-zinc-scrollbar'>
          <p className='w-full ps-1'>
            {value.text}
            {value.link && ': '}
            {value.link && (
              <Link
                href={value.link.url}
                target='_blank'
                className='text-blue-300 hover:underline'
              >
                {value.link.text}
              </Link>
            )}
          </p>
        </div>
      </div>
    </div>
  )
})

export default function EducationCard() {
  return (
    <article className='size-full y-zinc-scrollbar'>{Object.values(cards)}</article>
  )
}
