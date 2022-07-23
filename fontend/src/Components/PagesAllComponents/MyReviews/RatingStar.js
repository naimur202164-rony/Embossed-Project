import React from 'react';
import { FaStar } from "react-icons/fa";
const RatingStar = () => {
    const [currentValue, setCurrentValue] = React.useState(0);
    const [hoverValue, setHoverValue] = React.useState(undefined);
    const stars = Array(5).fill(0);
  
    const handleClick = (value) => {
      setCurrentValue(value);
    };
  
    const handleMouseOver = (newHoverValue) => {
      setHoverValue(newHoverValue);
    };
  
    const handleMouseLeave = () => {
      setHoverValue(undefined);
    };
  
    return (
        <div>
             <div className="flex flex-row">
                    {stars.map((_, index) => {
                      return (
                        <FaStar
                          key={index}
                          size={18}
                          onClick={() => handleClick(index + 1)}
                          onMouseOver={() => handleMouseOver(index + 1)}
                          onMouseLeave={handleMouseLeave}
                          color={
                            (hoverValue || currentValue) > index
                              ? "orange"
                              : "grey"
                          }
                          className="mr-1.5 cursor-pointer"
                        />
                      );
                    })}
                    
                  </div>
        </div>
    );
};

export default RatingStar;