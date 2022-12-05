import React from 'react'
import {BsInputCursorText} from 'react-icons/bs'

const Navbar = () => {
  return (
    <nav className=' flex flex-col justify-center'>
        <h2 className='text-6xl mt-4 z-1 font-bold text-secondaryVariantOrange flex justify-center items-center tracking-wider hover:tracking-widest transition-all '> <BsInputCursorText className='inline mr-2'/> I<span className='text-2xl '>2</span>T.ai</h2>
        <p className='text-center'>Convert Images into text</p>
    </nav>
  )
}

export default Navbar