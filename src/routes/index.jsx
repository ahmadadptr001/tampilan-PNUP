import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Beranda from "../pages/Beranda";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Beranda />} />
      </Route>
    </Routes>
  );
}
