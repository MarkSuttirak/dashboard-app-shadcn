import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import DashboardNew from './pages/dashboardnew'
import Settings from './pages/settings/settings'
import Test from './pages/test'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/old' element={<Dashboard />}/>
        <Route path='/' element={<DashboardNew />}/>
        <Route path="/settings/:id" element={<Settings />}/>
        <Route path="/test" element={<Test />}/>
      </Routes>
    </BrowserRouter>
  )
}