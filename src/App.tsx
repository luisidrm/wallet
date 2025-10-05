import './App.css'
import { BrowserRouter, Route } from 'react-router'
import Login from './organisms/Login'

export default function App() {
  return(
    <BrowserRouter>
      <Route path='/' element={<Login/>}/>
    </BrowserRouter>
  )
}
