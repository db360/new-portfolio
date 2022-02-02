import { Route, Routes } from "react-router-dom";
import "./App.css";

//Components 👇
import Header from "./components/Header";
import Info from "./components/Info";
import Section from "./components/Section";
import Test from "./components/Testimonials";
import Contact from "./components/Contact";
import Player from "./components/Player";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Section />
              <Info />
              <Test />
              <Player />
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
