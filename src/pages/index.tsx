import { useState } from "react"

const knowledges = <div></div>
const experience = <div></div>
const education = <div></div>
const contact = <div></div>
const about = <p className='absolute bottom-0 right-0 border border-solid border-green-100'>
  Sobre mí...
</p>

export default function Home() {
  const [card, setCard] = useState<JSX.Element>(about)

  return <main className='w-full h-full flex justify-center items-center bg-zinc-950'>
    <div className='relative w-[95%] h-[95%] p-6 bg-zinc-900 border border-solid border-zinc-500 text-zinc-200'>
      <h1 className='text-6xl'>
        Matias Diz Rendani
      </h1>
      <p className=''>
        Desarrollador Backedn & Frontend autónomo
      </p>
      <ul className=''>
        <li
          className=''
          onClick={() => setCard(knowledges)}
        >Conocimientos</li>
        <li
          className=''
          onClick={() => setCard(experience)}
        >Experiencia</li>
        <li
          className=''
          onClick={() => setCard(education)}
        >Educación</li>
        <li
          className=''
          onClick={() => setCard(contact)}
        >Contacto</li>
        <li
          className=''
          onClick={() => setCard(about)}
        >Sobre mí</li>
      </ul>
      {card}
    </div>
  </main>
}
