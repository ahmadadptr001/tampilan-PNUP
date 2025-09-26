import Banner from "../components/Banner";
import BeritaAgenda from "../components/BeritaAgenda";
import Hero from "../components/Hero";
import Layanan from "../components/Layanan";
import Pengumuman from "../components/Pengumuman";
import PoliupgTV from "../components/PoliupgTV";

export default function Beranda() {
  return (
    <div>
      <Hero />
      <Banner />
      <Pengumuman />
      <Layanan />
      <PoliupgTV />
      <BeritaAgenda />
    </div>
  );
}
