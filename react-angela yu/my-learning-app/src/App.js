import React from "react";
import "./static/css/app.css"
import Header from "./components/header";
import Footer from "./components/footer";
import Note from "./components/note";
const App = () => {
  return (
    <div>
      <Header />
      <Note />
      <Footer />
    </div>
  );
};

export default App;
