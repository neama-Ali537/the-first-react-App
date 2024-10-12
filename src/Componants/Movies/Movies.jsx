import React, { useContext } from "react";
import { MediaContext } from "../../ConText/MediaContext";

import { Link } from "react-router-dom";


export default function Movies() {
  let { trendingMovies } = useContext(MediaContext);


  return (
    <>
      <div className="row container ">
        <h1 className="fs-3  font-monospace ">Trending Movies:</h1>
   
        {trendingMovies && trendingMovies.length  > 0
          ? trendingMovies.map((item, index) => (
              <div key={index} className="col-md-4 d-flex justify-content-center">
                <div className="col-md-8 ">
                <Link to={`/itemDetails/${item.id}/${item.media_type}`} className="text-decoration-none text-dark">
 
                <div className=" my-2 py-2 font">{item.title}</div>
                  {item.poster_path ? (
                    <img className="w-100 mt-2 rounded cursorpointer"
                      src={
                        "https://image.tmdb.org/t/p/w500/" + item.poster_path
                      }
                      alt=""
                    />
                  ) : (
                    ""
                  )}
                  </Link>
                </div>
                
              </div>
            ))
          : ""}
         
      </div>
    </>
  );
}
