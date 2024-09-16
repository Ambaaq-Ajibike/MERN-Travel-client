import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Header from "./pages/components/Header";
import Profile from "./pages/Profile";
import PrivateRoute from "./pages/Routes/PrivateRoute";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminRoute from "./pages/Routes/AdminRoute";
import UpdatePackage from "./pages/admin/UpdatePackage";
import Visa from "./pages/Visa";
import RatingsPage from "./pages/RatingsPage";
import Booking from "./pages/user/Booking";
import Search from "./pages/Search";
import EmailVerification from "./pages/EmailVerification";
import AgentProfile from "./pages/AgentProfile";
import CitizenshipPackage from "./pages/CitizenshipPackage";
import Residency from "./pages/Residency";
import Citizenship from "./pages/Citizenship";
import ProofOfFund  from "./pages/ProofOfFund";
import ContactForm from "./pages/Contact";
import OtherServices from "./pages/OtherServices";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/verifyemail" element={<EmailVerification />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/search" element={<Search />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/services" element={<OtherServices />} />
        {/* user */}
        <Route path="/profile" element={<PrivateRoute />}>
          <Route path="user" element={<Profile />} />
          <Route path="agent" element={<AgentProfile />} />
         
        </Route>
        {/* admin */}
        <Route path="/profile" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/update-package/:id" element={<UpdatePackage />} />
        </Route>
        <Route path="/visa/:visaId/:typeId" element={<Visa />} />
        <Route path="/residency/:id" element={<Residency />} />
        <Route path="/citizenship/:id" element={<Citizenship />} />
        <Route path="/proofoffund" element={<ProofOfFund />} />
        <Route path="/package/citizenship/:id" element={<CitizenshipPackage />} />
        <Route path="/package/ratings/:id" element={<RatingsPage />} />
        {/* checking user auth before booking */}
        <Route path="/booking" element={<PrivateRoute />}>
          <Route path=":packageId" element={<Booking />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
