import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min';
import { useEffect } from 'react';

function Carouseldisplay() {
  useEffect(() => {
    const carouselElement = document.querySelector('#carouselExampleInterval');
    if (carouselElement) {
      new bootstrap.Carousel(carouselElement, {
        interval: 10000,
        ride: 'carousel',
      });
    }
  }, []);

  return (
    <div
        id="carouselExampleInterval"
        className="carousel slide container"
        data-bs-ride="carousel"
        style={{height:"350px"}}
      >
        <div className="carousel-inner" >
          <div className="carousel-item active" data-bs-interval={10000}>
            <img src="./images/carousel1.webp" style={{height:"350px"}}  className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img src="./images/carousel2.jpeg" style={{height:"350px"}} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./images/carousel3.jpeg" style={{height:"350px"}} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
  );
}
export default Carouseldisplay;