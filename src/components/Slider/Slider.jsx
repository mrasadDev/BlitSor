import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import "./style.css"

const giftImages = [
  { id: 1, image: "/images/image (1).png" },
  { id: 2, image: "/images/image (2).png" },
  { id: 3, image: "/images/image (3).png" },
  { id: 4, image: "/images/image (4).png" },
  { id: 5, image: "/images/image (4).png" },
  { id: 6, image: "/images/image (4).png" },
  { id: 7, image: "/images/image (4).png" },
  { id: 8, image: "/images/image (4).png" },
];

export default function SliderComponent() {
  return (
    <Carousel
      withIndicators
      height={165}
      slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
      slideGap={{ base: 0, sm: 'md' }}
      align="center"
      containScroll="keepSnaps"
      loop
    >
      {giftImages.map((item) => (
        <Carousel.Slide key={item.id}>
          <div className="w-full h-full d-flex align-items-center justify-content-center">
            <img
              className="carousal-img"
              src={item.image}
            />
          </div>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
