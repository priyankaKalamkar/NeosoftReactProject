import axios from "axios"
import {useState, useEffect} from "react"


function Login(props){

    // When we dont want to call useEffect everytime on update then we have to add second argument called blank array
    useEffect(()=>{
        alert("Mounted and updated")
    },[])

    var [error, setError] = useState()
    // var user = {}
    var [user, setUser] = useState({})
    let getEmail=(event)=>{
        setUser({
        email:event.target.value,
        password:user.password
    })
    user.email = event.target.value
    }
    let getPassword=(event)=>{
        setUser({
        password:event.target.value,
        email :user.email
    })
    user.password = event.target.value
    }

    let login = function(){
        // if(user.email=="test@gmail.com" && user.password=="test"){
        //     setError("Login Successful")
        //     props.informLogin("priyanka K")
        // }else{
        //     setError("Invalid Login")
        // }
        console.log("user is trying to login",user)
        let loginapi= "https://apibyashu.herokuapp.com/api/login"
        axios({
            url:loginapi,
            method:"post",
            data:user
        }).then((response)=>{
            console.log("Response from login api", response.data)
        },(error)=>{
            console.log("error from login api", error)
        })
        
    }
    return(
        <div style={{width:"50%", margin:"auto"}}>
               
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" onChange={getEmail}></input>
                    {/* {user.email} */}

                    {/* Conditional rendering */}
                    {user && <label>{user.email}</label>}
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" onChange={getPassword}></input>
                    {/* {user.password} */}
                    {/* Conditional rendering */}
                    {user && <label>{user.password}</label>}
                </div>
                <div style={{color:"red"}}>
                    {error}
                </div>
                <button className="btn btn-primary" onClick={login}>Login</button>
        </div>
    )
}

export default Login