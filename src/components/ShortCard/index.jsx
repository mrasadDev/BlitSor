import { Image, Text } from "@mantine/core";
import "./style.css";

export default function index({bgImg,title,views,watch,category }) {
  return (
    <>
      <Image
        width={150}
        height={450}
        mx="auto"
        radius={40}
        src={bgImg}
        alt="Random image"
      />
      <div className="category-detail">
        <Text className="category-name">{title}</Text>
        <span className="views">{views}</span>
        <span className="watch">{watch}</span>
        <Text className="category">{category}</Text>
      </div>
    </>
  );
}
