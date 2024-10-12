import React, { useContext } from "react";
import { MediaContext } from "../../ConText/MediaContext";
import { Link } from "react-router-dom";

export default function Tv() {
  let { trendingTv } = useContext(MediaContext);
  return (
    <>
      <div className="row container">
        <h1 className="fs-2 fs-3 font-monospace">Trending Tv Show:</h1>
        {trendingTv && trendingTv.length > 0
          ? trendingTv.map((item, index) => (
              <div
                className="col-md-4 d-flex justify-content-center"
                key={index}
              >
                <div className="col-md-8">
                  <Link
                    to={`/itemDetails/${item.id}/${item.media_type}`}
                    className="text-decoration-none text-dark"
                  >
                    <div className="my-2 py-2 font fs-5">{item.name}</div>
                    {item.poster_path ? (
                      <img
                        className="w-100 rounded"
                        src={item.poster_path ? "https://image.tmdb.org/t/p/w500/" + item.poster_path : ''}

                        alt={item.title}
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
