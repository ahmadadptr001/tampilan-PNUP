import { Outlet } from "react-router-dom";
import HeaderTop from "../components/HeaderTop";
import HeaderBottom from "../components/HeaderBottom";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <>
      <HeaderTop></HeaderTop>
      <HeaderBottom></HeaderBottom>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
