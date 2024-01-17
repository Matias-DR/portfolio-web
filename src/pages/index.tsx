import { useState } from "react"

const styles = {
  container: {
    'main': 'w-full h-full flex justify-center items-center bg-zinc-950',
    'main-container': 'w-[95%] h-[95%] p-6 flex flex-col sm:flex-row bg-zinc-900 border border-solid border-zinc-500 text-zinc-200',
    'pane': 'w-full pb-8 sm:w-4/6 sm:p-0',
    'card': 'grow p-8'
  },
  text: {
    'title': 'text-[2rem] md:text-6xl',
    'subtitle': 'text-xl'
  },
  index: {
    'li': 'w-max hover:cursor-pointer hover:pl-2 hover:duration-100'
  },
  misc: {
    separator: 'w-full h-8'
  }
}

const elements = {
  index: {
    'knowledges': 'Conocimientos',
    'experience': 'Experiencia',
    'education': 'Educación',
    'contact': 'Contacto',
    'about-me': 'Sobre mí',
  }
}

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
    className={styles.index['li']}
    onClick={() => handleIndexSlection(entrie[0])}
  >
    <p key={'p-' + entrie[0]}>
      {isSelected(entrie[0])}{entrie[1]}
    </p>
  </li>)

  return <main className={styles.container['main']}>
    <div className={styles.container['main-container']}>
      <div className={styles.container['pane']}>
        <h1 className={styles.text['title']}>
          Matias Diz Rendani
        </h1>
        <h2 className={styles.text['subtitle']}>
          Desarrollador Backend & Frontend autónomo
        </h2>
        <div className={styles.misc['separator']}></div>
        <ul>
          {li}
        </ul>
      </div>
      <div className={styles.container['card']}>
        {card}
      </div>
    </div>
  </main>
}
