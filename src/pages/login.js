import axios from "axios"
import { useState } from "react"
import { json, useNavigate } from "react-router-dom"

const Login = () =>{
    const navigate = useNavigate()
    const [email,setEmail] = useState()
    const handleSubmit = async() =>{
        const body = {
            "username":"abdulhayeekhan",
            "email":"abdulhayee@gmail.com"
        }
        localStorage.setItem('userInfo',JSON.stringify(body))
        navigate('/')
    }
    localStorage.removeItem('userInfo')
    console.log(localStorage.getItem('userInfo'))
    return(
        <>
        <form >
            <input type="email" onChange={e => setEmail(e.target.value)} />
            <button type="submit" onClick={handleSubmit}>Login</button>
        </form>
        </>
    )
}

export default Login