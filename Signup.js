import { Component } from "react"
import axios from 'axios'

class Signup extends Component{
    constructor(){
        super()
        this.state = {
            // onlineUsers : 0
        }
        alert("in construnction")
    }

    user ={}

    // componentDidUpdate(){
    //     alert("component updated")
    // }

    componentUnmount(){

    }

    getName=(event)=>{
        this.user.name = event.target.value
    }
    getEmail=(event)=>{
        this.user.email = event.target.value
    }
    getPassword=(event)=>{
        this.user.password = event.target.value
    }

    register=()=>{
        if(!this.user.email || !this.user.password || !this.user.name){
            this.setState({
                errorMessage:"Please fill details"
            })
        }
        else{
            let apiurl = "https://apibyashu.herokuapp.com/api/register"
            axios({
                url:apiurl,
                method:"post",
                data:this.user
            }).then((response)=>{
                console.log("response from signup api",response.data)
            },(error)=>{
                console.log("Error from signup api", error)
            })
        }
        console.log("..........User Details",this.user)
    }
    // onlineUsers =()=>{
    //     this.setState({
    //         onlineUsers : this.state.onlineUsers+1
    //     })
    // }
    render(){
        return(
            <div style={{width:"50%", margin:"auto"}}>
                {/* Hey Users {this.state.onlineUsers} */}
                {/* <input onChange={this.getEmail}></input> */}
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" onChange={this.getEmail}></input>
                </div>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" onChange={this.getName}></input>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" onChange={this.getPassword}></input>
                </div>
                <div style={{color:"red"}}>
                    {this.state.errorMessage}
                </div>
                <button className="btn btn-primary" onClick={this.register}>Register</button>
                {/* <button onClick={this.onlineUsers}>Go Online</button> */}
                 {/* If not wanted to use arrow function use bind */}
                {/* <button onClick={this.onlineUsers.bind(this)}>Go Online</button>  */} 
            </div>
        )
    }
}

export default Signup