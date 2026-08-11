import { MaintenaceComponents } from "../../global/components";
import DeskripsiLogo from "./components/desk-logo";

export default function LogoEecom() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen px-3 pt-5 bg-white">
      <div className="md:w-8/12 w-full px-2 md:mb-5">
        <div className="flex flex-col items-center">
          <img src="/eecom-logo.png" alt="Logo EECOM" className="w-40 md:w-72 h-auto"/>
        </div>

        <DeskripsiLogo />
      </div>

      <div className="md:w-4/12 w-full mt-5 md:mt-0 px-2">
        <div className="">
          <h1 className="text-center font-semibold">Latest Information</h1>
        </div>
        <MaintenaceComponents />
      </div>
    </div>
  )
}
