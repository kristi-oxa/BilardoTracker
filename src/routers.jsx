import { useState } from 'react'
import './style/App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { NotFound } from "./pages/NotFound.jsx";

function Routers() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
       <Routes>
         <Route path={"/"} element={<Home/>} />
         <Route path={"*"} element={<NotFound/>} status={404}/>
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default Routers
