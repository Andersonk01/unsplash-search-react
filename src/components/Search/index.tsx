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
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search image</label>
        <input id="search" value={search} onChange={handleInput} />
      </form>
    </div>
  );
};
