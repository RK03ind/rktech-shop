import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = ({ images }) => {
  return (
    <Carousel
      showStatus={false}
      showArrows={false}
      emulateTouch
      showThumbs={false}
      infiniteLoop
      autoPlay
      interval={3000}
      swipeable
    >
      {images.map((image) => {
        return <img src={image} alt="carousel" />;
      })}
    </Carousel>
  );
};

export default ImageCarousel;
