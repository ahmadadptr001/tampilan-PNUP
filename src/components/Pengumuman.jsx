import { dataPengumuman } from "../dummy/pengumuman";

export default function Pengumuman() {
  const cardPengumuman = dataPengumuman.map((item, index) => (
    <div
      key={index}
      className="my-3 flex gap-7 group hover:cursor-pointer hover:bg-base-200 p-4 duration-700"
    >
      {console.log(item.gambar)}
      <img src={item.gambar} alt={item.judul} className="object-cover w-20 h-20" />
      <div className="content-card">
        <p className="font-semibold text-xl group-hover:text-primary duration-700">
          {item.judul}
        </p>
        <div className="font-light mt-2 text-xs flex items-center gap-3">
          <span>
            <i className="fa-regular fa-calendar-days"></i> {item.tanggal} -{" "}
            {item.jam}
          </span>
          <a href="#" className="hover:text-primary">
            {" "}
            PUBLIC RELATION
          </a>
        </div>
        <p className="text-sm mt-1 line-clamp-3">{item.isi}</p>
        <a className="text-sm text-primary">Baca Selengkapnya</a>
      </div>
    </div>
  ));

  return (
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-[3fr_1fr] container mx-auto">
      {/* pengumuman */}
      <div>
        <p className="font-semibold text-2xl">PENGUMUMAN</p>
        {cardPengumuman}
      </div>

      {/* informasi bagian */}
      <div className="card bg-base-100 h-fit shadow-sm/20 rounded-3xl border border-base-300 overflow-hidden">
        <div className="card-body p-6">
          <h2 className="text-xl font-extrabold text-center uppercase tracking-wider text-primary mb-4">
            INFORMASI BAGIAN
          </h2>

          {/* Grid menu */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "🏛", label: "Institution" },
              { icon: "🎓", label: "Student Affairs" },
              { icon: "📢", label: "Public Relation" },
              { icon: "🏭", label: "Industrial Relation" },
              { icon: "📚", label: "Academic" },
              { icon: "📖", label: "Library" },
              { icon: "💡", label: "Entrepreneurship" },
              { icon: "🌐", label: "Language" },
            ].map((item, idx) => (
              <a
                key={idx}
                className="group flex flex-col items-center justify-center p-4 bg-base-100 rounded-xl shadow-md border border-base-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <span className="text-3xl mb-2 group-hover:scale-120 transition-transform duration-300">
                  {item.icon}
                </span>
                <span className="font-semibold text-sm text-center group-hover:text-primary">
                  {item.label}
                </span>
              </a>
            ))}
          </div>

          {/* Footer highlight */}
          <div className="mt-6 text-center text-xs opacity-70">
            ✨ Pilih bagian untuk melihat informasi lebih lanjut ✨
          </div>
        </div>
      </div>

      {/* footer pengumuman */}
      <div className="flex items-center justify-center pb-4">
        <a href="#" className="text-primary font-bold">
          Lihat Daftar Pengumuman{" "}
          <i className="ms-1 fas fa-caret-right text-white bg-primary rounded-[50%] py-[3px] px-1 text-xs"></i>
        </a>
      </div>
    </div>
  );
}
