import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Layout from './components/Layout'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
