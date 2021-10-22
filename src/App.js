// import { Button } from "reactstrap";
import "./App.css";
import React from "react";
import ToDo from './components/ToDoSection/ToDo'
import NewsList from './components/NewsSection/NewsList'
import {Link, Route} from 'react-router-dom';

//Adding local state to the class
function App () {
    return(
      <div className="App" style={{backgroundImage: `url("https://images2.alphacoders.com/166/thumb-1920-166600.jpg")`, backgroundSize: 'cover', height: '100vh', backgroundPosition:'center', backgroundAttachment:'fixed', height:"100%"}}>
        <div className="header">
          <h2>Main</h2>
          <div className="nav-links">
            <Link to="/">Home</Link>
            {/* <Link to="/News">News</Link> */}
            <Link to="/ToDo">ToDo</Link>
          </div>
        </div>
        <Route exact path="/"  component={NewsList}/>
        {/* <Route path="/News" component={NewsList}/> */}
        <Route path="/ToDo" component={ToDo}/>
      </div>
    );
}

export default App;
