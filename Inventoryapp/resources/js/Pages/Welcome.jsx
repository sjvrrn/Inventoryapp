import { Link } from '@inertiajs/react';
import '../../css/welcome.css';
import { useState } from 'react';
import axios from 'axios';

export default function Welcome({ products = [],auth }) {
    //const { auth } = usePage().props;
    const [cart, setCart] = useState([]);
     const addToCart = (product) => {
                        setCart([...cart, product]);
                         axios.post(`/cart/add/${product.id}`)
                        .then(res => {
                            alert(res.data.message);
                        });

                        
                    };
    return (
        <>
         {/* Navbar */}
        <nav className="navbar navbar-expand-lg ">

            <div className="container">

                {/* Logo */}
                <Link
                    href="/"
                    className="navbar-brand fw-bold"
                >
                    My Store
                </Link>

                {/* Menu */}
                <div className="collapse navbar-collapse" style={{visibility:'visible'}}>

                    <ul className="navbar-nav me-auto">

                        <li className="nav-item">
                            <Link
                                href="/"
                                className="nav-link"
                            >
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                href="/products"
                                className="nav-link"
                            >
                                Products
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                href="/about"
                                className="nav-link"
                            >
                                About
                            </Link>
                        </li>

                    </ul>

                    {/* Right Side */}
                    <div className="d-flex align-items-center">

                        {auth.user ? (

                            <>
                                <span className="text-white me-3">
                                    Welcome,
                                    {' '}
                                    {auth.user.name}
                                </span>

                                <Link
                                    href="/logout"
                                    method="post"
                                    as="button"
                                    className="btn btn-outline-light"
                                >
                                    Logout
                                </Link>
                            </>

                        ) : (

                            <Link
                                href="/login"
                                className="btn btn-light"
                            >
                                Login
                            </Link>

                        )}

                    </div>
                    {auth.user && (
                        <>
                    <span className="text-dark me-3">
                        Cart: {cart.length}
                    </span>
                    </>
                    ) }

                </div>

            </div>

        </nav>
        <div className="bg-light min-vh-100">
            {/* Hero Section */}
            <div className="text-white py-5" style={{backgroundColor:'#b67431'}}>
                <div className="container text-center">

                    <h1 className="display-4 fw-bold">
                        Welcome To Our Store
                    </h1>

                    <p className="lead mt-3">
                        Discover the best products at amazing prices
                    </p>

                </div>
            </div>
            
              {/* Slider Section */}
            <div
                id="mainSlider"
                className="carousel slide"
                data-bs-ride="carousel"
            >

                {/* Indicators */}
                <div className="carousel-indicators">

                    <button
                        type="button"
                        data-bs-target="#mainSlider"
                        data-bs-slide-to="0"
                        className="active"
                    ></button>

                    <button
                        type="button"
                        data-bs-target="#mainSlider"
                        data-bs-slide-to="1"
                    ></button>

                    <button
                        type="button"
                        data-bs-target="#mainSlider"
                        data-bs-slide-to="2"
                    ></button>

                </div>

                {/* Slides */}
                <div className="carousel-inner">

                    <div className="carousel-item active">

                        <img
                            src={`/storage/Slides/latest_slide_1.jpg`}
                            className="d-block w-100"
                            style={{
                                height: '400px',
                                objectFit: 'cover'
                            }}
                        />

                        <div className="carousel-caption d-none d-md-block">

                            <h2>Latest Products</h2>

                            <p>Best deals available now</p>

                        </div>

                    </div>

                    <div className="carousel-item">

                        <img
                            src={`/storage/Slides/latest_slide_2.jpg`}
                            className="d-block w-100"
                            style={{
                                height: '400px',
                                objectFit: 'cover'
                            }}
                        />

                        <div className="carousel-caption d-none d-md-block">

                            <h2>New Arrivals</h2>

                            <p>Explore trending collections</p>

                        </div>

                    </div>

                    <div className="carousel-item">

                        <img
                            src={`/storage/Slides/latest_slide_3.jpg`}
                            className="d-block w-100"
                            style={{
                                height: '400px',
                                objectFit: 'cover'
                            }}
                        />

                        <div className="carousel-caption d-none d-md-block">

                            <h2>Special Offers</h2>

                            <p>Discounts on selected items</p>

                        </div>

                    </div>

                </div>

                {/* Controls */}
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#mainSlider"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon"></span>
                </button>

                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#mainSlider"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon"></span>
                </button>

            </div>
            {/* Products Section */}
<div    id="productSlider"    className="carousel slide py-5"    data-bs-ride="carousel">
        <div className="carousel-inner">

        {Array.from(
            { length: Math.ceil(products.length / 4) },
            (_, slideIndex) => (

                <div
                    key={slideIndex}
                    className={`carousel-item ${
                        slideIndex === 0 ? 'active' : ''
                    }`}
                >

                    <div className="container">
                        <div className="row">

                            {products
                                .slice(
                                    slideIndex * 4,
                                    slideIndex * 4 + 4
                                )
                                .map((product) => (

                                    <div
                                        className="col-md-3"
                                        key={product.id}
                                    >

                                        <div className="card shadow-sm h-100">

                                            {/* Product Image */}
                                            <div
                                                className="bg-white text-center p-3"
                                                style={{
                                                    height: '300px'
                                                }}
                                            >

                                                <img
                                                    src={`/storage/products/${product.image}`}
                                                    style={{
                                                        maxHeight: '100%',
                                                        maxWidth: '100%',
                                                        objectFit: 'contain'
                                                    }}
                                                />

                                            </div>

                                            {/* Product Details */}
                                            <div
                                                className="card-body text-center"
                                                style={{
                                                    fontFamily:
                                                        'Arial, sans-serif'
                                                }}
                                            >

                                                <h5 className="fw-bold"
                                                style={{
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 2,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden',
                                                    minHeight: '48px'
                                                }}>
                                                    {product.name}
                                                </h5>

                                                <p className="text-muted">
                                                    SKU: {product.sku}
                                                </p>

                                                <h4 className="text-primary fw-bold">
                                                    ₹{product.price}
                                                </h4>

                                                <p className="text-secondary">
                                                    Stock: {product.quantity}
                                                </p>

                                                <button className="btn btn-dark w-100 mt-3" style={{marginBottom:'5%'}} onClick={() => addToCart(product)}>
                                                    Add To Cart
                                                </button>
                                                
                                            </div>

                                        </div>

                                    </div>

                                ))}

                        </div>
                    </div>

                </div>

            )
        )}

 </div>

    {/* Previous */}
    <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#productSlider"
        data-bs-slide="prev"
    >

        <span className="carousel-control-prev-icon bg-dark rounded-circle p-3"></span>

    </button>

    {/* Next */}
    <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#productSlider"
        data-bs-slide="next"
    >

        <span className="carousel-control-next-icon bg-dark rounded-circle p-3"></span>

    </button>

</div>
          
          </div>
           </>
    );
}