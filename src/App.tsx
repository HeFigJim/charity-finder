import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./components/Homepage";
import Error from "./components/Error";
import Favorites from "./components/Favorites";
import CharityDetail from "./components/CharityDetail";
import axios from "axios";
import { useEffect, useState } from "react";
import { IPost, NonProfitResponse } from "./models/IPost";
const key = import.meta.env.VITE_API_KEY;
const API_URL = "https://partners.every.org/v0.2/search/";

function App() {
  const defaultCharity: IPost[] = [];
  const [charities, setCharities] = useState<IPost[]>(defaultCharity);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState("");
  const [society, setSociety] = useState("cancer");

  useEffect(() => {
    const Dynamic_URL = API_URL + `${society}?apiKey=${key}`;
    axios
      .get<NonProfitResponse>(Dynamic_URL)
      .then((response) => {
        setCharities(response.data.nonprofits);
        setLoading(false);
      })
      .catch((ex) => {
        const error =
          ex.response.status === 404
            ? "Resource Not found"
            : "An unexpected error has occurred";
        setError(error);
        setLoading(false);
      });
  }, [society]);

  return (
    <Routes>
      <Route path="/" element={<Layout setSociety={setSociety} />}>
        <Route
          index
          element={
            <Homepage charities={charities} loading={loading} error={error} />
          }
        />
        <Route path=":id" element={<CharityDetail charities={charities} />} />
        <Route path="fav" element={<Favorites />} />
        <Route
          path="fav/:id"
          element={<CharityDetail charities={charities} />}
        />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
