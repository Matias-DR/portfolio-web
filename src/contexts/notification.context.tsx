import success from '@/assets/status/success.svg'
import error from '@/assets/status/error.svg'
import warning from '@/assets/status/warning.svg'
import info from '@/assets/status/info.svg'

import Image from 'next/image'
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

const ringColorByStatus: Record<Status, string> = {
  'success': 'ring-green-500',
  'error': 'ring-red-500',
  'warning': 'ring-orange-500',
  'info': 'ring-blue-500'
}

const svgByStatus: Record<Status, string> = {
  'success': success,
  'error': error,
  'warning': warning,
  'info': info
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
    {notification && <div className={`absolute bottom-[1rem] left-[1rem] flex justify-center items-center px-2 bg-zinc-800 border-2 border-zinc-900 ring-2 ${ringColorByStatus[notification.type]}`}>
      <Image
        src={svgByStatus[notification.type]}
        width={20}
        height={20}
        alt={notification.type}
        className='mr-2'
      />
      <p className='font-bold text-zinc-300'>
        {notification.message}
      </p>
    </div>}
  </NotificationContext.Provider>
}
