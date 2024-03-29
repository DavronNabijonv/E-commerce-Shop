import React from 'react';
import Slider from "react-slick";
import Tdata from './Tdata';
import "./topcart.css"

const TopCart = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true
      };


    return (
        <>
        <Slider {...settings}>
            {
                Tdata.map((value, index)=> {
                    return(
                        <>
                        <div className="topCate product" key={index}>
                            <div className="nametop d-flex">
                                <span className="tleft">{value.para}</span>
                                <span className="tright">{value.desc}</span>
                            </div>

                            <div className="img">
                                <img src={value.cover} alt="topcartImage" />
                            </div>
                        </div>
                        </>
                    )
                })
            }
        </Slider>
        </>
    );
}

export default TopCart;
