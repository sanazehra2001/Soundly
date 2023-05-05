<meta name="viewport" content="initial-scale=1, width=device-width" />;

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Navbar from "./components/Navbar";
import SongGrid from "./components/SongGrid";
import bg from "./assets/bg.jpg";
import Typography from "@mui/material/Typography";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { RouteProps } from "react-router-dom";
import Like from "./components/Like";
import SongCard from "./components/SongCard";
import PlaylistScore from "./components/PlaylistScore";

import routes from "./routes";
import { useRoutes } from "react-router-dom";

const App = () => {
  const content = useRoutes(routes);
  return content;
};

export default App;

/* <Box sx={{ flexGrow: 1 }}>
       <Grid
         container
         spacing={{ xs: 1, lg: 2 }}
         columns={{ xs: 1, md: 4, lg: 4 }}
       >
         <Grid item xs={12}>
           <Navbar />
         </Grid>

         <Grid item xs={0} md={1}>
           <Box
             component={Grid}
             item
             xs={0}
             display={{ xs: "none", md: "block" }}
           >
             <Item>Side Bar Menu</Item>
           </Box>
         </Grid>

         <Grid item xs={1} md={3}>
           <SongGrid />
         </Grid>
       </Grid>
     </Box> */

/* // import Alert from "./components/Alert";
// import ListGroup from "./components/ListGroup";
// //import Button from "./components/Button";

// import { useState } from "react";
// import Like from "./components/Like";

// import Button from "@mui/material/Button";

// function App() { */
/* //   // const items = [
//   //   "New Classical",
//   //   "Rock",
//   //   "Pop",
//   //   "Jazz",
//   //   "Hip Hop",
//   //   "Country",
//   //   "Electronic",
//   //   "Folk",
//   //   "Metal",
//   // ];

//   // const handleSelectItem = (item: string) => {
//   //   console.log(item); */
/* //   // };

//   // let [alertVisible, setAlertVisibility] = useState(false);

//   return (
//     <>
//       <Grid container spacing={2}>
//         <Grid item xs={8}>
//           xs=8
//         </Grid>
//         <Grid item xs={4}>
//           xs=4
//         </Grid>
//         <Grid item xs={4}>
//           xs=4
//         </Grid>
//         <Grid item xs={8}>
//           xs=8
//         </Grid>
//       </Grid>
//     </>
//     // <>
//     //   {alertVisible && (
//     //     <Alert color="success" onClose={() => setAlertVisibility(false)}>
//     //       My Alert
//     //     </Alert>
//     //   )}

//     //   <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
//     //   <Like onClick={() => console.log("clicked")} />

//     //   <div>
//     //     <ListGroup
//     //       items={items}
//     //       heading="Genres"
//     //       onSelectItem={handleSelectItem}
//     //     />
//     //   </div>
//     // </>
//   );
// }
*/
//   );
// }
