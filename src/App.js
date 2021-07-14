import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Counter from "./Counter/Counter";

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
                        <Counter/>
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
