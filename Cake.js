function Cake(props){
    console.log("Props Received", props.cakedata.name)
    return(
       
            <div className="card" style={{width: "18rem"}}>
                <img src={props.cakedata.image} style={{height: "200px"}} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.cakedata.name}</h5>
                </div>
            </div>
    )
}
export default Cake;