import * as React from "react";

import Game from "./components/Game";
import background from "./img/background.jpeg"

const bg = {
  
  backgroundImage: `url(${(background)})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  width: '100vw',
  height: '100vh'
};

const App = () => (
  <main style={bg}>
    <Game />
  </main>
);

export default App;
