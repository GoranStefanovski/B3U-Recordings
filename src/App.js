import React from "react";
import Header from "./Header";
import WidgetsRow from "./WidgetsRow";
import MainBody from "./MainBody";
import Tracks from "./Trakcs";
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <WidgetsRow />
      <MainBody />
      {/* <Tracks /> */}
      
    </div>
  );
}

export default App;
