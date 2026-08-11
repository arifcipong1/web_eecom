import { BsInstagram, BsTiktok, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function FooterComponent() {
  return (
    <footer className="bg-red-600 text-white">
      <div className="w-full max-w-screen-xl mx-auto p-4">
        <div className="sm:flex sm:items-center sm:justify-between">
          
          <Link to={"/"} className="flex items-center space-x-2 mb-2 sm:mb-0 rtl:space-x-reverse text-white">
            <img src={"/eecom-logo.png"} className="h-10" alt="EECOM LOGO" />
            <div className="flex flex-col justify-center">
              <h1 className="font-semibold text-base">UKM-FT EECOM</h1>
              <span className="text-xs">Engineering English Community</span>
            </div>
          </Link>

          <ul className="flex flex-wrap items-center text-sm font-medium my-6 sm:my-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>

        <hr className="my-3 border-gray-200 sm:mx-auto lg:my-3" />
        <div className="flex items-center justify-between">
          <span className="block text-sm text-center">© 2024 <Link to={""} className="hover:underline">UKM-FT EECOM</Link> | Be Enjoy Be Happy</span>
          <div className="flex">
            <Link to={"https://www.instagram.com/ukmfteecom/"} target="_blank" className="me-2"><BsInstagram/></Link>
            <Link to={"http://www.youtube.com/@UKMFTEECOM"} target="_blank" className="me-2"><BsYoutube/></Link>
            <Link to={"https://www.tiktok.com/@ukmfteecom"} target="_blank" ><BsTiktok/></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}