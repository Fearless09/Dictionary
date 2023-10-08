import React from 'react'
import SearchSVG from './SVGs/SearchSVG'

function SearchInput({ searchData, darkmode, onSubmitSearch, onChangeSearch }) {
    return (
        <form onSubmit={onSubmitSearch} className={`mt-14 w-full rounded-2xl text-xl font-bold focus-within:border-2 focus-within:border-[black] flex relative ${darkmode ? 'text-[#FFFFFF] bg-[#222020]' : 'text-[#2D2D2D] bg-[#F4F4F4]'}`}>
            <input type="search" className={`w-full bg-transparent py-[20px] ps-6 pe-2 focus-visible:outline-none`} value={searchData} onChange={onChangeSearch} />
            <button className='p-6 ps-2'><SearchSVG /></button>
        </form>
    )
}

export default SearchInput
