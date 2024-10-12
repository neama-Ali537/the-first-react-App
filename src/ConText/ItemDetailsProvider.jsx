// import axios from "axios";
// import React, { createContext, useEffect, useState } from "react";

// import { useParams } from "react-router-dom";

// export let itemDetails = createContext("");
// export default function ItemDetailsProvider({props}) {
//   let { id, media_type } = useParams();
//   let [itemData, setItemData] = useState({});
//   async function getItemDetails(id, mediaType) {
//     let { data } = await axios.get(
//       `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=f1aca93e54807386df3f6972a5c33b50`
//     );
//     setItemData(data);
//   }
//   useEffect(() => {
//     getItemDetails(id, media_type);
//   }, []);
//   return (
//   <>
//     <itemDetails.Provider value={{ itemData }}>
//       {props.children}
//     </itemDetails.Provider>
//   </>
// );

// }
