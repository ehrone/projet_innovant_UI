import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from "react-router-dom";
import { AboutUs } from './pages/AboutUs';
import { TestOurModel } from './pages/TestOurModel';
import { Home } from './pages/Home';
import { Recommandation } from './pages/Recommandation';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/aboutUs' element={<AboutUs/>} />
            <Route path='/testOurModel' element={<TestOurModel/>} />
            <Route path='/recommandation' element={<Recommandation/>} />
            <Route path='/' element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
