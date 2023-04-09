import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";

import { useState } from "react";
import Like from "./components/Like";

function App() {
  const items = [
    "New Classical",
    "Rock",
    "Pop",
    "Jazz",
    "Hip Hop",
    "Country",
    "Electronic",
    "Folk",
    "Metal",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  let [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      {alertVisible && (
        <Alert color="success" onClose={() => setAlertVisibility(false)}>
          My Alert
        </Alert>
      )}

      <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
      <Like onClick={() => console.log("clicked")} />

      <div>
        <ListGroup
          items={items}
          heading="Genres"
          onSelectItem={handleSelectItem}
        />
      </div>
    </>
  );
}

export default App;
