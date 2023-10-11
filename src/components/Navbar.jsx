import React from 'react'
import BookSVG from './SVGs/BookSVG'
import { FaRegMoon } from 'react-icons/fa6'

function Navbar({ toggleDarkmode, darkmode, toggleFont, fontFamily, setSearchData, setIsLoading, fetchData }) {
    function onHomeClick(e) {
        scrollTo({
            behavior: 'smooth',
            top: 0
        })
        setSearchData('a')
        setIsLoading(true)
        fetchData('a')
    }

    return (
        <nav className='flex justify-between items-center gap-4 pt-14'>
            {/* Book Icon */}
            <button onClick={onHomeClick}>
                <BookSVG />
            </button>

            <div className='flex items-center'>
                {/* Font Change Select */}
                <span className='me-6 py-3'>
                    <select name="font" onChange={toggleFont} value={fontFamily} id="fontFamily" className={`font-bold text-lg ${darkmode ? 'bg-[#050505] text-white' : 'bg-white text-[#2D2D2D]'}`}>
                        <option value="font-sans">Sans Serif</option>
                        <option value="font-serif">Serif</option>
                        <option value="font-mono">Mono</option>
                    </select>
                </span>
                {/* Dark Mode Switch and Mode */}
                <span className='border-l-2 ps-4 flex items-center gap-3'>
                    {/* Switch */}
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" checked={darkmode} onChange={toggleDarkmode} />
                        <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-[#757575] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#A445ED]"></div>
                    </label>
                    {/* Moon */}
                    <button className='rotate-[-20deg]' onClick={toggleDarkmode}><FaRegMoon color={darkmode ? '#A445ED' : '#757575'} size={'28px'} /></button>
                </span>
            </div>
        </nav>
    )
}

export default Navbar
