import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Timeline from "./pages/Timeline";
import Stats from "./pages/Stats";
import FriendDetail from "./pages/FriendDetail"; // বানান ঠিক আছে তো?


function App() {
  return (
    <div className="min-h-screen flex flex-col font-['Inter',sans-serif] bg-[#F9FAFB]">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/stats" element={<Stats />} />
          {/* Dynamic Route for Friend Details */}
          <Route path="/friend/:id" element={<FriendDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;