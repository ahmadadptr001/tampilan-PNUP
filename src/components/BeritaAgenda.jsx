import { daftarBerita } from "../dummy/berita";

export default function BeritaAgenda() {

  // Agenda kosong
  const agendaList = [];

  return (
    <section className="py-20 bg-base-300">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">
        {/* Kolom kiri - Berita */}
        <div>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <i className="fas fa-newspaper text-primary"></i> Berita Kampus
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {daftarBerita.map((berita, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden shadow-md bg-base-100 hover:shadow-xl transition duration-500"
              >
                {/* Gambar + shimmer effect */}
                <figure className="relative">
                  <img
                    src={berita.img}
                    alt={berita.title}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                    <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  </div>
                </figure>

                {/* Konten */}
                <div className="relative p-5">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition">
                    {berita.title}
                  </h3>
                  <p className="text-sm text-base-content/70 line-clamp-3">
                    {berita.desc}
                  </p>
                  <a
                    href="#"
                    className="mt-3 inline-block text-sm font-semibold text-primary hover:underline"
                  >
                    Baca Selengkapnya{" "}
                    <i className="fas fa-arrow-right ml-1"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kolom kanan - Agenda Kampus */}
        <div className="bg-base-100 h-fit rounded-2xl shadow-md p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
              <i className="fas fa-calendar-alt text-primary"></i> Agenda Kampus
            </h2>

            {agendaList.length > 0 ? (
              <ul className="space-y-4">
                {agendaList.map((agenda, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-base-200 transition"
                  >
                    <div className="w-20 text-center bg-primary text-primary-content rounded-xl p-2 font-bold">
                      <span className="block text-xs">{agenda.tanggal}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{agenda.acara}</p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-center text-base-content/60 py-10">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-base-200 flex items-center justify-center">
                  <i className="fas fa-inbox text-2xl text-base-content/50"></i>
                </div>
                <p className="font-medium">Belum ada agenda kampus.</p>
                <p className="text-sm text-base-content/60">
                  Nantikan informasi terbaru segera.
                </p>
              </div>
            )}
          </div>

          <div className="mt-6 text-center">
            <a
              href="#"
              className="btn btn-sm btn-primary shadow-md hover:scale-105 transition"
            >
              <i className="fas fa-list mr-2"></i> Lihat Semua Agenda
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
