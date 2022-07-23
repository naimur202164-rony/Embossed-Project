import React from "react";
import Carousel from "react-elastic-carousel";
import logo1 from "../../../images/slider-1.png";
import logo2 from "../../../images/slider-2.png";
import logo3 from "../../../images/slider-3.png";
import logo4 from "../../../images/slider-4.png";
import logo5 from "../../../images/slider-5.png";
// import "../GlobalCarousel/GlobalCarousel.css";
import Item from "./Items";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 360, itemsToShow: 4 },
];

const CarouselSlider = ({setImage}) => {
  return (
    <>
     
      <div>
        <Carousel
          pagination={false}
          breakPoints={breakPoints}
        >
          <Item>
            <img
            onClick={() => setImage("first")}
              className="h-20 cursor-pointer"
              src={logo1}
              alt=""
            />
          </Item>
          <Item>
            <img
            onClick={() => setImage("second")}
              className="h-20 cursor-pointer"
              src={logo2}
              alt=""
            />
          </Item>
          <Item>
            <img
            onClick={() => setImage("third")}
              className="h-20 cursor-pointer"
              src={logo3}
              alt=""
            />
          </Item>
          <Item>
            <img
            onClick={() => setImage("forth")}
              className="h-20 cursor-pointer"
              src={logo4}
              alt=""
            />
          </Item>
          <Item>
            <img
            onClick={() => setImage("fifth")}
              className="h-20 cursor-pointer"
              src={logo5}
              alt=""
            />
          </Item>
          <Item>
            <img
            onClick={() => setImage("sixth")}
              className="h-20 cursor-pointer"
              src={logo1}
              alt=""
            />
          </Item>
        </Carousel>
      </div>
    </>
  );
};

export default CarouselSlider;