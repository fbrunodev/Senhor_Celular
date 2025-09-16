import React from "react";
import Home from "./pages/Home"
import "./styles/globals.css"; // CSS global + Tailwind + variáveis/animations

function App() {
  return (
    <div className="App">
      {/* Aqui você poderia colocar um Layout se quiser Header/Footer fixos */}
      <Home />
    </div>
  );
}

export default App;
