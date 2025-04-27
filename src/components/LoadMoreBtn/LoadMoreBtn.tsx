import css from "./LoadMoreBtn.module.css";

interface ILoadMoreBtnProps {
  onClick: () => void;
}

export default function LoadMoreBtn({ onClick }: ILoadMoreBtnProps) {
  return (
    <button className={css.btnMore} onClick={onClick}>
      Load more
    </button>
  );
}