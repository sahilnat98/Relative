import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Relative from "./relative";


function App() {
  return (
    <>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Relative/>}></Route>
</Routes>
</BrowserRouter>
    </>
  );
}

export default App;
