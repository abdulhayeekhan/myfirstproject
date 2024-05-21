import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {v4} from 'uuid'

const AddUser = () =>{
    const [id,setID] = useState(v4())
    console.log('ID',id)
    const [name,setName] = useState('')
    console.log('name:',name)
    const [email,setEmail] = useState('')
    console.log('email:',email)


    const navigate = useNavigate()

    const handleSubmit = async(e) =>{
        e.preventDefault()
        
        const body = 
        {
            id: id,
            name: name,
            email: email
        }
        console.log('body:',body)
        await axios.post('http://localhost:3030/users',body)
        .then(res =>{
            navigate('/')           
        })
        .catch(err =>(
            console.log(err)
        ))
        
    }

    return(
        <div className="row">
            <form className="form" action="" onSubmit={e => handleSubmit(e)}>
                {/* <div className="form-group" >
                    <label>ID</label>
                    <input type="number" value={id} onChange={e=>setID(e.target.value)} className="form-control"></input>
                </div> */}
                <div className="form-group" >
                    <label>Name</label>
                    <input type="text" value={name} onChange={e=> setName(e.target.value)} className="form-control"></input>
                </div>

                <div className="form-group" >
                    <label>Email</label>
                    <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className="form-control"></input>
                </div>

                <div className="form-group" >
                 
                    <input type="submit" className="btn btn-success" value={'Submit Form'}></input>
                </div>

            </form>
        </div>
    )
}

export default AddUser