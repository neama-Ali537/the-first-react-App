import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const MediaContext = createContext("");

export default function MediaContextProvider(props) {
  let [trendingMovies, setTrendingMovies] = useState([]);
  let [trendingTv, setTrendingTv] = useState([]);
  let [trendingPeople, setTrendingPeople] = useState([]);

  async function getTrending(mediaType, callback) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=f1aca93e54807386df3f6972a5c33b50`
    );
    callback(data.results);
  }
  useEffect(() => {
    getTrending("movie", setTrendingMovies);
    getTrending("tv", setTrendingTv);
    getTrending("person", setTrendingPeople);
  }, []);
  return (
    <>
      <MediaContext.Provider
        value={{ trendingMovies, trendingTv, trendingPeople }}
      >
        {props.children}
      </MediaContext.Provider>
    </>
  );
}
