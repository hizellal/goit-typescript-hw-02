import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

interface ISearchBarProps {
  onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: ISearchBarProps) {
  const [query, setQuery] = useState<string>("");
  const toastId: string = "id-toast";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (query.trim() === "") {
      toast.success("Please, enter text to search ", {
        id: toastId,
        duration: 2500,
        position: "top-right",
        removeDelay: 500,
        className: "toast",
        icon: "!",
      });

      return;
    }
    onSubmit(query);

    setQuery("");
  };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <header className={css.header}>
        <form className={css.form} onSubmit={handleSubmit}>
          <input
            onChange={handleInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="text"
            value={query}
          />
          <button className={css.button} type="submit">
            Search
          </button>
          <Toaster
            toastOptions={{
              style: {
                padding: "6px",
                color: "rgb(230, 223, 223)",
                backgroundColor: "rgb(56, 53, 53)",
              },
            }}
          />
        </form>
      </header>
    </>
  );
}