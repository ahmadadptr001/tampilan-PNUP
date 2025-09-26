export default function PoliupgTV() {
  return (
    <section className="relative w-full py-20 bg-gradient-to-br from-red-700 via-pink-600 to-orange-500 text-white overflow-hidden">
      {/* pola background */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/dot-grid.png')]"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Judul */}
        <h2 className="text-5xl font-extrabold mb-4">
          POLIUPG <span className="text-yellow-300">TV</span>
        </h2>
        <p className="mb-10 text-lg opacity-90 max-w-2xl mx-auto">
          Sajian video mengenai profil, kegiatan, serta informasi terkini dari{" "}
          <span className="font-semibold">Politeknik Negeri Ujung Pandang</span>
          .
        </p>

        {/* Video */}
        <div className="flex justify-center">
          <div className="card w-full max-w-4xl bg-base-100 shadow-2xl transform hover:scale-[1.02] transition duration-500">
            <figure className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/uCwhf2cm4Fk"
                title="Profil Politeknik Negeri Ujung Pandang"
                allowFullScreen
              ></iframe>
            </figure>
          </div>
        </div>

       
      </div>
    </section>
  );
}
