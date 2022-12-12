import React from "react";
import MyCard from "./MyCard";
import "./simplecarousel.css";
import img from "./img2.jpg";
function SimpleCarousel() {
  // const data = [
  //   { id: 1, src: "/home/josh/my-demo/src/components/img1.jpg" },
  //   { id: 2, src: "/home/josh/my-demo/src/components/img2.jpg" },
  //   { id: 3, src: "/home/josh/my-demo/src/components/img3.jpg" },
  //   { id: 4, src: "/home/josh/my-demo/src/components/img4.jpg" },
  //   { id: 5, src: "/home/josh/my-demo/src/components/img5.jpg" },
  //   { id: 6, src: "/home/josh/my-demo/src/components/img1.jpg" },
  //   { id: 7, src: "/home/josh/my-demo/src/components/img2.jpg" },
  //   { id: 8, src: "/home/josh/my-demo/src/components/img3.jpg" },
  //   { id: 9, src: "/home/josh/my-demo/src/components/img4.jpg" },
  //   { id: 10, src: "/home/josh/my-demo/src/components/img5.jpg" },
  //   { id: 11, src: "/home/josh/my-demo/src/components/img1.jpg" },
  // ];
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  let str2 = img;
  const loadPrevious = () => {
    let box: any = document.querySelector(".product-container");

    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    console.log(width, box.scrollLeft - width);
  };

  const loadNext = () => {
    let box: any = document.querySelector(".product-container");

    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
    console.log(width);

    console.log(str2);
  };

  return (
    <div>
      <section className="product-carousel">
        <button className="btn-prev" onClick={loadPrevious}>
          <p>&lt;</p>
        </button>
        <button className="btn-next" onClick={loadNext}>
          <p>&gt;</p>
        </button>
        <div className="product-container" id="mycontainer">
          {arr.map((x) => (
            <MyCard cardno={x.toString()} imageSrc={str2} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default SimpleCarousel;
