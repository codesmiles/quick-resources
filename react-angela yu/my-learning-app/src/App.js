import React from "react";
import "./static/css/app.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Note from "./components/note";
// import Card from "./components/propsData";
// import data from "./data.json"
import notes from "./noteData";
const App = () => {
  // const anonFunc = data.map((el)=>{
  //   return <Card
  //     name={el.name}
  //     age={el.age}
  //     stack={el.stack}
  //   />
  // })
  const showNotes = notes.map(  el => 
    <Note key={el.key} title={el.title} content={el.content} />
  );

  return (
    <div>
      <Header />
      {showNotes}
      {/* {anonFunc} */}
      <Footer />
    </div>
  );
};

export default App;
