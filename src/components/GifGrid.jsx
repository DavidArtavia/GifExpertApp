import { useEffect, useState } from "react";
import { getGif } from "../helper/getGifs";

export const GifGrid = ({category} ) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    console.log(category);
    
    const newImages = await getGif(category);    
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <div key={category}>
        <h3>{category}</h3>

        <ol>
          {images.map(({ id, title, url }) => (
            <li key={id}>{title}</li>
          ))}
        </ol>
      </div>
    </>
  );
};
