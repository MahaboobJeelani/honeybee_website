import React from 'react'
import '../Cssfile/Body.css'
import productImage from '../Images/Ourproductimage.jpg'
import Carouselslider from './Carousel'
import { HiDotsHorizontal } from "react-icons/hi";
import { GiBeehive } from "react-icons/gi";
import { GiBee } from "react-icons/gi";
import { GiHoneyJar, GiHoneycomb, GiButterflyFlower, GiEmbrassedEnergy } from "react-icons/gi";
import { GiTreeBeehive } from "react-icons/gi";
import { Link } from 'react-router-dom';


const Body = () => {
    return (
        <div className='bodycontainer'>

            <div className='carousel'>
                <Carouselslider />
            </div>

            <div className='ourservices'>

                <div className='servicecontainer'>

                    <div className='contenttext'>
                        <h3>OUR SERVICES</h3>
                        <p>We harvest 100% pure, raw honey straight from the hive, ensuring the highest quality and natural sweetness.</p>
                    </div>

                    <div>
                        <div className='hexgonalcontainer'>

                            <div className='hexagonaltext'>

                                <div className='hexadesign'>
                                    <div className="hexagon">
                                        <div className="hexagoninner">
                                            <GiBeehive className='honeyproductionlogo' />
                                        </div>
                                    </div>
                                </div>

                                <h3>Honey production</h3>
                                <p>The honey is then stored in the honeycomb within the hive, providing a vital food source for the bees</p>

                            </div>

                            <HiDotsHorizontal className='HiDotsHorizontal' />
                            <div className='hexagonaltext'>
                                <div className='hexadesign'>
                                    <div className="hexagon">
                                        <div className="hexagoninner">
                                            <GiBee className='honeyproductionlogo' />
                                        </div>
                                    </div>
                                </div>
                                <h3>Beekeeping</h3>
                                <p>Our farm provides a safe haven for bees to thrive and produce pure, high-quality honey, connect with us.</p>
                            </div>
                            <HiDotsHorizontal className='HiDotsHorizontal' />
                            <div className='hexagonaltext'>
                                <div className='hexadesign'>
                                    <div className="hexagon">
                                        <div className="hexagoninner">
                                            <GiHoneyJar className='honeyproductionlogo' />
                                        </div>
                                    </div>
                                </div>
                                <h3>Honey shop</h3>
                                <p>Our honey is harvested with care, ensuring that each jar captures the rich flavors and natural goodness bees</p>
                            </div>
                            <HiDotsHorizontal className='HiDotsHorizontal' />
                            <div className='hexagonaltext'>
                                <div className='hexadesign'>
                                    <div className="hexagon">
                                        <div className="hexagoninner">
                                            <GiTreeBeehive className='honeyproductionlogo' />
                                        </div>
                                    </div>
                                </div>
                                <h3>Swarm removal</h3>
                                <p>We use safe techniques to collect the swarm and relocate it to a suitable habitat where the bees can continue their essential role.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='servicebtn'>
                    <Link to='/honey/products'>
                        <button className="button-btn viewproductsbtn">View Products</button>
                    </Link>
                </div> */}
            </div>

            {/* ==================================== */}
            <div className='products'>
                <div className='bodyproduct'>
                    <h3>WHY CHOOSE OUR PRODUCTS</h3>
                </div>
                <div className='productscontainer'>
                    <div className='box'>

                        <div className='circleproductcontainer'>

                            <div className='circleproduct'>
                                <GiBee className='giicon' />
                            </div>

                            <div className=''>
                                <h5>Natural Bees</h5>
                                <p>Discover the essential role and beauty of natural bees today.</p>
                            </div>
                        </div>

                        <div className='circleproductcontainer'>
                            <div className='circleproduct'>
                                <GiButterflyFlower className='giicon' />
                            </div>
                            <div>
                                <h5>Flowers Products</h5>
                                <p>Experience the beauty and benefits of nature's flowers.</p>
                            </div>
                        </div>

                        <div className='circleproductcontainer'>
                            <div className='circleproduct'>
                                <GiHoneycomb className='giicon' />
                            </div>
                            <div>
                                <h5>Honey Comb</h5>
                                <p>Handcrafted Honey Comb for a Pure and Sweet Experience.</p>
                            </div>
                        </div>


                    </div>

                    <div className='box ourproductsimage'>
                        <img src={`${productImage}`} alt="" width='400px' />
                    </div>

                    <div className='box'>
                        <div className='circleproductcontainer'>
                            <div className='circleproduct'>
                                <GiTreeBeehive className='giicon' />
                            </div>
                            <div>
                                <h5>Bees Seal Cells</h5>
                                <p>Bees seal cells with precision for pure honey production.</p>
                            </div>
                        </div>

                        <div className='circleproductcontainer'>
                            <div className='circleproduct'>
                                <GiHoneyJar className='giicon' />
                            </div>
                            <div>
                                <h5>100% Natural Honey</h5>
                                <p>All our products are 100% natural, pure, and organic.</p>
                            </div>
                        </div>

                        <div className='circleproductcontainer'>
                            <div className='circleproduct'>
                                <GiEmbrassedEnergy className='giicon' />
                            </div>
                            <div>
                                <h5>Increase Immunity</h5>
                                <p>Boost your immunity with our natural honey products.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='servicebtn'>
                    <Link to='/honey/products'>
                        <button className="button-btn viewproductsbtn">View Products</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Body
