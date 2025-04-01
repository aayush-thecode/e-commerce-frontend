'use client'

import React from 'react'
import Header from '../header';
import Footer from '../ui/footer';
import { usePathname } from 'next/navigation'

interface IProps {
    children:React.ReactNode;
}

const Layout:React.FC<IProps> = ({children}) => {

  const pathname = usePathname();
  const hideNav = pathname === "/login" || pathname === "/signup";

  return (
    
         <div className='min-h-screen flex flex-col'>
            {!hideNav && (
              <div>
                <Header />
          </div>
              )}
           <div className='flex-grow'>
               {children}
            </div>
          {/* footer */}
            {!hideNav && <Footer />}
          </div>
  )};

export default Layout;