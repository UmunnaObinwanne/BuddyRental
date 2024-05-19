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
import HostLayout from "./Host-Information/HostLayout";

import HostClients from "./Host-Information/HostClients";
import IndividualClient from "./Host-Information/IndividualClient";

import ClientInfoPage from "./Host-Information/IndividualClientInfo/ClientInfoPage";
import PersonalClientIncome from "./Host-Information/IndividualClientInfo/PersonalClientIncome";
import PersonalClientReview from "./Host-Information/IndividualClientInfo/PersonalClientReview";

function App() {
  return (
    <>
      <div className="body">
        <Routes>
          <Route path="/" element={<NavigationBar />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="friends" element={<FriendList />} />
            <Route path="friends/:id" element={<Profile />} />
            <Route path="host" element={<HostLayout />}>
              <Route index element={<HostOverview />} />
              <Route path="income" element={<HostIncome />} />
              <Route path="reviews" element={<HostReviews />} />
              <Route path="clients" element={<HostClients />} />
              <Route path="clients/:id" element={<IndividualClient />}>
                <Route index element={<ClientInfoPage />} />
                <Route path="income" element={<PersonalClientIncome />} />
                <Route path="review" element={<PersonalClientReview />} />
              </Route>
            </Route>
            <Route path="*" element={<h1>Page not found</h1>} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
