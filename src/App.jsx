import { LaunchDetails } from "./components/LaunchDetails";
import { LaunchList } from "./components/LaunchList";
import { RocketDetails } from "./components/RocketDetails";
import { Routes, Route } from "react-router-dom";


export function App() {
  return (
    // Este elemento sin nombre se llama fragment, es un contenedor para no alterar el estilo del DOM
    <>
      <Routes>
        <Route path="/" element={<LaunchList />} />
        <Route path="/launch/:id" element={<LaunchDetails />} />
        <Route path="/rocket/:id" element={<RocketDetails/>} />
      </Routes>
    </>
  );
}
