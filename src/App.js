import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home/Home";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/login">
                        Login
                    </Route>
                    <Route path="/checkout">
                        <Header/>
                        checkout
                    </Route>
                    <Route path="/">
                        <Header/>
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
