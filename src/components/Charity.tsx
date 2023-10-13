import { Link } from "react-router-dom";
import { IPost } from "../models/IPost";

type CharityProps = {
  id: string;
  listItem: IPost;
};

const Charity = ({ id, listItem }: CharityProps) => {
  return (
    <Link to={id}>
      <div className="w-full h-full shadow-2xl dark:bg-slate-600 mx-auto">
        <div className="flex border-b-2 border-white">
          <img src={listItem.logoUrl} alt="logo" />
          <h2 className="ml-2">{listItem.name}</h2>
        </div>
        <address className="text-center">{listItem.location}</address>
      </div>
    </Link>
  );
};

export default Charity;
