
import React, { useContext } from "react";
import MediaItem from "../MediaItem/MediaItem";
import { Helmet } from "react-helmet"; 
import { MediaContext } from "../../ConText/MediaContext";


export default function Home() {

let{ trendingMovies, trendingTv, trendingPeople}=useContext(MediaContext)

  return (<>
  <Helmet>
    <meta charSet="utf-8"/>
    <meta name="description" content="HomePage"/>
    <title>Home_Page</title>
  </Helmet>
    <div className="row py-5">
      <div className="col-md-4 d-flex align-items-center">
        <div>
          <div className="brdr w-25 mb-3"></div>
          <h2 className="h4">
            Trending Movies <br />
            Watch all Trending Movies
          </h2>
          <p className="py-2 text-secondary">Watched Movies To Right</p>
          <div className="brdr w-100 mt-3"></div>
        </div>
        
      </div>
      {trendingMovies.slice(0, 10).map((item, index) => (
          <MediaItem key={index} item={item} />
        ))}
    </div>
    <div className="row py-5">
      <div className="col-md-4 d-flex align-items-center">
        <div>
          <div className="brdr w-25 mb-3"></div>
          <h2 className="h4">
            Trending TV <br />
            Watch all Trending Movies
          </h2>
          <p className="py-2 text-muted">Watched Movies To Right</p>
          <div className="brdr w-100 mt-3"></div>
        </div>
        
      </div>
      {trendingTv.slice(0, 10).map((item, index) => (
          <MediaItem key={index} item={item} />
        ))}
    </div>
    <div className="row py-5">
      <div className="col-md-4 d-flex align-items-center">
        <div>
          <div className="brdr w-25 mb-3"></div>
          <h2 className="h4">
            Trending People <br />
            Watch all Trending Movies
          </h2>
          <p className="py-2 text-muted">Watched Movies To Right</p>
          <div className="brdr w-100 mt-3"></div>
        </div>
        
      </div>
      {trendingPeople.filter((item)=> item.profile_path !== null).slice(0, 10).map((item, index) => (
          <MediaItem key={index} item={item} />
        ))}
    </div>
    </>
  );
}
