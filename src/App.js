import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import IndividualHotel from "./pages/hotel/IndividualHotel";
import "./scss/main.scss";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotel-list" element={<List/>}/>
        <Route path="/individual-hotel/:id" element={<IndividualHotel/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
