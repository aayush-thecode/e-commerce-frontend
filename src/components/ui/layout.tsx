import React from 'react'

interface IProps {
    children:React.ReactNode;
}

const Layout:React.FC<IProps> = ({children}) => {
  return (
    <div className='h-full w-full'>
        {children}
    </div>
  )
}

export default Layout;