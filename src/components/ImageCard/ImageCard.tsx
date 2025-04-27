import css from "./ImageCard.module.css";
import { IPhoto } from "../../types/photo";
import { FC } from 'react';

interface IPhotoItem {
  item: IPhoto;
}

export const ImageCard: FC<IPhotoItem> = ({ item }) => {
  return (
    <div className={css.boxImageCard}>
      <div className={css.boxImg}>
        <img src={item.urls.small} alt={item.description || "Picture"} />
      </div>
      <div className={css.boxText}>
        <p>Likes : {item.likes}</p>
        <p>Author: {item.user.name || "-"}</p>
      </div>
    </div>
  );
};