import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import Pilihan from "./Pages/Pilihan";
import Hasil from "./Pages/Hasil";
import Daftar from "./Pages/Daftar";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pilihan />} />
          <Route path="/hasil" element={<Hasil />} />
          <Route path="/daftar" element={<Daftar />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
