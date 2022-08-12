import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutUs from "./pages/AboutUs";
import ChoosDress from "./pages/ChooseDress";
import Cloth from "./pages/Cloth";
import Dash from "./pages/Dash";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import { useContext } from "react";
import { Context } from "./context/Context";
import AdminClothView from "./pages/AdminClothView";
import MenWear from "./pages/MenWear";
import ContactUs from "./pages/ContactUs";
import WomanWear from "./pages/WomenWear";
import KidsWear from "./pages/KidsWear";

function App() {
  const { user } = useContext(Context);
  return (
  <BrowserRouter>    
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/signup" element={user ? <Homepage /> : <SignUp />}/>
      <Route path="/login" element={user ? user.username === "Admin" ? <Dash /> : <ChoosDress/> :<Login/>} />
      <Route path="/choosedress" element={user ? <ChoosDress /> : <Login />}/>
      <Route path="/aboutus" element={<AboutUs />}/>
      <Route path="/contactus" element={<ContactUs />}/>
      <Route path="/cloth" element={<Cloth />}/>
      <Route path="/clothview" element={<AdminClothView />}/>
      <Route path="/dash" element={<Dash />}/>
      <Route path="/menwear" element={<MenWear />}/>
      <Route path="/womenwear" element={<WomanWear />}/>
      <Route path="/kidswear" element={<KidsWear />}/>


    </Routes>
  </BrowserRouter>
  );
}

export default App;
