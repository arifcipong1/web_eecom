import { MaintenaceComponents } from "../../global/components";

export default function InformationsPage() {
  return (
    <>
      <MaintenaceComponents />

      {/* === CONTENT TERSIMPAN — AKAN DITAMPILKAN KEMBALI NANTI ===

      <div className="md:w-8/12 w-full px-2">
        <h1 className="font-bold md:text-2xl mb-3">
          ASSIGNMENT TECHNICAL MEETING 1 OF BEE 2024
        </h1>
        <div className="text-sm md:text-base md:pl-3">
          <ol className="list-decimal pl-4 pr-2 text-justify bold-list-decimal">
            <li className="mt-3">
              <strong className="text-red-500">ASSIGNMENT OF TM 1</strong>

              <ul className="list-disc pl-6 list-disc-marker">
                <li>
                  Follow instagram {" "}
                  <Link to={"https://www.instagram.com/ukmfteecom/"} className="font-semibold text-red-600 hover:text-blue-700 underline hover:no-underline">@ukmfteecom</Link>, {" "} 
                  <Link to={"https://www.instagram.com/bee.eecom/"} className="font-semibold text-red-600 hover:text-blue-700 underline hover:no-underline">@bee.eecom</Link>, dan LO masing-masing
                </li>
                <li>
                  Follow tiktok {" "}
                  <Link to={"https://www.tiktok.com/@ukmfteecom"} className="font-semibold text-red-600 hover:text-blue-700 underline hover:no-underline">
                    @ukmfteecom
                  </Link>
                </li>
                <li>
                  Subscribe Youtube {" "}
                  <Link to={"https://www.youtube.com/@UKMFTEECOM"} className="font-semibold text-red-600 hover:text-blue-700 underline hover:no-underline">
                    UKM-FT EECOM
                  </Link>
                </li>
                <li>
                  Twibbon
                </li>
                <li>
                  Video perkenalan
                </li>
                <li>
                  Menghafal mars eecom, jargon eecom, dan jargon bee
                </li>
              </ul>
            </li>

            <li className="mt-3">
              <strong className="text-red-500">RULES OF ASSIGNMENTS</strong>

              <ul className="list-disc pl-6 list-disc-marker">
                <li>
                  Download {" "}
                  <Link to={"https://drive.google.com/file/d/1c6IG103kWa-XYYY0GdPyVvYq77O1fqZt/view?usp=drivesdk"} className="font-semibold text-red-600 hover:text-blue-700 underline hover:no-underline">
                    Twibbon BEE 2024
                  </Link>
                </li>
                <li>
                  Foto twibbon semi formal background merah maroon (<span className="font-semibold text-white" style={{background : "#611D20"}}>#611D20</span>)
                </li>
                <li>
                  Video perkenalan minimal 1 menit dengan ketentuan sebagai berikut :

                  <ul className="list-lower-alpha pl-6">
                    <li>
                      Wajib ada {" "}
                      <Link to={"https://drive.google.com/file/d/1c8V_e4-T3cXKjjmQFUQmlSggUduvwi4m/view?usp=drivesdk"} className="font-semibold text-red-600 hover:text-blue-700 underline hover:no-underline">Logo BEE 2024</Link> dan {" "}
                      <Link to={"https://drive.google.com/file/d/1c8tWlkXFZ-baMD6ZjvTm3BHjdfjioiAZ/view?usp=drivesdk"} className="font-semibold text-red-600 hover:text-blue-700 underline hover:no-underline">Logo EECOM</Link> di video
                    </li>
                    <li> Nama </li>
                    <li> Program Studi </li>
                    <li> Asal </li>
                    <li> Nama Kelompok </li>
                    <li> Motto </li>
                    <li> Alasan Join UKM-FT EECOM </li>
                    <li> Jargon EECOM dan BEE 2024 (in English) </li>
                    <li> Dresscode bebas rapi berkerah </li>
                  </ul>
                
                </li>
                  
                <li> Twibbon dan video diupload di Instagram dan tiktok </li>
                <li> Mention akun Instagram {" "}
                  <Link to={"https://www.instagram.com/ukmfteecom/"} className="font-semibold text-red-600 hover:text-blue-700 underline hover:no-underline">@ukmfteecom</Link>, {" "} 
                  <Link to={"https://www.instagram.com/bee.eecom/"} className="font-semibold text-red-600 hover:text-blue-700 underline hover:no-underline">@bee.eecom</Link>, dan LO masing-masing
                </li>

                <li>
                  Mention akun tiktok {" "}
                  <Link to={"https://www.tiktok.com/@ukmfteecom"} className="font-semibold text-red-600 hover:text-blue-700 underline hover:no-underline">
                    @ukmfteecom
                  </Link>
                </li>

                <li>Akun medsos tidak boleh diprivate dan wajib first account</li>
                <li>Mencantumkan quotes di caption twibbon (in English), dilarang menggunakan kata kasar, toxic, dan mengandung SARA.</li>
                <li>
                  Upload terakhir <span className="font-bold">Selasa, 10 September 2024 pukul 23.59 WIB</span>
                </li>
                <li>
                  Penugasan tidak boleh dihapus hingga rentetan BEE 2024 berakhir, pada <span className="font-bold">6 Oktober 2024</span>
                </li>
              </ul>
            </li>

            <li className="mt-3">
              <strong className="text-red-500">CAPTION VIDEO PERKENALAN :</strong>

              <h6>((Introduce yourself))</h6>
              <h6 className="my-3">More Information : @bee.eecom</h6>
              <h6>
                IG : @ukmfteecom <br />
                TWITTER : @ukmfteecom <br />
                YOUTUBE : UKM-FT EECOM <br />
                WEB : ukmfteecom.vercel.app
              </h6>
              <h6 className="mt-5">
                #BEE2024 <br />
                #EECOM2024 <br />
                #ElevateAsOneRadiateForEternity <br />
                #BEEIntroduction <br />
                #BEEECOM <br />
                #BEENJOY <br />
                #BEHAPPY
              </h6>
            </li>
            
            <li className="mt-3">
              <strong className="text-red-500">CAPTION TWIBBON :</strong>

              <blockquote>
               &quot;You cannot change what you are, only what you do.&quot; - Philip Pullman, Golden Compass
              </blockquote>

              <h6 className="mt-3">
                Hallo, I&apos;m (name) from (major), Engineering Faculty, my group name is (nama grup).
                I&apos;m ready and excited to join BEE 2024 by UKM-FT EECOM University of Trunojoyo Madura
              </h6>

              <h6 className="my-3">More Information : @bee.eecom</h6>
              <h6>
                IG : @ukmfteecom <br />
                TWITTER : @ukmfteecom <br />
                YOUTUBE : UKM-FT EECOM <br />
                WEB : ukmfteecom.vercel.app
              </h6>
              <h6 className="mt-5">
                #BEE2024 <br />
                #EECOM2024 <br />
                #ElevateAsOneRadiateForEternity <br />
                #BEEIntroduction <br />
                #BEEECOM <br />
                #BEENJOY <br />
                #BEHAPPY
              </h6>
            </li>
          </ol>

        </div>
      </div>

      <div className="md:w-4/12 w-full mt-5 md:mt-0 px-2 hidden md:block">
        <MaintenaceComponents />
      </div>
      === AKHIR CONTENT TERSIMPAN === */}
    </>
  );
}
