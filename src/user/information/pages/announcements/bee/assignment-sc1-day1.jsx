import { Link } from "react-router-dom";
import { MaintenaceComponents } from "../../../../../global/components";

export default function StudyClubOneDayOne() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen px-3 mt-3 bg-white py-4">
      <div className="md:w-8/12 w-full px-2">
        <h1 className="font-bold md:text-2xl mb-3">
          ASSIGNMENT STUDY CLUB 1 OF BEE 2025
        </h1>
        <div className="text-sm md:text-base md:pl-3">
          <ol className="list-decimal pl-4 pr-2 text-justify bold-list-decimal">
            <li className="mt-3">
              <strong className="text-red-500">ASSIGNMENT OF STUDY CLUB 1</strong>

              <ul className="list-disc pl-6 list-disc-marker">
                <li>
                  Membuat video resume materi saat Study Club
                </li>
              </ul>
            </li>

            <li className="mt-3">
              <strong className="text-red-500">RULES OF ASSIGNMENTS</strong>

              <ul className="list-disc pl-6 list-disc-marker">
                <li>
                  Durasi video minimal 3 menit
                </li>
                <li>
                  Berisi pemaparan atau review materi pada saat Study Club (In English)
                </li>
                <li>
                  Upload di Instagram dan Tiktok
                </li>
                <li> Mention akun Instagram {" "}
                  <Link to={"https://www.instagram.com/ukmfteecom/"} className="font-semibold text-red-600 hover:text-blue-700 underline hover:no-underline">@ukmfteecom</Link>, {" "} 
                  <Link to={"https://www.instagram.com/bee.eecom/"} className="font-semibold text-red-600 hover:text-blue-700 underline hover:no-underline">@bee.eecom</Link>, dan LO masing-masing. Untuk tag LO dan BEE menggunakan fitur IG
                </li>

                <li>Akun medsos tidak boleh diprivate dan wajib first account</li>
                <li>
                  Penugasan tidak boleh dihapus hingga rentetan BEE 2024 berakhir, pada <span className="font-bold">6 Oktober 2024</span>
                </li>
                <li>
                  Maksimal di upload <span className="font-bold text-red-600">pukul 15.00 pada 19 September 2024</span>
                </li>
                <li>
                  Video diberi Logo EECOM dan Logo BEE. Logo EECOM disebelah kiri atas pojok dan logo BEE disebelah kanan atas pojok
                </li>
              </ul>
            </li>

            <li className="mt-3">
              <strong className="text-red-500">CAPTION VIDEO :</strong>

              <p>Nama, Prodi, Judul resume materi</p>
              <br />
              <p>
                IG : @ukmfteecom <br />
                TWITTER : @ukmfteecom <br />
                YOUTUBE : UKM-FT EECOM <br />
                WEB : ukmfteecom.vercel.app
              </p>
              <br />
              <p>
                #BEE2024 <br />
                #EECOM2024 <br />
                #ElevateAsOneRadiateForEternity <br />
                #BEEIntroduction <br />
                #BEEECOM <br />
                #BEENJOY <br />
                #BEHAPPY
              </p>
            </li>
            
          </ol>

        </div>
      </div>

      <div className="md:w-4/12 w-full mt-5 md:mt-0 px-2 hidden md:block">
        <MaintenaceComponents />
      </div>
    </div>
  );
}
