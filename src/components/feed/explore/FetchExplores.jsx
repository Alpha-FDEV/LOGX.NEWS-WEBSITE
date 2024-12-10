// import { Try } from "@mui/icons-material";
// import { useEffect, useState } from "react";

// function FetchExplores() {
//   const [explores, setExplores] = useState([]);
//   async function fetchExplores() {
//     try {
//       const res = await fetch(
//         "https://newsapi.org/v2/everything?&apiKey=1b06db323a6641108397cfcd62d2c714"
//       );

//       console.log(res);
//       if (!res.ok) throw new Error("Check your network connection");

//       const data = await res.json();
//       if (!data) throw new Error("Could not find any explores currently");
//       console.log(data);
//       setExplores(data.articles);
//     } catch (error) {
//       console.log(error);
//     }
//     return explores;
//   }
//   fetchExplores();
// }

// export default FetchExplores;
