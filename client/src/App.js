import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Fib from "./FibPage";
import Other from "./OtherPage";

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Link to="/">Home</Link>
                    <Link to="/otherpage">Other Page</Link>
                    <div>
                      <Route exact path="/" component={Fib} />
                      <Route path="/otherpage" component={Other} />
                    </div>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        Fib Calculator
                    </a>
                </header>
            </div>
        </Router>
    );
}

export default App;
