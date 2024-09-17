import React, { useState } from "react";
import { products } from "../data/Data";
import { useDispatch } from "react-redux";
import { addToCart, getCartTotal } from "../redux/CartSlice";
import { Link } from "react-router-dom";

export default function Product() {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);

  const handleAddToCart = (product) => {
    let totalPrice = qty * product.price;
    const tempProduct = {
      ...product,
      quantity: qty,
      totalPrice,
    };
    dispatch(addToCart(tempProduct));
    dispatch(getCartTotal());
  };

  return (
    <>
      <style>
        {`
          .product-img {
            height: 250px; /* Set your desired height */
            width: 100%; /* Full width of the parent container */
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            position: relative;
          }

          .product-img img {
            object-fit: cover; /* Ensure the image covers the container */
            height: 100%;
            width: 100%; /* Make sure the image covers the entire container */
          }

          .product-action {
            position: absolute;
            top: 0;
            right: 0;
            padding: 10px;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
          }

          .product-action .btn {
            margin-bottom: 5px;
          }
        `}
      </style>

      <div className="container-fluid pt-5 pb-3">
        <div className="row px-xl-5">
          {products.map((item, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1" key={index}>
              <div className="product-item bg-light mb-4">
                <div className="product-img">
                  <img
                    src={item.product_img}
                    alt={item.product_name}
                    className="img-fluid"
                  />
                  <div className="product-action">
                    <Link
                      className="btn btn-outline-dark btn-square"
                      onClick={() => handleAddToCart(item)}
                    >
                      <i className="fa fa-shopping-cart"></i>
                    </Link>
                    <Link className="btn btn-outline-dark btn-square">
                      <i className="far fa-heart"></i>
                    </Link>
                    <Link className="btn btn-outline-dark btn-square">
                      <i className="fa fa-sync-alt"></i>
                    </Link>
                    <Link className="btn btn-outline-dark btn-square">
                      <i className="fa fa-search"></i>
                    </Link>
                  </div>
                </div>
                <div className="text-center py-4">
                  <a href="#" className="h6 text-decoration-none text-truncate">
                    {item.product_name}
                  </a>
                  <div className="d-flex align-items-center justify-content-center mt-2">
                    <h5>${item.price}</h5>
                    <h6 className="text-muted ml-2">
                      <del>${item.price}</del>
                    </h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-center mb-1">
                    {item.stars}
                    <small>({item.ratingCount})</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
