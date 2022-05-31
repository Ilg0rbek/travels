import Navbar from "./component/Navbar/Navbar";
import { Routes, Route } from 'react-router-dom'
import AddTravels from './component/AddTravelBook/AddTravels'
import TravelBook from "./component/TravelGalarey/TravelBook";
import UpdateBook from "./component/Update/UpdateBook";
function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-3">
            <Routes>
              <Route path={'/'} element={<TravelBook />} />
              <Route path={'/add'} element={<AddTravels />} />
              <Route path={'/update/:id'} element={<UpdateBook />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
