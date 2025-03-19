import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import FamilyGrid from './FamilyGrid'
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' index element={<FamilyGrid/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App