import ElectricBorder from "../UI/ElectricBorder";

export default function Banner() {
  return (
    <div className="p-4 gap-4 py-6 mb-6 bg-base-300 flex items-center justify-between flex-wrap">
      <p className="text-2xl font-normal">
        Penerimaan Mahasiswa Baru Reguler UMPN-PNUP (UMPN-PNUP)
      </p>
      <ElectricBorder
        color="#3560BA"
        speed={1}
        chaos={0.5}
        thickness={3}
        style={{ borderRadius: 5 }}
        className="p-[3px]"
      >
        <div className="btn btn-neutral rounded-sm">
          <i className="fas fa-check"></i> Daftar
        </div>
      </ElectricBorder>
    </div>
  );
}
