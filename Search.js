import axios from "axios";
import Cake from './Cake';
import { useEffect, useState} from "react";



function Search(){
    let [cakesresult, setCakes] = useState([])
    let searchcakeapi = "https://apibyashu.herokuapp.com/api/searchcakes?q="+"mango"
    useEffect(()=>{
        axios({
            method:"get",
            url:searchcakeapi,
        }).then((response)=>{
            console.log("response from search cake api", response.data)
            setCakes(response.data.data)
        }, (error)=>{
            console.log("error from all cakes api", error)
        })
    },[])
    return(
        <div className="container">
            
            <div className="row">

            {cakesresult?.length>0 ? cakesresult.map((each,index)=>{
                    return(<Cake cakedata={each} index={index}/ >)
                }) : <div className="alert alert-danger">No Results Fround for your search. Please try some other cake</div>
            }
            
            </div>      
                 
        </div>
    )
}

export default Search