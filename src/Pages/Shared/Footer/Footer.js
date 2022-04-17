import React from 'react';
import { Link } from 'react-router-dom';
import facebook from '../../../images/facebook-square-brands.svg';
import instagram from '../../../images/instagram-brands.svg';
import twitter from '../../../images/twitter-brands.svg';
import location from '../../../images/location-dot-solid.svg';
import phone from '../../../images/square-phone-flip-solid.svg';
import mail from '../../../images/square-envelope-solid.svg';

import About from '../../About/About';
import Blog from '../../Blog/Blog';
import Home from '../../Home/Home/Home';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear(); 
    return (
        <footer className='bg-info py-5 text-dark mt-2'>
         <div className='container'>
            <div class="row">
                    <div class="col-sm-12 col-md-4 col-lg-4">
                        <h5>Fitness Heroes</h5>
                        <h6>“Strength does not come from physical capacity. It comes from an indomitable will.”</h6>
                        <div className=''>
                        <img src={facebook} width={20} alt="" />
                        <img src={instagram} width={20} alt="" />
                        <img src={twitter} width={20} alt="" />
                        </div>
            </div>
                    <div class="col-sm-12 col-md-4 col-lg-4">
                        <h5>Menu</h5>
                        <Link className='text-decoration-none text-dark' to={<Home></Home>}>Home</Link>
                        <Link className='text-decoration-none text-dark' to={<About></About>}> About</Link>
                        <Link className='text-decoration-none text-dark' to={<Blog></Blog>}> Blog</Link>
            </div>
                    <div class="col-sm-12 col-md-4 col-lg-4">
                        <img src={location} width={20} alt="" /> Bangladesh
                        <br /> <br />
                        <img src={phone} width={20} alt="" /> +88 01234567890
                        <br /> <br />
                        <img src={mail} width={20} alt="" /> abc@gmail.com
            </div>
            </div>
            
        </div>
            <p className='text-center mt-4'><small>Copyright © { year}</small></p>
        </footer>
    );
};

export default Footer