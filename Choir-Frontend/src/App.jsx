import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import FamilyGrid from './FamilyGrid'
import Commission from './Commission'
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' index element={<FamilyGrid/>}/>
        <Route path='/commission' index element={<Commission/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App