import React from "react"
import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";


/** Carousel: displays images and arrows to navigate through them
 * 
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 * 
 * State:
 * - currCardIdx: integer for current card index
 * 
 * App --> Carousel --> Card
 */
 function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = photos[currCardIdx];
  const total = photos.length;

  //Increments currCardIdx state by 1
  function goForward() {
    setCurrCardIdx(currCardIdx + 1);
    //Need to reset back to 0 when reach end of array
  }

  //Decrements currCardIdx state by 1
  function goBackward() {
    setCurrCardIdx(currCardIdx - 1);
    //Need to reset back to 0 when reach end of array
  }

  const leftArrow = currCardIdx === 0 ? null :  <i
  className="bi bi-arrow-left-circle"
  onClick={goBackward} //fix this to goBack
/> 

const rightArrow = currCardIdx === total-1 ? null :  <i
  className="bi bi-arrow-right-circle"
  onClick={goForward} //fix this to goBack
/> 

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
    {leftArrow}
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
    {rightArrow}
      </div>
    </div>
  );
}

export default Carousel;
