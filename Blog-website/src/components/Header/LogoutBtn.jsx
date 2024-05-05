import React from 'react'
import { useDispatch } from 'react-redux'
import authService  from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
import { useNavigate } from 'react-router-dom'
// import { useSelector } from 'react-redux'


function LogoutBtn() {
const navigate = useNavigate()
    const dispatch = useDispatch();
const logoutHandler = () =>{
    authService.logout().then(()=>{
        dispatch(logout())
        navigate('/login')
    })
}  
    return (
        <button
        className='shadow-sm lg:shadow-none focus:outline-none focus:bg-transparent bg-transparent   
        block py-2 pr-4 pl-3 duration-200  cursor-pointer
        text-gray-700  lg:bg-transparent  lg:hover:bg-transparent lg:border-0 hover:text-orange-700 
         lg:p-0 '
        onClick={logoutHandler}
        >Logout</button>
  )
}

export default LogoutBtn
