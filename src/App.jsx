import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import SearchInput from './components/SearchInput'
import Word from './components/Word'
import Meaning from './components/Meaning'
import Source from './components/Source'
import Error from './components/Error'
import Loader from './components/Loader'

function App() {
  const [darkmode, setDarkmode] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])
  const [fontFamily, setFontFamily] = useState('font-sans')
  const [searchData, setSearchData] = useState('keyboard')


  const fetchData = () => fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchData}`)
    .then(response => response.json())
    .then(response => {
      console.log(response[0])
      setIsLoading(false)
      setData(response[0])
    })
    .catch(err => {
      setIsLoading(false)
      console.log('Error', err)
    })

  useEffect(() => {
    setIsLoading(true)
    fetchData()
  }, [])

  const toggleDarkmode = () => setDarkmode(!darkmode)
  const toggleFont = e => setFontFamily(e.target.value)
  const onChangeSearch = e => setSearchData(e.target.value)



  const onSubmitSearch = e => {
    e.preventDefault()
    setIsLoading(true)
    fetchData()
  }



  return (
    <main className={`w-screen min-h-screen m-0 px-3 ${fontFamily} ${darkmode ? 'bg-[#050505] text-white' : 'bg-white text-[#2D2D2D]'}`}>
      <Navbar {...{ toggleDarkmode, darkmode, toggleFont, fontFamily }} />
      <SearchInput {...{ searchData, darkmode, onSubmitSearch, onChangeSearch }} />
      {isLoading && <Loader />}
      {data ? <>
        <div className="m-0 max-w-[745px] mx-auto w-full">
          <Word data={data} />
          <Meaning data={data.meanings} />
          <Source data={data.sourceUrls} />
        </div>
      </> : <Error />}
    </main>
  )
}

export default App
