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


  const fetchData = (data) => fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${data}`)
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
    fetchData(searchData)
  }, [])

  const toggleDarkmode = () => setDarkmode(!darkmode)
  const toggleFont = e => setFontFamily(e.target.value)
  const onChangeSearch = e => setSearchData(e.target.value)



  const onSubmitSearch = e => {
    e.preventDefault()
    setIsLoading(true)
    fetchData(searchData)
  }



  return (
    <main className={`w-full min-h-screen m-0 px-3 ${fontFamily} ${darkmode ? 'bg-[#050505] text-white' : 'bg-white text-[#2D2D2D]'}`}>
      <div className="m-0 max-w-[745px] mx-auto w-full">
        <Navbar {...{ toggleDarkmode, darkmode, toggleFont, fontFamily, setSearchData, setIsLoading, fetchData }} />
        <SearchInput {...{ searchData, darkmode, onSubmitSearch, onChangeSearch }} />
        {isLoading && <Loader />}
        {data ? <>
          <Word {... { data }} />
          <Meaning data={data.meanings} {... { setSearchData, onSubmitSearch, setIsLoading, fetchData }} />
          <Source data={data.sourceUrls} />
        </> : <Error {...{ searchData }} />}
      </div>
    </main>
  )
}

export default App
