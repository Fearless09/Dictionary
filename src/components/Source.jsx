import { useEffect } from 'react'
import { FiExternalLink } from 'react-icons/fi'

function Source({ data }) {

    return (
        <>{data &&
            <div className="mt-10 border-t pt-5 pb-[124px] flex items-center gap-5 text-sm font-normal underline">
                <h6 className="text-[#757575]">Source</h6>
                <div className='flex flex-wrap'>
                    {data.map((dataSrc, index) => (
                        <a key={index} href={dataSrc} target='_blank' className="flex items-center gap-2">
                            <span key={index}>{dataSrc}</span>
                            <FiExternalLink color='#757575' />
                        </a>
                    ))}
                </div>
            </div>
        }</>
    )
}

export default Source
