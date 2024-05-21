import React,{useEffect,useState} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Home = () =>{
    const [users,setUsers] = useState([])
    
    const getAllUsers = async() =>{
        const getdata =await axios.get('http://localhost:3030/users')
        setUsers(getdata.data)    
    }

    useEffect(() =>{
        getAllUsers()
    },[])
    
    return(
        <>
            <h3 >Home component 
                <span style={{float:'right'}}>
                    <Link to={'add-user'} className="btn btn-success">
                        Add Users
                    </Link>
                </span>
            </h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((item) =>(
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default Home;