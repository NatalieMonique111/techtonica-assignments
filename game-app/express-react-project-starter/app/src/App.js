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

// const Home = () => (
//   <>
//     <h1>{process.env.REACT_APP_TITLE}</h1>
//     <h2>{process.env.REACT_APP_SUBTITLE}</h2>
    
   
//   </>
// );

// const Dashboard = () => (
//   <>
//     <h1>Dashboard</h1>
//   </>
// );

export default App;
