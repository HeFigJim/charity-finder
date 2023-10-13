import { Link } from "react-router-dom";
import { NavLinks } from "../assets/data/Navlinks";

const NavBar = () => {
  return (
    <div>
      <ul className="flex  justify-end">
        {NavLinks.map((link, i) => (
          <li key={i} className="mx-2">
            <Link to={`${link.link}`}>{link.page}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
