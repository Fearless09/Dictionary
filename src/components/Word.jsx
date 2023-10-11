import { useState } from 'react'
import audioSRC from '../assets/brother.mp3'
import { FaPlay, FaPause } from 'react-icons/fa'

function Word({ data }) {
    const [isPlaying, setIsPlaying] = useState(false)

    return (
        <div className='mt-[45px] flex gap-4 items-center justify-between'>
            <span>
                <h1 className='text-[50px] sm:text-[64px] font-bold'>{data.word}</h1>
                <p className='text-2xl font-normal text-[#A445ED]'>{data.phonetics?.length > 0 && data.phonetics[0]?.text}</p>
            </span>

            {data.phonetics?.length > 0 &&
                <>
                    {/* {data.phonetics[0].audio} */}
                    <button className='w-[75px] h-[75px] rounded-full overflow-hidden bg-[#a445ed52] text-[28px] text-[#A445ED] relative flex justify-center items-center'>
                        {isPlaying ? <FaPause /> : <FaPlay />}
                        <audio className="absolute top-[15%] scale-[225%] left-[10.45rem] opacity-0" controls onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)} >
                            <source src={data.phonetics[0].audio} />
                        </audio>
                    </button>
                </>
            }
        </div>
    )
}

export default Word
