import React from "react";
import { Link } from "react-router-dom";

export default function MediaItem({ item }) {
  return (
    <div className="col-md-2">
      <Link to={`/itemDetails/${item.id}/${item.media_type}`}>
        <div className="movies position-relative">
          {item.poster_path ? (
            <img
              className="w-100"
              src={"https://image.tmdb.org/t/p/w500/" + item.poster_path}
              alt=""
            />
          ) : (
            <img
              className="w-100"
              src={"https://image.tmdb.org/t/p/w500/" + item.profile_path}
              alt=""
            />
          )}

          <h3 className="h6 my-2">
            {item.title}
            {item.name}
          </h3>
          <div className="vote p-2 text-white position-absolute top-0 end-0">
            {item.vote_average?.toFixed(1)}
          </div>
        </div>
      </Link>
    </div>
  );
}
