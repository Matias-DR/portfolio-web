import {
  ContainerCard,
  AboutMeCard,
  ContactCard,
  EducationCard,
  ExperienceCard,
  KnowledgesCard
} from '@/pages/components/cards/'

import { useState } from 'react'

const elements: { [key: string]: { [key: string]: string } } = {
  index: {
    'knowledges': 'Conocimientos',
    'experience': 'Experiencia',
    'education': 'Educación',
    'contact': 'Contacto',
    'about-me': 'Sobre mí',
  }
}

// 'knowledges': 'Conocimientos en chips',
// 'experience': 'Tarjetas de cada experiencia con línea de tiempo en común',
// 'education': 'Educación',
// 'contact': 'Formulario de mail & Mail & Número telefónico & Redes',
// 'about-me': 'Sobre mí',

export default function Home() {
  const [card, setCard] = useState<JSX.Element | string>(elements.index['about-me'])
  const [index, setIndex] = useState<string>('about-me')

  const handleIndexSlection = (index: string) => {
    setIndex(index)
    setCard(elements.index[index])
  }

  const isSelected = (value: string) => value === index ? '• ' : null

  const li = Object.entries(elements.index).map((entrie) => <li
    key={'li-' + entrie[0]}
    className='w-max hover:cursor-pointer hover:pl-2 hover:duration-100'
    onClick={() => handleIndexSlection(entrie[0])}
  >
    <p key={'p-' + entrie[0]}>
      {isSelected(entrie[0])}{entrie[1]}
    </p>
  </li>)

  return <main className='flex justify-center items-center bg-zinc-950'>
    <div className='w-[95%] h-[95%] p-6 flex flex-col sm:flex-row bg-zinc-900 border border-solid border-zinc-500 text-zinc-200'>
      <div className='w-full pb-8 sm:w-4/6 sm:p-0'>
        <h1 className='text-[2rem] md:text-6xl'>
          Matias Diz Rendani
        </h1>
        <h2 className='text-xl'>
          Desarrollador Backend & Frontend autónomo
        </h2>
        <div className='w-full h-8'></div>
        <ul>
          {li}
        </ul>
      </div>
      <div className='grow sm:p-8'>
        <ContainerCard>{card}</ContainerCard>
      </div>
    </div>
  </main>
}
