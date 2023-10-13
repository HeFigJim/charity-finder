import { Outlet } from "react-router-dom";
import Header from "./Header";

type HeaderProps = {
  setSociety: React.Dispatch<React.SetStateAction<string>>;
};

const Layout = ({ setSociety }: HeaderProps) => {
  return (
    <div className="max-w-6xl min-h-screen bg-red">
      <Header setSociety={setSociety} />
      <Outlet />
    </div>
  );
};

export default Layout;
