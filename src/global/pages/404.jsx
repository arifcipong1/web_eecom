import { Link } from "react-router-dom";
import { bgError, imgBuddy } from "../assets";
import { Button } from "flowbite-react";

export default function NotFoundPage() {
  return (
    <div
      className="relative h-screen w-full flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgError})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Link to={import.meta.env.VITE_LINK_AUTHOR} target="_blank" className="absolute bottom-0 left-0">
        <img src={imgBuddy} alt="Decorative Image" className="h-24" />
      </Link>
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl text-white font-bold">404</h1>
        <p className="text-2xl text-white mt-2">Page Not Found</p>
        <Link to={"/"} className="inline-block mt-4">
          <Button gradientDuoTone="pinkToOrange" className="focus:outline-none">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  )
}
