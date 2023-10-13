import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

type HeaderProps = {
  setSociety: React.Dispatch<React.SetStateAction<string>>;
};
const Header = ({ setSociety }: HeaderProps) => {
  return (
    <div>
      <h1 className="text-center text-2xl">Charity Finder</h1>
      <NavBar />

      <SearchBar setSociety={setSociety} />
    </div>
  );
};

export default Header;
