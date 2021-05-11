function CakeDetails() {
    var image="cake1.jpeg";
    return(
       
<section>
<br/>
  <div className="row">
    <div className="col-md-6 mb-4 mb-md-0">
      <div className="mdb-lightbox">
        <div className="row product-gallery mx-1">
          <div className="col-12 mb-0">
            <figure className="view overlay rounded z-depth-1" >
              <a href=""
                data-size="710x823">
                <img src={image} style={{size: "710X820"}} className="card-img-top"/>
              </a>
            </figure>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <h5>CHOCOLAVA SPECIAL</h5>
      <p className="mb-2 text-muted">41 Reviews</p>
      
      <p className="pt-1">A special chocolate filled cake for a party of 20 peoples.</p>
      <p><span className="mr-1"><strong>CURRENT PRICE :</strong> <strong style={{color:"orange"}}>$12.99</strong></span></p>
      <p className="pt-1"><strong>91% </strong>of buyers enjoyed this product! <strong>(87 votes)</strong></p>
      <p><span className="mr-1"><strong>Weight :   3KG</strong></span></p>
      <p><span className="mr-1"><strong>FLAVOUR :</strong> <strong style={{color:"orange"}}><i>HAZELNUT CAKE </i></strong></span></p>
      <p><span className="mr-1"><strong>TYPE : </strong> GENERAL </span></p>
      <p><span className="mr-1"><strong>Ingrediant : </strong> cream, dark choclate, hazelnut, strawberry</span></p>
      
      <hr/>
      <button type="button" className="btn btn-primary btn-md mr-1 mb-2" style={{backgroundColor:"orange"}}>Add to cart</button>
      <button type="button" className="btn btn-light btn-md mr-1 mb-2"><i
          className="fas fa-shopping-cart pr-2"></i>Add to cart</button>
    </div>
  </div>

</section>
    )
}

export default CakeDetails