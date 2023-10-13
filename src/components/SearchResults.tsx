import { Link } from "react-router-dom";

type ResultsProps = {
  list: string[];
  setSociety: React.Dispatch<React.SetStateAction<string>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const SearchResults = ({ list, setSociety, setSearch }: ResultsProps) => {
  return (
    <div className=" w-full md:w-3/4  bg-slate-400 p-2 absolute top-10 rounded-lg">
      <ul className="grid grid-cols-3 md:grid-cols-4 gap-x-2">
        {list.map((cause, i) => (
          <li key={i} className="w-60">
            <Link to="/">
              <button
                onClick={() => {
                  setSociety(cause);
                  setSearch("");
                }}
                className="dark:hover:bg-slate-50 dark:hover:text-black hover:bg-slate-300 rounded-lg "
              >
                {cause}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
