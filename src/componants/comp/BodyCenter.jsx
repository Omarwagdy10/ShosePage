import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage'
import './../style/body-center.css'
import { CiHome } from "react-icons/ci";
import { CiShop } from "react-icons/ci";
import { IoLogoElectron } from "react-icons/io5";
import { GiRunningShoe } from "react-icons/gi";
import { BsWatch } from "react-icons/bs";
import { PiWhatsappLogo } from "react-icons/pi";
import { CiCreditCard1 } from "react-icons/ci";
import { IoIosContact } from "react-icons/io";
import img1 from './../imgs/pexels-alexander-krivitskiy-6439450.jpg'
import img2 from './../imgs/pexels-srini-12684557.jpg'
import img3 from './../imgs/pexels-галина-ласаева-10419180.jpg'



function BodyCenter() {
  return (
    <div className="body-center">

    <div className='Categories'>

    <Navbar expand="lg" className="">
      <Container className='containerr'>
        <Navbar className='cate-head'>Categories</Navbar>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto cate-nav-data  ">

            <div className='cate-data' >
            <CiHome />
              <p>Home</p>            
            </div>
            
            <div className='cate-data' >
            <CiShop />
              <p>Closes</p>            
            </div>

            <div className='cate-data' >
            <IoLogoElectron />

              <p>Electronics</p>            
            </div>

            <div className='cate-data' >
            <GiRunningShoe />
              <p>Shoes</p>            
            </div>
            
            <div className='cate-data' >
            <BsWatch />

              <p>Watchs</p>            
            </div>

            <div className='cate-data' >
            <PiWhatsappLogo />
              <p>Plog</p>            
            </div>

            <div className='cate-data' >
            <CiCreditCard1 />
              <p>Pages</p>    

            </div>

            <div className='cate-data' >
            <IoIosContact />
              <p>Contact</p>            
            </div>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    

        
    </div>

    <div className='bodyCenter'>

    <div className='body-img' >
    <Carousel fade>
      <Carousel.Item>
        <img src={img1} alt='' className='img1'></img>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img2} alt='' className='img1'></img>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img3} alt='' className='img1'></img>
      </Carousel.Item>
    </Carousel>

    </div>

    <div className='body-data-img'>

      <p className='p1'>Top Brands</p>
      <h1 className='h1'>New Collections</h1>
      <p className='p2'>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
      <button>Shop Now</button>


    </div>

    </div>


    </div>
  )
}

export default BodyCenter