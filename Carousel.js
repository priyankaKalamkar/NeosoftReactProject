var carousel1 = "cakeSlider.jpeg"
var carousel2 = "cakeSlider2.jpeg"
var carousel3 = "cakeSlider3.jpeg"

var carouselImage = {
    height:"300px"
}
function Carousel(){
    return(
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img style={carouselImage} src={carousel1} className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img style={carouselImage} src={carousel2} className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img style={carouselImage} src={carousel3} className="d-block w-100" alt="..."></img>
                </div>
            </div>
        </div>
    )
}

export default Carousel;