import IntroImg from "./IntroImg";
import { IPost } from "../models/IPost";
import CharityList from "./CharityList";

type HomePageProps = {
  charities: IPost[];
  loading: boolean;
  error: string;
};

const Homepage = ({ charities, loading, error }: HomePageProps) => {
  return (
    <>
      <IntroImg />
      {loading ? <p>Loading...</p> : <CharityList charities={charities} />}
      {error && <p className="error">{error}</p>}
    </>
  );
};

export default Homepage;
