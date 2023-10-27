import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import DashboardNew from './pages/dashboardnew'
import Settings from './pages/settings'
import { SelectForm } from './pages/test'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/old' element={<Dashboard />}/>
        <Route path='/' element={<DashboardNew />}/>
        <Route path="/settings" element={<Settings />}/>
        <Route path="/test" element={<SelectForm />}/>
      </Routes>
    </BrowserRouter>
  )
}