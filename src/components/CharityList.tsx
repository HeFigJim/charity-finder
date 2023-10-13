import { IPost } from "../models/IPost";
import Charity from "./Charity";
type CharityProps = {
  charities: IPost[];
};

const CharityList = ({ charities }: CharityProps) => {
  return (
    <ul className=" grid grid-cols-1 md:grid-cols-4 gap-4">
      {charities.map((charity) => (
        <li key={charity.ein}>
          <Charity id={charity.ein} listItem={charity} />
        </li>
      ))}
    </ul>
  );
};

export default CharityList;
