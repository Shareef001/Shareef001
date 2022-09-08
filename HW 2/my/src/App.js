import './App.css';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import BasketList from "./components/basket/BasketList";
import About from "./components/about/About";
import Header from "./components/header /Header";
function App() {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<BasketList/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </BrowserRouter>
    )
}


export default App;