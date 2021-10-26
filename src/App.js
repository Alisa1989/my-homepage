// import { Button } from "reactstrap";
import "./App.css";
import React from "react";
// import ToDo from './components/ToDoSection/ToDo'
import {todos, ToDo} from './components/ToDoSection/ToDo'
import ToDoItem from './components/ToDoSection/ToDoItem'
import NewsList from './components/NewsSection/NewsList'
import {Link, Route} from 'react-router-dom';
import OnBoardingForm from "./components/Login-Onboard/OnBoardingForm";

//Adding local state to the class
function App () {
    return(
      <div className="App" style={{backgroundImage: `url("https://images2.alphacoders.com/166/thumb-1920-166600.jpg")`, backgroundSize: 'cover', height: '100vh', backgroundPosition:'center', backgroundAttachment:'fixed'}}>
        <div className="header">
          <h2>Main</h2>
          <div className="nav-links">
            <Link to="/">Home</Link>
            {/* <Link to="/News">News</Link> */}
            <Link to="/ToDo">ToDo</Link>
            <Link to="/SignUp">SignUp</Link>
          </div>
        </div>
        <Route exact path="/"  component={NewsList}/>
        {/* <Route path="/News" component={NewsList}/> */}
        <Route exact path="/ToDo" component={ToDo}/>
        <Route exact path="/SignUp" component={OnBoardingForm}/>
        <Route path="/ToDo/:id" component={ToDo}>
          <ToDoItem todos={todos}/>
        </Route>
      </div>
    );
}

export default App;
