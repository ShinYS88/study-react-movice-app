import React from "react";
import { BrowserRouter, HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

// BrowserRouter : github pages 등록시 정확히 설정이 어렵다. => HashRouter 사용을 추천

function App() {
    return (
        <BrowserRouter>
            {/* <HashRouter> */}
            <Navigation />
            <Route path="/" exact={true} component={Home} />
            <Route path="/about" component={About} />
            {/* <Route path="/movie-detail" component={Detail} /> */}
            <Route path="/movie/:id" component={Detail} />
            {/* </HashRouter> */}
        </BrowserRouter>
    )
}

export default App;