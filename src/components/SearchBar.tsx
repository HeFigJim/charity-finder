import { useState } from "react";
import SearchResults from "./SearchResults";
import { causes } from "../assets/data/charities";

type HeaderProps = {
  setSociety: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar = ({ setSociety }: HeaderProps) => {
  const [search, setSearch] = useState("");

  return (
    <div className="relative">
      <form className="mb-3 xl:w-96" onSubmit={(e) => e.preventDefault()}>
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <input
            type="search"
            className="relative m-0 block flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-white dark:placeholder:text-neutral-200 dark:focus:border-primary"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search"
            aria-describedby="button-addon2"
          />
        </div>
      </form>
      {search === "" ? (
        ""
      ) : (
        <SearchResults
          list={causes.filter((cause) =>
            cause.toLowerCase().includes(search.toLowerCase())
          )}
          setSociety={setSociety}
          setSearch={setSearch}
        />
      )}
    </div>
  );
};

export default SearchBar;
