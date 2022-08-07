import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './css/micron.css'
import Title from './components/Title'
import Quote from './components/Quote'
import Button from './components/Button'

function App() {
  const title = 'Kanye West Quote Generator'
  const URL = 'https://api.kanye.rest/'
  const [quote, setQuote] = useState('')

  const generateQuote = async () => {
    try {
      const response = await axios.get(URL)
      const data = await response.data
      return data.quote
    } catch (e: any) {
      console.error(e.message)
      return null
    }
  }

  useEffect(() => {
    async function fetchData() {
      setQuote(await generateQuote())
    }
    fetchData()
  }, [])

  const handleClick = async () => {
    setQuote(await generateQuote())
  }

  return (
    <>
      <Title title={title} />
      <Quote quote={quote} />
      <Button label="Generate New Quote" handleClick={handleClick} />
    </>
  )
}

export default App
