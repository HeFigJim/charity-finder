import { useParams } from "react-router-dom";
import { IPost } from "../models/IPost";

type CharityDetailProps = {
  charities: IPost[];
};

const CharityDetail = ({ charities }: CharityDetailProps) => {
  const { id } = useParams();
  const Organization = charities.filter((charity) => charity.ein === id);
  const Institution = Organization[0];
  const data: IPost[] = JSON.parse(localStorage.getItem("favorites") || "[]");

  const handleSetFavorite = () => {
    const repeated = data.find(
      (institution) => institution.name === Institution.name
    );
    if (!repeated) {
      data.push(Institution);
      localStorage.setItem("favorites", JSON.stringify(data));
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 md:justify-between">
      <div className="shadow-xl w-full">
        <img
          src={Institution.coverImageUrl}
          alt="Cover Image"
          className="mb-4"
        />
        {/* title card */}
        <div className="px-6">
          <section className="flex items-center mb-4">
            <img src={Institution.logoUrl} alt="Cover Image" />
            <h1 className="ml-4 text-3xl">{Institution.name}</h1>
          </section>
          {/* Info */}
          <address className="mb-4">{Institution.location}</address>
          <p className="mb-4"> {Institution.description}</p>
        </div>
      </div>

      <div className=" h-full w-full md:w-[20rem] text-white ">
        <div className=" w-full mx-auto">
          <button
            className="uppercase bg-green-800 w-full md:w-72 mb-4 mx-auto rounded-xl"
            onClick={handleSetFavorite}
          >
            add to favorites
          </button>

          <button className="uppercase bg-sky-600 w-full md:w-72 mb-4 mx-auto rounded-xl">
            <a href={Institution.profileUrl} target="_blank">
              check it in <span>Every.org</span>
            </a>
          </button>
          <div>
            <h2 className="mb-4 text-black">Tags:</h2>
            <ul className="grid mb-4">
              {Institution.tags.map((tag, i) => (
                <li
                  key={i}
                  className="text-center p-3 rounded-xl bg-amber-500 mb-2"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharityDetail;
