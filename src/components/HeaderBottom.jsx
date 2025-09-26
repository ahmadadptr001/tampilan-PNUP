export default function HeaderBottom() {
  return (
    <div className="sticky top-0 z-40">
      {/* navbar bawah */}
      <div className="border p-4 bg-base-100 hidden xl:block border-gray-300 dark:border-gray-700 text-[0.73rem]">
        <div className="container mx-auto flex items-center justify-center">
          {/* dropdown PROFILE  */}
          <div className="dropdown dropdown-start outline outline-gray-300 dark:outline-gray-600 p-4">
            <div tabIndex={0} role="button" className="cursor-pointer">
              PROFILE{" "}
              <i className="fas text-primary fa-caret-down text-[0.65rem]"></i>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content font-light bg-base-100 menu z-1 w-52 p-4 shadow-md"
            >
              <li class="relative">
                <details>
                  <summary>Tentang PNUP</summary>
                  <ul class="p-2 bg-base-100 shadow-md rounded-box w-52 absolute left-full top-0">
                    <li>
                      <a>Struktur Organisasi</a>
                    </li>
                    <li>
                      <a>Pimpinan</a>
                    </li>
                    <li>
                      <a>Visi Misi</a>
                    </li>
                    <li>
                      <a>Profil Singkat Pejabat</a>
                    </li>
                    <li>
                      <a>Alamat & Kontak</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a href="">PPID</a>
              </li>
            </ul>
          </div>

          {/* dropdown SAKIP  */}
          <div className="dropdown dropdown-center outline outline-gray-300 dark:outline-gray-600 p-4">
            <div tabIndex={0} role="button" className="cursor-pointer">
              SAKIP{" "}
              <i className="fas fa-caret-down text-[0.65rem] text-primary"></i>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content font-light bg-base-100 menu z-1 w-52 p-2 shadow-sm"
            >
              <li class="relative">
                <details>
                  <summary>Rencana Strategis</summary>
                  <ul class="p-2 bg-base-100 shadow-md rounded-box w-52 absolute left-full top-0">
                    <li>
                      <a>Renstra PUNP 2020-2024 Revisi 2</a>
                    </li>
                    <li>
                      <a>Renstra PUNP 2020-2024</a>
                    </li>
                    <li>
                      <a>RSB 2022-2026</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li class="relative">
                <details>
                  <summary>Laporan Kinerja</summary>
                  <ul class="p-2 bg-base-100 shadow-md rounded-box w-52 absolute left-full top-0">
                    <li>
                      <a>Laporan Kinerja PUNP 2024</a>
                    </li>
                    <li>
                      <a>Laporan Kinerja PUNP 2023</a>
                    </li>
                    <li>
                      <a>Laporan Kinerja PUNP 2022</a>
                    </li>
                    <li>
                      <a>Laporan Kinerja PUNP 2021</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li class="relative">
                <details>
                  <summary>Indikator Kinerja</summary>
                  <ul class="p-2 bg-base-100 shadow-md rounded-box w-52 absolute left-full top-0">
                    <li>
                      <a>Indikator Kinerja Utama 2024</a>
                    </li>
                    <li>
                      <a>Indikator Kinerja Utama 2023</a>
                    </li>
                    <li>
                      <a>Indikator Kinerja Utama 2022</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li class="relative">
                <details>
                  <summary>Rencana Aksi</summary>
                  <ul class="p-2 bg-base-100 shadow-md rounded-box w-52 absolute left-full top-0">
                    <li>
                      <a>Rencana Aksi 2024</a>
                    </li>
                    <li>
                      <a>Rencana Aksi 2023</a>
                    </li>
                    <li>
                      <a>Rencana Aksi 2022</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li class="relative">
                <details>
                  <summary>Perjanjian Kinerja</summary>
                  <ul class="p-2 bg-base-100 shadow-md rounded-box w-52 absolute left-full top-0">
                    <li>
                      <a>PK 2021</a>
                    </li>
                    <li>
                      <a>PK 2022</a>
                    </li>
                    <li>
                      <a>PK 2023</a>
                    </li>
                    <li>
                      <a>PK 2024</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>

          {/* dropdown LAYANAN  */}
          <div className="dropdown dropdown-center outline outline-gray-300 dark:outline-gray-600 p-4">
            <div tabIndex={0} role="button" className="cursor-pointer">
              LAYANAN{" "}
              <i className="fas fa-caret-down text-[0.65rem] text-primary"></i>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content font-light bg-base-100 menu z-1 w-52 p-2 shadow-md"
            >
              <li class="relative">
                <details>
                  <summary>Badan Layanan Umum</summary>
                  <ul class="p-2 bg-base-100 shadow-md rounded-box w-52 absolute left-full top-0">
                    <li>
                      <a>Logo dan Value</a>
                    </li>
                    <li>
                      <a>Survey Kepuasan Layanan</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>SIMPONI</a>
              </li>
              <li>
                <a>Simponi Mahasiswa</a>
              </li>
              <li>
                <a>Elearning</a>
              </li>
              <li>
                <a>Sister</a>
              </li>
              <li>
                <a>Bengkalai Perpus</a>
              </li>
              <li>
                <a>Dokumen</a>
              </li>
              <li>
                <a>Kuesioner</a>
              </li>
              <li>
                <a>Pengaduan Masyarakat</a>
              </li>
              <li>
                <a>Tracer Study</a>
              </li>
              <li>
                <a>
                  Pemilihan Direktur Politeknik Negeri Ujung Pandang 2025-2029
                </a>
              </li>
            </ul>
          </div>

          {/* dropdown JURUSAN  */}
          <div className="dropdown dropdown-center outline outline-gray-300 dark:outline-gray-600 p-4">
            <div tabIndex={0} role="button" className="cursor-pointer">
              JURUSAN{" "}
              <i className="fas fa-caret-down text-[0.65rem] text-primary"></i>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content font-light bg-base-100 menu z-1 w-52 p-2 shadow-md"
            >
              <li>
                <a>Teknik Elektro</a>
              </li>
              <li>
                <a>Teknik Sipil</a>
              </li>
              <li>
                <a>Teknik Mesin</a>
              </li>
              <li>
                <a>Teknik Kimia</a>
              </li>
              <li>
                <a>Teknik Informatika dan Komputer</a>
              </li>
              <li>
                <a>Administrasi Niaga</a>
              </li>
              <li>
                <a>Akuntansi</a>
              </li>
            </ul>
          </div>

          {/* dropdown KEMAHASISWAAN  */}
          <div className="dropdown dropdown-center outline outline-gray-300 dark:outline-gray-600 p-4">
            <div tabIndex={0} role="button" className="cursor-pointer">
              KEMAHASISWAAN{" "}
              <i className="fas fa-caret-down text-[0.65rem] text-primary"></i>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content font-light bg-base-100 menu z-1 w-52 p-2 shadow-md"
            >
              <li>
                <a>Mahasiswa</a>
              </li>
              <li>
                <a>Data Wisuda</a>
              </li>
            </ul>
          </div>

          {/* dropdown PENELITIAN  */}
          <div className="dropdown dropdown-center outline outline-gray-300 dark:outline-gray-600 p-4">
            <div tabIndex={0} role="button" className="cursor-pointer">
              PENELITIAN{" "}
              <i className="fas fa-caret-down text-[0.65rem] text-primary"></i>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content bg-base-100 menu z-1 w-52 p-2 shadow-md"
            >
              <li class="relative">
                <details>
                  <summary>Database</summary>
                  <ul class="p-2 bg-base-100 shadow-md rounded-box w-52 absolute left-full top-0">
                    <li>
                      <a>Sitasi Indonesian Science Index (SINTA)</a>
                    </li>
                    <li>
                      <a>Sitasi Indonesia Versi Google Scholar</a>
                    </li>
                    <li>
                      <a>Selancar PAK</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li class="relative">
                <details>
                  <summary>Publikasi</summary>
                  <ul class="p-2 bg-base-100 shadow-md rounded-box w-52 absolute left-full top-0">
                    <li>
                      <a>Jurnal</a>
                    </li>
                    <li>
                      <a>Repository</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li class="relative">
                <details>
                  <summary>Kelompok Riset</summary>
                  <ul class="p-2 bg-base-100 shadow-md rounded-box w-52 absolute left-full top-0">
                    <li>
                      <a>
                        Center for Sustainable Energy and Smart Grid Application
                        (COSESGA)
                      </a>
                    </li>
                    <li>
                      <a>Center of Technology</a>
                    </li>
                    <li>
                      <a>Center for Applied ICT Research (CAIR)</a>
                    </li>
                    <li>
                      <a>Smart Grid & Power System</a>
                    </li>
                    <li>
                      <a>
                        Center for Applied Telecommunications Technology
                        Research Group (CATTAR)
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>

          {/* dropdown AKADEMIK  */}
          <div className="dropdown dropdown-center outline outline-gray-300 dark:outline-gray-600 p-4">
            <div tabIndex={0} role="button" className="cursor-pointer">
              AKADEMIK{" "}
              <i className="fas fa-caret-down text-[0.65rem] text-primary"></i>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content font-light bg-base-100 menu z-1 w-52 p-2 shadow-md"
            >
              <li>
                <a href="">Kalender Akademik</a>
              </li>
              <li>
                <a href="">Peraturan Akadmeik</a>
              </li>
              <li>
                <a href="">Program Akadmeik</a>
              </li>
              <li>
                <a href="">Status Akreditasi</a>
              </li>
              <li>
                <a href="">Alumni</a>
              </li>
              <li>
                <a href="">BAAK</a>
              </li>
            </ul>
          </div>

          {/* dropdown PENERIMAAN  */}
          <div className="dropdown dropdown-center outline outline-gray-300 dark:outline-gray-600 p-4">
            <div tabIndex={0} role="button" className="cursor-pointer">
              PENERIMAAN{" "}
              <i className="fas fa-caret-down text-[0.65rem] text-primary"></i>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content font-light bg-base-100 menu z-1 w-52 p-2 shadow-md"
            >
              <li>
                <a href="">SNPMB 2025</a>
              </li>
              <li>
                <a href="">UMPN?SBMPN</a>
              </li>
            </ul>
          </div>

          {/* dropdown UNIT  */}
          <div className="dropdown dropdown-center outline outline-gray-300 dark:outline-gray-600 p-4">
            <div tabIndex={0} role="button" className="cursor-pointer">
              UNIT{" "}
              <i className="fas fa-caret-down text-[0.65rem] text-primary"></i>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content font-light bg-base-100 menu z-1 w-52 p-2 shadow-md"
            >
              <li>
                <a href="">Unit Perencanaan</a>
              </li>
              <li>
                <a href="">Unit Penjaminan Mutu</a>
              </li>
              <li>
                <a href="">Unit PPM</a>
              </li>
              <li>
                <a href="">Unit Pengembangan</a>
              </li>
              <li>
                <a href="">Unit Hubungan Industri</a>
              </li>
              <li>
                <a href="">Unit Humas dan International</a>
              </li>
              <li className="relative">
                <details>
                  <summary>Unit Produk dan Jasa</summary>
                  <ul class="p-2 bg-base-100 shadow-md rounded-box w-52 absolute left-full top-0">
                    <li>
                      <a>Teknik Sipil</a>
                    </li>
                    <li>
                      <a>Teknik Mesin</a>
                    </li>
                    <li>
                      <a>Teknik Elektronika</a>
                    </li>
                    <li>
                      <a>Teknik Kimia</a>
                    </li>
                    <li>
                      <a>Akuntansi</a>
                    </li>
                    <li>
                      <a>Administrasi Niaga</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a href="">Unit Sertifikasi</a>
              </li>
              <li>
                <a href="">UPT Bahasa</a>
              </li>
              <li>
                <a href="">UPT Perpustakaan</a>
              </li>
              <li>
                <a href="">UPA Karier dan Kewirausahaan</a>
              </li>
              <li>
                <a href="">Satgas Covid-19</a>
              </li>
              <li>
                <a href="">Zona Integritas</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* navbar bawah ukuran:md */}
      <details className="shadow-sm/20 collapse pt-2 xl:hidden bg-base-100 xl:mt-5 pb-5 rounded-none">
        <summary className="collapse-title p-0 font-light">
          <div className="flex items-center justify-center gap-1">
            <i className="fas fa-bars text-2xl"></i>
          </div>
        </summary>
        <div className="collapse-content text-sm flex mt-3 gap-1 flex-col">
          <a
            className="btn bg-base-100 dark:bg-base-700 cursor-pointer rounded-sm border-0 
                  hover:bg-base-300 hover:text-primary transition-colors duration-300"
          >
            PROFILE
          </a>
          <a
            className="btn bg-base-100 dark:bg-base-700 cursor-pointer rounded-sm border-0 
                  hover:bg-base-300 hover:text-primary transition-colors duration-300"
          >
            SAKIP
          </a>
          <a
            className="btn bg-base-100 dark:bg-base-700 cursor-pointer rounded-sm border-0 
                  hover:bg-base-300 hover:text-primary transition-colors duration-300"
          >
            LAYANAN
          </a>
          <a
            className="btn bg-base-100 dark:bg-base-700 cursor-pointer rounded-sm border-0 
                  hover:bg-base-300 hover:text-primary transition-colors duration-300"
          >
            JURUSAN
          </a>
          <a
            className="btn bg-base-100 dark:bg-base-700 cursor-pointer rounded-sm border-0 
                  hover:bg-base-300 hover:text-primary transition-colors duration-300"
          >
            KEMAHASISWAAN
          </a>
          <a
            className="btn bg-base-100 dark:bg-base-700 cursor-pointer rounded-sm border-0 
                  hover:bg-base-300 hover:text-primary transition-colors duration-300"
          >
            PENELITIAN
          </a>
          <a
            className="btn bg-base-100 dark:bg-base-700 cursor-pointer rounded-sm border-0 
                  hover:bg-base-300 hover:text-primary transition-colors duration-300"
          >
            AKADEMIK
          </a>
          <a
            className="btn bg-base-100 dark:bg-base-700 cursor-pointer rounded-sm border-0 
                  hover:bg-base-300 hover:text-primary transition-colors duration-300"
          >
            PENERIMAAN
          </a>
          <a
            className="btn bg-base-100 dark:bg-base-700 cursor-pointer rounded-sm border-0 
                  hover:bg-base-300 hover:text-primary transition-colors duration-300"
          >
            UNIT
          </a>
        </div>
      </details>
    </div>
  );
}
