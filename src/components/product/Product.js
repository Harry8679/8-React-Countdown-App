import React, { Fragment } from 'react';
import './Product.scss';
import { IoMdCart } from "react-icons/io";
import gown from '../../assets/gown1.jpg';

const Product = () => {
  return (
    <Fragment>
        <header className='--bg-dark'>
            <div className="container">
                <h2 className='--text-md --text-light --py2'>Emarh<span>Shop</span><IoMdCart color='#fb5607' size={30} /></h2>
            </div>
        </header>
        <section className=''>
            <div className="container product --flex-center --flex-dir-column">
                <div className="product-image --text-center --card --mr">
                    <img src={gown} alt="Dress" />
                </div>
                <div className="product-desc">
                    <h3 className="--text-md --color-danger">
                        Sleek Weeding Gown
                    </h3>
                    <p className="--fw-bold">295 €</p>
                    <p className='--text-sm'>
                        Marriage is a contractual and/or ritual marital union, of unlimited duration, determined or indefinite, 
                        recognized and supervised by a legal or religious institution which determines its terms. The term designates both the ritual ceremony, 
                        the union that results from it and the institution defining the rules. It is one of the frameworks establishing the family structures of a society.
                    </p>
                    <form action="">
                        <div className="--form-control --flex-start my2">
                            <label htmlFor="">Color</label>
                            <select>
                                <option>Choose an option</option>
                                <option>White</option>
                                <option>Gray</option>
                            </select>
                        </div>

                        <div className="--form-control --flex-start my2">
                            <label htmlFor="">Size</label>
                            <select>
                                <option>Choose an option</option>
                                <option>24</option>
                                <option>26</option>
                                <option>28</option>
                            </select>
                        </div>

                        <div className="--form-control --flex-start my2">
                            <label htmlFor="">Quantity</label>
                            <select>
                                <option>Choose an option</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                        <button className="--btn --btn-primary --btn-block">Add To Cart</button>
                    </form>
                </div>
            </div>
        </section>
    </Fragment>
  )
}

export default Product;
