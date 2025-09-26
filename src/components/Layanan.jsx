import Squares from "../UI/Squares";

export default function Layanan() {
  const layananList = [
    {
      icon: "fas fa-users",
      title: "WEB KEPEGAWAIAN",
      desc: "Sistem Informasi Kepegawaian Politeknik Negeri Ujung Pandang",
    },
    {
      icon: "fas fa-desktop",
      title: "SIMPONI PNUP",
      desc: "Sistem Informasi Akademik Politeknik Negeri Ujung Pandang",
    },
    {
      icon: "fas fa-bug",
      title: "WEB PELAPORAN",
      desc: "Web Pelaporan Kerusakan Politeknik Negeri Ujung Pandang",
    },
    {
      icon: "fas fa-user-graduate",
      title: "SIMPONI",
      desc: "Web SIMPONI untuk mahasiswa Politeknik Negeri Ujung Pandang",
    },
    {
      icon: "fas fa-building",
      title: "BADAN LAYANAN UMUM",
      desc: "BLU Politeknik Negeri Ujung Pandang",
    },
  ];

  return (
    <div className="relative my-10 bg-base-300 overflow-hidden rounded-3xl">
      {/* background squares */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#5227ff"
          hoverFillColor="#000"
          className="w-full h-full"
        />
      </div>

      <div className="relative z-10 p-10 text-center space-y-6">
        <h2 className="text-4xl font-extrabold tracking-wide drop-shadow-lg">
          LAYANAN 
        </h2>
        <p className="text-base-content/70 max-w-2xl mx-auto text-lg">
          Klik Icon dibawah untuk Akses ke Layanan utama di Politeknik Negeri Ujung Pandang
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {layananList.map((layanan, idx) => (
            <div
              key={idx}
              className="group relative p-8 bg-base-100 rounded-2xl shadow-md hover:shadow-2xl transition duration-500 overflow-hidden border border-base-200"
            >
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition"></div>
                  <i
                    className={`${layanan.icon} text-5xl hover:text-primary relative z-10 transition transform group-hover:scale-110`}
                  ></i>
                </div>
              </div>

              {/* Judul & Deskripsi */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition">
                {layanan.title}
              </h3>
              <p className="text-sm text-base-content/70 whitespace-pre-line">
                {layanan.desc}
              </p>

              {/* Background icon samar di belakang konten */}
              <i
                className={`${layanan.icon} text-[8rem] text-primary/10 absolute bottom-0 right-2 rotate-[-15deg]`}
              ></i>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
