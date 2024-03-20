import { ReactNode } from 'react'

const Container = ({children}: {children: ReactNode}) => {
  return (
    <div className='w-full max-w-6xl mx-auto px-5'>
      {children}
    </div>
  )
}

export default Container