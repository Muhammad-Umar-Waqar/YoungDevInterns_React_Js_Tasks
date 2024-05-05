import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import authService from './appwrite/auth'
import {login, logout} from './store/authSlice'


function App() {
const [loading, setLoading] = useState(true)
const dispatch = useDispatch()

useEffect(()=>{
    authService.getcurrentUser()
    .then((userData)=>{
      if (userData){
        dispatch(login({userData})) 
      } else {
        dispatch(logout())
      }
    })
    .finally(()=> setLoading(false))

}, [])
  

    return !loading? (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="products" element={<Products />} />
                </Route>
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    ) : (null)
}

export default App
