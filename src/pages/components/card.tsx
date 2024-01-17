import {
  useEffect,
  useState
} from 'react'
import { ReactNode } from 'react'

interface Props { children: ReactNode }

export default function Card({ children }: Props) {
  const [key, setKey] = useState(0)
  const [currentChildren, setCurrentChildren] = useState<ReactNode>(children)
  const [nextChildren, setNextChildren] = useState<ReactNode>(null)

  useEffect(() => {
    setKey(key + 1)
    setNextChildren(children)
    setTimeout(() => {
      setCurrentChildren(children)
      setNextChildren(null)
    }, 1000)
  }, [children])

  return <div key={key} className={`w-full h-full`}>
    {/* Aplicar fade-out al componente actual */}
    {currentChildren && <div className={`fade-out`}>{currentChildren}</div>}

    {/* Aplicar fade-in al próximo componente */}
    {nextChildren && <div className={`fade-in`}>{nextChildren}</div>}
  </div>
}