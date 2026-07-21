import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Uhome from "./pages/Uhome";
import Cabs from "./pages/Cabs";
import BookCab from "./pages/BookCab";
import MyBookings from "./pages/MyBookings";

import Alogin from "./pages/Alogin";
import Ahome from "./pages/Ahome";
import Users from "./pages/Users";
import Bookings from "./pages/Bookings";
import Acabs from "./pages/Acabs";
import Addcar from "./pages/Addcar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/uhome" element={<Uhome />} />
        <Route path="/cabs" element={<Cabs />} />
        <Route path="/bookcab/:id" element={<BookCab />} />
        <Route path="/mybookings" element={<MyBookings />} />

        <Route path="/alogin" element={<Alogin />} />
        <Route path="/ahome" element={<Ahome />} />
        <Route path="/users" element={<Users />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/acabs" element={<Acabs />} />
        <Route path="/addcar" element={<Addcar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;