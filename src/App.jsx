import { useState } from 'react'

import './App.css'
import Watch from './Component/Watch/Watch'

function App() {
  const [count, setCount] = useState(0);
  const watchs = [
    {id: 1, name: 'Apple watch', price: 200},
    {id: 2, name: 'Samsu watch', price: 200},
    {id: 3, name: 'MI watch', price: 200},
  ]

  return (
    <>
       
      <h1>Vite + React</h1>
       {
        watchs.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
       }
       
    </>
  )
}

export default App
