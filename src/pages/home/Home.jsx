import { useEffect } from "react";
import useGetData from "../../hooks/useGetData";
import "./styles/Home.css";
import CategoryItem from "./components/CategoryItem";
import ImageCarousel from "./components/ImageCarousel";
const Home = () => {
  const { data, loading, error } = useGetData("/api/categories");
  const images = [
    "https://res.cloudinary.com/rk03/image/upload/v1684654679/rktech/1320x600-RiseAgainstEvil-min-1320x600_eoqbg7.jpg",
    "https://res.cloudinary.com/rk03/image/upload/v1684654679/rktech/1320x600-Oracle-AIR-min-1320x600_hswu26.jpg",
    "https://res.cloudinary.com/rk03/image/upload/v1684654679/rktech/1320x600-PS5-min-1320x600_x4vxbr.jpg",
  ];

  return (
    <>
      <ImageCarousel {...{ images }} />
      <div className="category-container">
        <h2>Categories</h2>
        <div className="category-items">
          {!loading &&
            !error &&
            data.categories.map((item) => {
              return <CategoryItem {...item} key={item._id} />;
            })}
        </div>
      </div>
    </>
  );
};
export default Home;
