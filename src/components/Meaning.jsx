import React from 'react'
import { BsDot } from 'react-icons/bs'

function Meaning({ data, setSearchData, onSubmitSearch, setIsLoading, fetchData }) {
    function onSynonymsClick(data) {
        scrollTo({
            behavior: 'smooth',
            top: 0
        })
        setSearchData(data)
        setIsLoading(true)
        fetchData(data)
    }
    return (
        <>
            {data && data.map((meaning, index) => (
                <React.Fragment key={index}>
                    {/* Synonyms */}
                    {meaning.synonyms.length > 0 &&
                        < div className="mt-10 flex flex-wrap gap-x-5 gap-y text-xl">
                            <h6 className='text-[#757575] font-normal'>Synonyms</h6>
                            {meaning.synonyms.map((synonym, synIndex) => <a onClick={() => onSynonymsClick(synonym)} key={synIndex} className='font-bold cursor-pointer text-[#A445ED] underline'>{synonym}</a>)}
                        </div >
                    }

                    {/* Antonyms */}
                    {meaning.antonyms.length > 0 &&
                        < div className="mt-10 flex flex-wrap gap-x-5 gap-y text-xl">
                            <h6 className='text-[#757575] font-normal'>Antonyms</h6>
                            {meaning.antonyms.map((antonym, antyIndex) => <a onClick={() => onSynonymsClick(antonym)} key={antyIndex} className='font-bold underline cursor-pointer text-[#A445ED]'>{antonym}</a>)}

                        </div >
                    }

                    {/* Part of Speech */}
                    <div className='mt-10 flex gap-5 items-center'>
                        <h6 className='text-2xl font-bold italic'>{meaning.partOfSpeech}</h6>
                        <div className='w-full h-[1px] bg-[#E9E9E9] rounded-full'></div>
                    </div>

                    {/* Meaning */}
                    <div className='mt-10'>
                        <h6 className='text-[#757575] font-normal text-xl'>Meaning</h6>
                        <ul className="mt-6 ps-[22px]">
                            {meaning.definitions.length > 0 && meaning.definitions.map((definition, defIndex) => (
                                <li key={defIndex} className="flex gap-5 items-start mb-3">
                                    <BsDot size={'24px'} color='#8F19E8' />
                                    <span className='font-normal text-lg'>{definition.definition}</span>
                                </li>
                            ))
                            }
                        </ul>
                    </div>
                </React.Fragment>
            ))}
        </>
    )
}

export default Meaning
