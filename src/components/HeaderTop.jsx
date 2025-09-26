import logo from "../assets/logo.png";
import GradientBlinds from "../UI/GradientBlinds";

export default function Header() {
  return (
    <header className="">
      {/* navbar atas */}
      <div className="flex text-xs p-2 font-semibold items-center justify-end bg-base-200 py-4">
        <div className="flex items-center gap-1.5">
          <i className="fa fa-globe"></i>
          <p className="cursor-pointer">English</p>|
          <p className="cursor-pointer text-primary">Indonesia</p>
        </div>
      </div>

      {/* navbar tengah */}
      <div className="navbar justify-between flex-wrap gap-3 p-5 py-10 bg-base-100 px-6 sticky top-0 z-50">
        {/* Logo */}
        <div className="">
          <a className="cursor-pointer normal-case text-xl font-bold text-primary">
            <img
              src={logo}
              alt="logo-instansi-politeknik"
              className="w-90 object-cover"
            />
          </a>
        </div>

        {/* ui pencarian */}
        <div className="rounded-md px-3 py-0 flex items-center outline dark:outline-gray-600 outline-gray-300">
          <div className="border-r-2 pr-3 border-gray-300 dark:border-gray-700">
            <i className=" fa fa-magnifying-glass"></i>
          </div>
          <div>
            <input
              type="text"
              placeholder="Search"
              className="input input-ghost w-full max-w-xs focus:outline-none"
            />
          </div>
        </div>
      </div>

      
    </header>
  );
}
