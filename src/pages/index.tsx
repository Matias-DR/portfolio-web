import { ContainerCard } from '@/pages/components/cards/'
import cards from '@/pages/components/cards/cards'

import { useState } from 'react'

export default function Home() {
  const [index, setIndex] = useState<string>('about-me')
  const [card, setCard] = useState<JSX.Element>(<></>)

  const handleIndexSlection = (index: string) => {
    const Element = cards[index].element
    setIndex(index)
    setCard(<Element />)
  }

  const li = Object.entries(cards).map((entrie) => {
    return <li
      key={'li-' + entrie[0]}
      className='w-max hover:cursor-pointer hover:pl-2 hover:duration-100'
      onClick={() => handleIndexSlection(entrie[0])}
    >
      <p key={'p-' + entrie[0]}>
        {entrie[0] === index ? '• ' : null}{entrie[1].title}
      </p>
    </li>
  })

  return <main className='flex justify-center items-center bg-zinc-950'>
    <div className='w-[95%] h-[95%] p-6 flex flex-col sm:flex-row bg-zinc-900 border border-solid border-zinc-500 text-zinc-200'>
      <div className='w-full h-[45%] sm:w-[65%] sm:h-full sm:p-0'>
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
      <div className='w-full h-[55%] sm:w-[35%] sm:h-full sm:p-8'>
        <ContainerCard>{card}</ContainerCard>
      </div>
    </div>
  </main>
}
