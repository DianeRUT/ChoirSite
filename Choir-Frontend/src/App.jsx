import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './Components/Layout'
import About from './Components/About.jsx'



import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>

<Route path='/' element={<Layout/>}>
<Route path='/about'  element={<About/>}/>



</Route>


     </Routes>
     
     
     </BrowserRouter>
    </>
  )
}

export default App
