// import { Button } from "reactstrap";
import "./App.css";
import React from "react";
import ToDo from './components/ToDoSection/ToDo'
import NewsList from './components/NewsSection/NewsList'

//Adding local state to the class
function App () {
    return(
      <div className="App" style={{backgroundImage: `url("https://images2.alphacoders.com/166/thumb-1920-166600.jpg")`, backgroundSize: 'cover', height: '100vh', backgroundPosition:'center'}}>
        <div className="header">
          <h2>Main</h2>
          <NewsList/>
          <ToDo />
        </div>
      </div>
    );
}

export default App;
