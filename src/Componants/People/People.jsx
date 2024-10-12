import React, { useContext } from "react";
import { MediaContext } from "../../ConText/MediaContext";
import { Link } from "react-router-dom";

export default function People() {
  let { trendingPeople } = useContext(MediaContext);

  return (
    <>
      <div className="row container">
        <h1 className="">The Most Trending People:</h1>

        {trendingPeople && trendingPeople.length > 0
          ? trendingPeople.map((item, index) => (
              <div
                className="col-md-4 d-flex justify-content-center"
                key={index}
              >
                <div className="col-md-8">
                  <Link to={`/itemDetails/${item.id}/${item.media_type}`}>
                    <div className="font">{item.name}</div>

                    <div>
                      {item.profile_path ? (
                        <img
                          className="w-100 rounded"
                          src={
                            "https://image.tmdb.org/t/p/w500/" +
                            item.profile_path
                          }
                          alt={item.title}
                        />
                      ) : (
                        ""
                      )}
                    </div>
                    <div>
                     
                    {item.biography ? ( <p className="fw-bold fw-bold py-2 font-monospace text-secondary">
                        {item.biography}
                      </p>) :''}
                     
                    </div>
                  </Link>
                </div>
              </div>
            ))
          : ""}
      </div>
    </>
  );
}
