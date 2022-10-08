import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";
import Sidebar from "./components/Sidebar";

function App() {
  return (
      <BrowserRouter>
        <Background>
          <Warpper>
            <Sidebar/>
            <div className="Main">
              <Navigation/>
              <Routes>
                <Route path="/movie-web" element={<Home />} />
                <Route path="/about" element={<About />}/>
                <Route path="/movie/:id" element={<Detail/>} />
              </Routes>
            </div>
          </Warpper>
        </Background>
    </BrowserRouter>
  );
};
const Background = styled.div`
  background: linear-gradient(#dee9fa, #dee5fa);;
  padding: 50px;
`;
const Warpper = styled.div`
  height: calc(100vh - 100px);
  overflow: hidden;
  box-shadow: 2px 2px 10px #666;
  display: flex;
  .Main {
    background: #eee;
    border-radius: 0 5px 5px 0;
    width: 80%;
  }
`;
export default App;
