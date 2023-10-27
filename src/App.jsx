import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import DashboardNew from './pages/dashboardnew'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/old' element={<Dashboard />}/>
        <Route path='/' element={<DashboardNew />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
