import { IPhoto } from "../../types/photo";
import { ImageCard } from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import React from "react";

interface IImageGalleryProps {
  items: IPhoto[];
  onImageClick: (imageUrl: string) => void;
}
export const ImageGallery: React.FC<IImageGalleryProps> = ({
  items,
  onImageClick,
}) => {
  if (items.length === 0) {
    return;
  }
  return (
    <>
      <ul className={css.list}>
        {items.length > 0 &&
          items.map((item) => {
            return (
              <li
                key={item.id}
                onClick={() => onImageClick(item.urls.regular!)}
              >
                <ImageCard item={item} />
              </li>
            );
          })}
      </ul>
    </>
  );
};