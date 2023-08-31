import "./styles.css";
import { ChangeEvent, FormEvent, useState } from "react";

type TSearch = {
  onSubmit: (search: string) => void;
};

export const SearchComponent = ({ onSubmit }: TSearch): JSX.Element => {
  const [search, setSearch] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(search);
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          className="search-input"
          value={search}
          onChange={handleInput}
          placeholder="Pesquisar imagens...Enter"
        />
      </form>
    </div>
  );
};
