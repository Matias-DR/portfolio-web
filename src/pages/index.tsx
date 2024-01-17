import styles from '@/styles/styles'
import Card from '@/pages/components/card'

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
        <div className={styles.misc['x-separator']}></div>
        <ul>
          {li}
        </ul>
      </div>
      <div className={`${styles.container['card']}`}>
        <Card>{card}</Card>
      </div>
    </div>
  </main>
}
