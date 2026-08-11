import { MaintenaceComponents } from "../../global/components";
import LirikMarsEECOM from "./components/lirik-mars-eecom";
import TitleMarsEECOM from "./components/title-mars-eexom";
import YoutubeMarsEECOM from "./components/yt-mars-eecom";

export default function MarsEecom() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen px-3 pt-5 bg-white">
      <div className="md:w-8/12 w-full px-2">
        <TitleMarsEECOM />
        
        <LirikMarsEECOM />

        <hr className="md:ml-20 mt-5 mb-5 border-gray-500 border-1" />

        <YoutubeMarsEECOM linkYtEmbed="https://www.youtube.com/embed/Aj_v-6l08PA?si=SKQfr9suiU689rsL&amp;controls=0" />
    
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
