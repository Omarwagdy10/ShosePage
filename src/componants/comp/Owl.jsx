import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css'; 
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './../style/Footer.css'; 
import img1 from  './../imgs/OWl-img/gratis-png-zapatillas-adidas-superstar-en-blanco-y-negro-zapatillas-adidas-superstar-zapatillas-adidas-originals-adidas-thumbnail-removebg-preview.png'
import img2 from './../imgs/OWl-img/gratis-png-zapatillas-de-deporte-negras-sin-par-zapatillas-de-skate-zapatillas-nike-adidas-unas-zapatillas-deportivas-thumbnail-removebg-preview.png'
import img3 from './../imgs/OWl-img/png-transparent-black-dress-shirt-t-shirt-dress-shirt-clothing-black-dress-shirt-tshirt-black-formal-wear-thumbnail.png'
import img4 from './..//imgs/OWl-img/png-transparent-t-shirt-polo-shirt-clothing-sleeve-black-t-shirt-black-crew-neck-t-shirt-tshirt-fashion-cloth-thumbnail.png' 
import img5 from './../imgs/OWl-img/1_tAZ0DsBYgXTsn2BBLxlIIg-removebg-preview.png'
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";


function Owl() {
  return (
    <div className='Footer'>

    <div className='Footer-Ls'>
    <OwlCarousel className='owl-theme Owl1' items={1} loop margin={10} autoPlay={true} >
    <div class='item'>
    
    <div className='item-img'>
      <img src={img1} alt=''/>

    </div>

    <div className='item-data'>
    <h1>white shose</h1>

    <div className='item-data-rate'>
      <img src={img5} alt=''/>
    </div>
    <div className='item-data-price'>
    <p className='p3'>50$</p>
    <p className='old-price'><del>50$</del></p>

    </div>



    </div>


    </div>


    <div class='item'>
    
    <div className='item-img'>
      <img src={img2} alt=''/>

    </div>

    <div className='item-data'>
    <h1>Black shose</h1>

    <div className='item-data-rate'>
      <img src={img5} alt=''/>
    </div>
    <div className='item-data-price'>
    <p className='p3'>50$</p>
    <p className='old-price'><del>50$</del></p>

    </div>



    </div>


    </div>

</OwlCarousel>;

    </div>





    <div className='Footer-Rs w-100px'>
    <OwlCarousel className='owl-theme Owl2' items={4} loop margin={10} >
    <div class='item'>
    
    <div className='item-img'>
      <img src={img1} alt=''/>

      <div className='Sale'>
        <p>Sale</p>
      </div>

      <div className='img-cover'>
      <CiHeart />
      <CiShoppingCart />
      <CiUser />
      </div>

    </div>

    <div className='item-data'>
    <h1> white shose</h1>
    <p className='Lorem'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>

    <div className='item-data-rate'>
      <img src={img5} alt=''/>
    </div>
    <div className='item-data-price'>
    <p className='p3'>50$</p>
    <p className='old-price'><del>50$</del></p>
    <div className='Add-button'>
      <button className='AddtoCart'>AddtoCart</button>
    </div>

    </div>



    </div>


    </div>

    <div class='item'>
    
    <div className='item-img'>
      <img src={img2} alt=''/>
      <div className='Hote'>
        <p>Hote</p>
      </div>
      <div className='img-cover'>
      <CiHeart />
      <CiShoppingCart />
      <CiUser />
      </div>


    </div>

    <div className='item-data'>
    <h1>Black shose</h1>
    <p className='Lorem'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>


    <div className='item-data-rate'>
      <img src={img5} alt=''/>
    </div>
    <div className='item-data-price'>
    <p className='p3'>50$</p>
    <p className='old-price'><del>50$</del></p>
    <div className='Add-button'>
      <button className='AddtoCart'>AddtoCart</button>
    </div>

    </div>



    </div>


    </div>

    <div class='item'>
    
    <div className='item-img'>
      <img src={img3} alt=''/>
      <div className='Best'>
        <p>Best</p>
      </div>
      <div className='img-cover'>
      <CiHeart />
      <CiShoppingCart />
      <CiUser />
      </div>


    </div>

    <div className='item-data'>
    <h1>shirt</h1>
    <p className='Lorem'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>


    <div className='item-data-rate'>
      <img src={img5} alt=''/>
    </div>
    <div className='item-data-price'>
    <p className='p3'>50$</p>
    <p className='old-price'><del>50$</del></p>
    <div className='Add-button'>
      <button className='AddtoCart'>AddtoCart</button>
    </div>

    </div>



    </div>


    </div>

    <div class='item'>
    
    <div className='item-img'>
      <img src={img4} alt=''/>
      <div className='img-cover'>
      <CiHeart />
      <CiShoppingCart />
      <CiUser />
      </div>


    </div>

    <div className='item-data'>
    <h1>T-shirt</h1>
    <p className='Lorem'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>

    <div className='item-data-rate'>
      <img src={img5} alt=''/>
    </div>
    <div className='item-data-price'>
    <p className='p3'>50$</p>
    <p className='old-price'><del>50$</del></p>
    <div className='Add-button'>
      <button className='AddtoCart'>AddtoCart</button>
    </div>

    </div>



    </div>


    </div>



</OwlCarousel>;

    </div>
    <div className='Footer-Rs w-800px'>
    <OwlCarousel className='owl-theme Owl2' items={4} loop margin={10} >
    <div class='item'>
    
    <div className='item-img'>
      <img src={img1} alt=''/>

      <div className='Sale'>
        <p>Sale</p>
      </div>

      <div className='img-cover'>
      <CiHeart />
      <CiShoppingCart />
      <CiUser />
      </div>

    </div>

    <div className='item-data'>
    <h1> white shose</h1>
    <p className='Lorem'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>

    <div className='item-data-rate'>
      <img src={img5} alt=''/>
    </div>
    <div className='item-data-price'>
    <p className='p3'>50$</p>
    <p className='old-price'><del>50$</del></p>
    <div className='Add-button'>
      <button className='AddtoCart'>AddtoCart</button>
    </div>

    </div>



    </div>


    </div>

    <div class='item'>
    
    <div className='item-img'>
      <img src={img2} alt=''/>
      <div className='Hote'>
        <p>Hote</p>
      </div>
      <div className='img-cover'>
      <CiHeart />
      <CiShoppingCart />
      <CiUser />
      </div>


    </div>

    <div className='item-data'>
    <h1>Black shose</h1>
    <p className='Lorem'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>


    <div className='item-data-rate'>
      <img src={img5} alt=''/>
    </div>
    <div className='item-data-price'>
    <p className='p3'>50$</p>
    <p className='old-price'><del>50$</del></p>
    <div className='Add-button'>
      <button className='AddtoCart'>AddtoCart</button>
    </div>

    </div>



    </div>


    </div>

    <div class='item'>
    
    <div className='item-img'>
      <img src={img3} alt=''/>
      <div className='Best'>
        <p>Best</p>
      </div>
      <div className='img-cover'>
      <CiHeart />
      <CiShoppingCart />
      <CiUser />
      </div>


    </div>

    <div className='item-data'>
    <h1>shirt</h1>
    <p className='Lorem'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>


    <div className='item-data-rate'>
      <img src={img5} alt=''/>
    </div>
    <div className='item-data-price'>
    <p className='p3'>50$</p>
    <p className='old-price'><del>50$</del></p>
    <div className='Add-button'>
      <button className='AddtoCart'>AddtoCart</button>
    </div>

    </div>



    </div>


    </div>

    <div class='item'>
    
    <div className='item-img'>
      <img src={img4} alt=''/>
      <div className='img-cover'>
      <CiHeart />
      <CiShoppingCart />
      <CiUser />
      </div>


    </div>

    <div className='item-data'>
    <h1>T-shirt</h1>
    <p className='Lorem'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>

    <div className='item-data-rate'>
      <img src={img5} alt=''/>
    </div>
    <div className='item-data-price'>
    <p className='p3'>50$</p>
    <p className='old-price'><del>50$</del></p>
    <div className='Add-button'>
      <button className='AddtoCart'>AddtoCart</button>
    </div>

    </div>



    </div>


    </div>



</OwlCarousel>;

    </div>
    <div className='Footer-Rs w-550px'>
    <OwlCarousel className='owl-theme Owl2' items={4} loop margin={10} >
    <div class='item'>
    
    <div className='item-img'>
      <img src={img1} alt=''/>

      <div className='Sale'>
        <p>Sale</p>
      </div>

      <div className='img-cover'>
      <CiHeart />
      <CiShoppingCart />
      <CiUser />
      </div>

    </div>

    <div className='item-data'>
    <h1> white shose</h1>
    <p className='Lorem'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>

    <div className='item-data-rate'>
      <img src={img5} alt=''/>
    </div>
    <div className='item-data-price'>
    <p className='p3'>50$</p>
    <p className='old-price'><del>50$</del></p>
    <div className='Add-button'>
      <button className='AddtoCart'>AddtoCart</button>
    </div>

    </div>



    </div>


    </div>

    <div class='item'>
    
    <div className='item-img'>
      <img src={img2} alt=''/>
      <div className='Hote'>
        <p>Hote</p>
      </div>
      <div className='img-cover'>
      <CiHeart />
      <CiShoppingCart />
      <CiUser />
      </div>


    </div>

    <div className='item-data'>
    <h1>Black shose</h1>
    <p className='Lorem'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>


    <div className='item-data-rate'>
      <img src={img5} alt=''/>
    </div>
    <div className='item-data-price'>
    <p className='p3'>50$</p>
    <p className='old-price'><del>50$</del></p>
    <div className='Add-button'>
      <button className='AddtoCart'>AddtoCart</button>
    </div>

    </div>



    </div>


    </div>

    <div class='item'>
    
    <div className='item-img'>
      <img src={img3} alt=''/>
      <div className='Best'>
        <p>Best</p>
      </div>
      <div className='img-cover'>
      <CiHeart />
      <CiShoppingCart />
      <CiUser />
      </div>


    </div>

    <div className='item-data'>
    <h1>shirt</h1>
    <p className='Lorem'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>


    <div className='item-data-rate'>
      <img src={img5} alt=''/>
    </div>
    <div className='item-data-price'>
    <p className='p3'>50$</p>
    <p className='old-price'><del>50$</del></p>
    <div className='Add-button'>
      <button className='AddtoCart'>AddtoCart</button>
    </div>

    </div>



    </div>


    </div>

    <div class='item'>
    
    <div className='item-img'>
      <img src={img4} alt=''/>
      <div className='img-cover'>
      <CiHeart />
      <CiShoppingCart />
      <CiUser />
      </div>


    </div>

    <div className='item-data'>
    <h1>T-shirt</h1>
    <p className='Lorem'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>

    <div className='item-data-rate'>
      <img src={img5} alt=''/>
    </div>
    <div className='item-data-price'>
    <p className='p3'>50$</p>
    <p className='old-price'><del>50$</del></p>
    <div className='Add-button'>
      <button className='AddtoCart'>AddtoCart</button>
    </div>

    </div>



    </div>


    </div>



</OwlCarousel>;

    </div>












    </div>
  )
}

export default Owl