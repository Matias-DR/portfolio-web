import { ContainerCard } from '@/pages/components/cards/'
import cards from '@/pages/components/cards/cards'

import { useState } from 'react'

export default function Home() {
  const [index, setIndex] = useState<string>('')
  const [card, setCard] = useState<JSX.Element>(<></>)

  const handleIndexSlection = (index: string) => {
    const Element = cards[index].element
    setIndex(index)
    setCard(<Element />)
  }

  const li = Object.entries(cards).map((entrie) => {
    return <li
      key={'li-' + entrie[0]}
      className='w-max hover:cursor-pointer hover:pl-2 hover:duration-100 hover:scale-[1.05] active:scale-100'
      onClick={() => handleIndexSlection(entrie[0])}
    >
      <p key={'p-' + entrie[0]}>
        {entrie[1].title}{entrie[0] === index ? ' •' : null}
      </p>
    </li>
  })

  return <main className='flex justify-center items-center bg-zinc-950'>
    <div className='relative w-[95%] h-[95%] p-4 flex flex-col sm:flex-row bg-zinc-900 border border-solid border-zinc-500 text-zinc-200'>
      <section className='w-full h-[45%] sm:w-[45%] sm:h-full sm:p-0'>
        <h1 className='text-[2rem] md:text-6xl'>
          Matias Diz Rendani
        </h1>
        <h2 className='text-xl'>
          Desarrollador Backend & Frontend autónomo
        </h2>
        <div className='w-full h-8'></div>
        <ul className='w-full flex flex-col items-end'>
          {li}
        </ul>
      </section>
      <section className='w-full h-[55%] sm:w-[55%] sm:h-full sm:ps-8'>
        <ContainerCard>{card}</ContainerCard>
      </section>
    </div>
  </main>
}
