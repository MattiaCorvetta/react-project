import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Episodes from "./pages/Episodes";
import Characters from "./pages/Characters";
import Character from "./pages/Character";

import logo from "./assets/logo.png";

import NoPage from "./pages/NoPage";

export default function App() {
  const nav=[
      {url: "", text: "Home"},
      {url: "episodes", text: "Episodes"},
      {url: "characters", text:"Characters"},
      {url: "info", text:"Info"}

  ];
  return (
    <BrowserRouter>
      <Routes>
        <Route path="react-project" element={<Layout
        footerAuthorName="Mattia Corvetta"
        footerDocumentation="https://docs.google.com/presentation/d/15aUUo3XAwXWE4eAR8M1VrlO0AH4XFYUeqO2_C-B-csw/edit?usp=sharing"
        navItems={nav}
        logo={logo}
        studentID="807435"
        />}>
          <Route index element={<Home />} />
          <Route path="Info" element={<Info />} />
          <Route path="Episodes" element={<Episodes />}/>
          <Route path="Characters" element={<Characters />} />
          <Route path="Characters/:id" element={<Character />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

