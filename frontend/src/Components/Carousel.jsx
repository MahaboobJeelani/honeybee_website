import SliderOne from '../Images/SliderImg.jpg';
import SliderImg2 from '../Images/SliderImg2.jpg';
import SliderImg3 from '../Images/SliderImg3.png';
import React from 'react';
import '../Cssfile/Carousel.css'
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const CarouselSlider = () => {
    return (
        <div className='Carouselslider'>
            {/* showControls fade */}
            <MDBCarousel fade className='carouselcontainer'>

                <MDBCarouselItem>
                    <h2 className='slidertext slidertwo'>
                        Raw Honey, online shop.
                    </h2>
                    <div className='sliderbtn slidertwotext'>
                        <p>
                            Crafted with care, our honey brings nature’s finest flavors. Perfect for meals, drinks, and wellness.
                        </p>
                    </div>
                    <img src={SliderImg2} className='d-block w-100' alt='sliderone' />
                </MDBCarouselItem>

                <MDBCarouselItem className='sliderone'>
                    <h2 className='slidertext'>
                        Rich in flavor and goodness, our honey enhances your wellness..
                    </h2>

                    <div className='sliderbtn'>
                        <button className='slidebtn' role='button'>Buy Now</button>
                        <p>
                            Here at <b>HoneyBee Farm</b>, we truly believe that, “Busy Bees Make Tasty Honey”. We never rush our ladies and only harvest when they tell us to.
                        </p>
                    </div>
                    <img src={SliderOne} className='d-block w-100' alt='sliderone' />
                </MDBCarouselItem>

                <MDBCarouselItem>
                    <h2 className='slidertext'>
                        Finest Honey Products for Your Enjoyment.
                    </h2>
                    <div className='sliderbtn sliderthree'>
                        <p>
                            Discover our finest honey, crafted for your delight, health benefits, and sweet moments to savor, enjoy, and make every day special.
                        </p>
                        <Link to='/honey/products'>
                            <button className="animated">View Products</button>
                        </Link>
                    </div>
                    <img src={SliderImg3} className='d-block w-100' alt='sliderone' />
                </MDBCarouselItem>
            </MDBCarousel>
        </div>
    );
}

export default CarouselSlider;
