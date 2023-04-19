import React, { useEffect, useState } from "react";

function CardComponent() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fecthProduct = () => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
        setLoading(false);
      });
  };
  useEffect(() => {
    fecthProduct();
    console.log(products);
  }, []);
  return loading ? (
    <SkelatonData />
  ) : (
    <div className="row gy-2" >
      
        {products.map((product) => (
          <div className="card col-12 col-sm-6 col-md-4 col-lg-3 me-1 border border-none" style={{width:'16rem'}}>
          <img src={product.images} class="card-img-top" alt="..."  style={{width:'100%', height:'16rem'}}/>
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.creationAt}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        ))}
    </div>
  );
}

const SkelatonData = () => {
  return (
    <div className="row gy-2">
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="card" aria-hidden="true">
          <img
            src="https://i0.wp.com/roadmap-tech.com/wp-content/uploads/2019/04/placeholder-image.jpg?resize=400%2C400&ssl=1"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title placeholder-glow">
              <span className="placeholder col-6"></span>
            </h5>
            <p className="card-text placeholder-glow">
              <span className="placeholder col-7"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-6"></span>
              <span className="placeholder col-8"></span>
            </p>
            <a
              href="#"
              tabindex="-1"
              className="btn btn-primary disabled placeholder col-6"
            ></a>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="card" aria-hidden="true">
          <img
            src="https://i0.wp.com/roadmap-tech.com/wp-content/uploads/2019/04/placeholder-image.jpg?resize=400%2C400&ssl=1"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title placeholder-glow">
              <span className="placeholder col-6"></span>
            </h5>
            <p className="card-text placeholder-glow">
              <span className="placeholder col-7"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-6"></span>
              <span className="placeholder col-8"></span>
            </p>
            <a
              href="#"
              tabindex="-1"
              className="btn btn-primary disabled placeholder col-6"
            ></a>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="card" aria-hidden="true">
          <img
            src="https://i0.wp.com/roadmap-tech.com/wp-content/uploads/2019/04/placeholder-image.jpg?resize=400%2C400&ssl=1"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title placeholder-glow">
              <span className="placeholder col-6"></span>
            </h5>
            <p className="card-text placeholder-glow">
              <span className="placeholder col-7"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-6"></span>
              <span className="placeholder col-8"></span>
            </p>
            <a
              href="#"
              tabindex="-1"
              className="btn btn-primary disabled placeholder col-6"
            ></a>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="card" aria-hidden="true">
          <img
            src="https://i0.wp.com/roadmap-tech.com/wp-content/uploads/2019/04/placeholder-image.jpg?resize=400%2C400&ssl=1"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title placeholder-glow">
              <span className="placeholder col-6"></span>
            </h5>
            <p className="card-text placeholder-glow">
              <span className="placeholder col-7"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-6"></span>
              <span className="placeholder col-8"></span>
            </p>
            <a
              href="#"
              tabindex="-1"
              className="btn btn-primary disabled placeholder col-6"
            ></a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardComponent;
