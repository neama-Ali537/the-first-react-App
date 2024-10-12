import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";


export default function ItemDetails() {
  let { id, media_type } = useParams();
  let [itemData, setItemData] = useState({});
  async function getItemDetails(id, mediaType) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=f1aca93e54807386df3f6972a5c33b50`
    );
    setItemData(data);
  }
  useEffect(() => {
    getItemDetails(id, media_type);
  }, []);
  
  return (<>
    <Helmet>
    <meta charSet="utf-8"/>
    <meta name="description" content="HomePage"/>
    <title>{itemData.title}</title>
    <title>{itemData.name}</title>
  </Helmet>
    <div className="row ">
      <div className="col-md-3">
        {itemData.poster_path ? (
          <img
            className="w-100 img-fluid rounded "
            src={"https://image.tmdb.org/t/p/w500/" + itemData.poster_path}
            alt=""
          />
        ) : (
          <img
            className="w-100 img-fluid rounded "
            src={"https://image.tmdb.org/t/p/w500/" + itemData.profile_path}
            alt=""
          />
        )}
      </div>
      <div className="col-md-9 py-2 mt-2">
        <h3 className="h1 my-2 py-2 mt-2">
          {itemData.title}
          {itemData.name}
        </h3>

        {itemData.vote_average ? (
          <h6 className="text-capitalize fs-5">
            Vote_Average:{" "}
            {itemData.vote_average ? itemData.vote_average.toFixed(0) : ""}
          </h6>
        ) : (
          ""
        )}
        {itemData.vote_count ? (
          <h6 className="text-capitalize fs-5">
            Count_Average:{" "}
            {itemData.vote_count ? itemData.vote_count.toFixed(0) : ""}
          </h6>
        ) : (
          ""
        )}

        <p className="fw-bold fw-bold py-2 font-monospace text-secondary">
          {itemData.overview}
        </p>
        <p className="fw-bold fw-bold py-2 font-monospace text-secondary">
          {itemData.biography}
        </p>
      </div>
    </div>
    </>
  );
}


