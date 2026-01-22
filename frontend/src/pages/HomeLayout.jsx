import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import ShopContextProvider from "../context/ShopContext.jsx";

const HomeLayout = () => {
  return (
    <ShopContextProvider>
      <Navbar />
      <SearchBar />
      <Outlet />
      <Footer />
    </ShopContextProvider>
  );
};
export default HomeLayout;
