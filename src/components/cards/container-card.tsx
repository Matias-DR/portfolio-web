import { useEffect, useState } from 'react'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function ContainerCard({ children }: Props) {
  const [key, setKey] = useState(0)
  const [currentCard, setCurrentCard] = useState<ReactNode>(children)
  const [nextCard, setNextCard] = useState<ReactNode>(null)
  const [absolute, setAbsolute] = useState('')

  useEffect(() => {
    setKey(key + 1)
    setAbsolute('absolute')
    setNextCard(children)
    setTimeout(() => {
      setAbsolute('')
      setCurrentCard(children)
      setNextCard(null)
    }, 500)
  }, [children])

  return (
    <div
      key={key}
      className='relative size-full'
    >
      {currentCard && (
        <div className={`${absolute} size-full fade-out`}>{currentCard}</div>
      )}
      {nextCard && (
        <div className={`${absolute} size-full fade-in slide-from-right-to-left`}>
          {nextCard}
        </div>
      )}
    </div>
  )
}
