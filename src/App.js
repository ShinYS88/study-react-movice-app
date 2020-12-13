import React from "react";
import { BrowserRouter, HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

// BrowserRouter : github pages 등록시 정확히 설정이 어렵다. => HashRouter 사용을 추천

function App() {
    return (
        < HashRouter >
            {/* < BrowserRouter > */}
            <Navigation />

            <Route path="/" exact={true} component={Home} />
            <Route path="/about" component={About} />
            <Route path="/movie/:id" component={Detail} />

            {/* <Route path="/study-react-movie-app" exact={true} component={Home} />
            <Route path="/study-react-movie-app/about" component={About} />
            <Route path="/study-react-movie-app/movie/:id" component={Detail} /> */}

            {/* <Route path="/movie-detail" component={Detail} /> */}

            {/* </BrowserRouter > */}
        </HashRouter >


    )
}

export default App;