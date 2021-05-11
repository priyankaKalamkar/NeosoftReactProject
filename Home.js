import Carousel from './Carousel';
import axios from "axios";
import Cake from './Cake';
import { useEffect, useState} from "react";
import cakes from "./Data.js"
import CakeDetails from './CakeDetails'



function Home(){
    let [cakes, setCakes] = useState([])
    let allcakeapi = "https://apibyashu.herokuapp.com/api/allcakes"
    useEffect(()=>{
        axios({
            method:"get",
            url:allcakeapi,
        }).then((response)=>{
            console.log("response from all cake api", response.data)
            setCakes(response.data.data)
        }, (error)=>{
            console.log("error from all cakes api", error)
        })
    },[])
    return(
        <div>
            
            <Carousel></Carousel>
            <div className="row">
            {/* <Cake name="Chocolate Truffle" image="cake1.jpeg"/> */}
          

            {cakes.length>0 && cakes.map((each,index)=>{
                    return(<Cake cakedata={each} index={index}/ >)
                })
            }
            {/* <Cake cakedata={obj} />
            <Cake cakedata={obj} />
            <Cake cakedata={obj} />
            <Cake cakedata={obj} /> */}
            
            </div>      
            <CakeDetails/>     
        </div>
    )
}

export default Home