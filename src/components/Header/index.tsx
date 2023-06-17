import React from 'react'
import { Link } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi'
import { MdOutlineClose } from 'react-icons/md'
import Logo from "../../assets/react.svg"

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <header className='bg-white shadow-md flex items-center justify-between py-2 px-4 md:py-5 md:px-10 lg:px-24 fixed top-0 left-0 z-10 w-full min-h-[50px]'>
        <Link to={"/"}>
          <img src={Logo} alt="" className='h-8 md:h-12' />
        </Link>
        <nav className="hidden md:flex items-center gap-x-14 md:gap-4 lg:gap-7">
          <ul className='flex flex-col md:flex-row items-center text-sm text-dark-light gap-7 md:gap-4 lg:gap-7 font-medium'>
            <li><Link to="/" className={`pb-1.5 px-1 font-medium`}>Home</Link></li>
            <li><Link to="/about" className={`pb-1.5 px-1 font-medium`}>About</Link></li>
          </ul>
        </nav>
        { isOpen ? 
          <MdOutlineClose onClick={() => setIsOpen(false)} className={`cursor-pointer text-3xl md:hidden relative z-50  text-green`} /> 
          : <BiMenu onClick={() => setIsOpen(true)} className='cursor-pointer text-3xl md:hidden relative z-50 text-green' />
        }
      </header>
        <div className={`md:hidden shadow fixed top-0 right-0 w-5/6 min-h-screen h-screen bg-white px-4  py-2 md:px-10 z-30 translate-x-full ${isOpen && "translate-x-0"} transition-all duration-300`}>
          <div className='flex justify-end items-center'>
            { isOpen ? 
              <MdOutlineClose onClick={() => setIsOpen(false)} className={`cursor-pointer text-3xl md:hidden relative z-50  text-green`} /> 
              : <BiMenu onClick={() => setIsOpen(true)} className='cursor-pointer text-3xl md:hidden relative z-50 text-green' />
            }
          </div>
          <nav className="md:hidden flex flex-col gap-16 p-4 pt-20 px-8 mb-8">
            <ul className='flex flex-col text-sm text-dark-light gap-7 md:gap-4 lg:gap-7 font-medium'>
              <li><Link to="/" className={`pb-1.5 px-1 font-medium`}>Home</Link></li>
              <li><Link to="/about" className={`pb-1.5 px-1 font-medium`}>About</Link></li>
              
             
            </ul>
            <Link to="/users/add-business">
                Add my business
            </Link>
          </nav>
        </div>
    </>
  )
}

export default Header