import Carousel from "../UI/Carousel";

export default function Hero() {
  return (
    <div className="relative mb-3">
      <Carousel
        baseWidth={300}
        autoplay={true}
        autoplayDelay={3000}
        pauseOnHover={true}
        loop={true}
        round={false}
      />
    </div>
  );
}
