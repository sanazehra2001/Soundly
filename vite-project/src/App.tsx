<meta name="viewport" content="initial-scale=1, width=device-width" />;

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Navbar from "./components/Navbar";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Navbar />
        </Grid>

        <Grid item xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

// import Alert from "./components/Alert";
// import ListGroup from "./components/ListGroup";
// //import Button from "./components/Button";

// import { useState } from "react";
// import Like from "./components/Like";

// import Button from "@mui/material/Button";

// function App() {
//   // const items = [
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
//   //   console.log(item);
//   // };

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

// export default App
