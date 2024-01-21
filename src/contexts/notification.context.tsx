import {
  createContext,
  useContext,
  useState
} from 'react'

const NotificationContext = createContext({
  show: (
    message: string,
    type: Status,
    duration?: number
  ) => { }
})

export const useNotification = () => {
  return useContext(NotificationContext)
}

export enum Status {
  Success = 'success',
  Error = 'error',
  Warning = 'warning',
  Info = 'info'
}

const ringColor: Record<Status, string> = {
  'success': 'ring-green-400',
  'error': 'ring-red-400',
  'warning': 'ring-orange-400',
  'info': 'ring-blue-400'
}

interface Props {
  children: React.ReactNode
}

export const NotificationProvider = ({ children }: Props) => {
  const [notification, setNotification] = useState<{
    message: string
    type: Status
  } | null>(null)

  const show = (
    message: string,
    type: Status,
    duration: number = 5000
  ) => {
    setNotification({ message, type })
    setTimeout(() => {
    setNotification(null)
    }, duration)
  }

  return <NotificationContext.Provider value={{ show }}>
    {children}
    {notification && <div className={`absolute bottom-[1rem] left-[1rem] px-2 bg-zinc-800 border-2 border-zinc-900 ring-2 ${ringColor[notification.type]}`}>
      <p className='font-bold text-zinc-300'>
        {notification.message}
      </p>
    </div>}
  </NotificationContext.Provider>
}
