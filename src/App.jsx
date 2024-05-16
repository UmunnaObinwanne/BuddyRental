import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./About";
import NavigationBar from "./Navigation-Bar/Navigation";
import "./App.css";
import FriendList from "./Pages/FriendList";
import Profile from "./Pages/Profile";
import HostOverview from "./Host-Information/HostOverview";
import HostIncome from "./Host-Information/Host-Income";
import { HostReviews } from "./Host-Information/Host-Reviews";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavigationBar />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/friends" element={<FriendList />} />
          <Route path="/friends/:id" element={<Profile />} />
          <Route path="/host/" element={<HostOverview />} />
          <Route path="/host/income" element={<HostIncome />} />
          <Route path="/host/reviews" element={<HostReviews />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
