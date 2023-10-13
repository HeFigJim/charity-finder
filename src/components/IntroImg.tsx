import intro from "../assets/images/intro.jpeg";

const IntroImg = () => {
  return (
    <div className="w-full h-[400px] bg-cover mb-4">
      <img
        src={intro}
        alt="Charity Picture"
        className="h-[400px] w-full object-cover"
      />
    </div>
  );
};

export default IntroImg;
