import CharityList from "./CharityList";

const Favorites = () => {
  const charities = JSON.parse(localStorage.getItem("favorites") as string);
  return (
    <>
      {charities ? (
        <CharityList charities={charities} />
      ) : (
        <p>No favorite charities have been added to your list</p>
      )}
    </>
  );
};

export default Favorites;
