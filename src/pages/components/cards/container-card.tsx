import {
  useEffect,
  useState
} from 'react'
import { ReactNode } from 'react'

interface Props { children: ReactNode }

export default function ContainerCard({ children }: Props) {
  const [key, setKey] = useState(0)
  const [currentCard, setCurrentCard] = useState<ReactNode>(children)
  const [nextCard, setNextCard] = useState<ReactNode>(null)

  useEffect(() => {
    setKey(key + 1)
    setNextCard(children)
    setTimeout(() => {
      setCurrentCard(children)
      setNextCard(null)
    }, 500)
  }, [children])

  return <div key={key} className='w-full h-full relative'>
    {currentCard && <div className='fade-out absolute'>
      {currentCard}
    </div>}
    {nextCard && <div className='fade-in slide-from-right-to-left'>
      {nextCard}
    </div>}
  </div>
}