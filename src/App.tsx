import './App.css'
import { HashRouter, Route, Routes } from 'react-router'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Layout from './components/Layout'
import Historic from './pages/Historic'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route element={<Layout />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/historic' element={<Historic />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
