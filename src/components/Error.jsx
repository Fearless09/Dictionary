import React from 'react'

function Error({ searchData }) {
    return (
        <div className='text-center mt-10'>
            <h1 className='text-2xl font-medium text-[#A445ED]'>No Definitions Found for <span className='font-bold'>'{searchData}'</span></h1>
            <h3 className='mt-4 text-xl font-medium'>Sorry pal, we couldn't find definitions for the word you were looking for.</h3>
            <h3 className='my-4 text-xl font-medium'>You can try the search again at later time or head to the web instead.</h3>
        </div>
    )
}

export default Error
