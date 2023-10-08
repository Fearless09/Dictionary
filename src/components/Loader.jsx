import { ColorRing } from 'react-loader-spinner'

function Loader() {
    return (
        <div className='mt-10 flex justify-center'>
            <ColorRing
                visible={true}
                height="100"
                width="100"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
        </div>
    )
}

export default Loader
