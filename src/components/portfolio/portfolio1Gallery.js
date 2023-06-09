import { useState } from "react";
import React from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/dist/styles.css";
import { images, CustomImage } from "./photos";

const slides = images.map(({ original, width, height }) => ({
  src: original,
  width,
  height,
}));

export default function PhotoGallery() {
  const [index, setIndex] = useState(-1);

  const handleClick = (index, item) => setIndex(index);

  return (
    <div className="portfolio-details__gallery">
      <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
        maxRows={3}
        // margin={0}   This can be used to set margin between pictures default =2
      />

      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </div>
  );
}
