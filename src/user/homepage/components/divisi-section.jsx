import { entreIcons, hrdIcons, icIcons, rndIcons } from "../../../global/assets";

export default function DivisionSection() {
  return (
    <section className="bg-white md:px-10 px-4 py-7 md:py-20">
      <h1 className="w-full text-center text-2xl md:text-4xl font-bold">EECOM DIVISIONS</h1>
      
      <div>
        <p className="text-center md:text-base text-sm md:px-40 mt-5">
          Pada Periode Tahun 2026, UKM-FT EECOM memiliki 4 divisi dengan berbagai macam agenda dan program kerja pada masing-masing divisi dengan tujuan agar tercapainya visi dan misi UKM-FT EECOM di Periode ini.
        </p>
      </div>
      
      <div className="flex md:flex-row flex-col justify-between mt-3">
        <div className="md:w-4/12 flex flex-col md:justify-around">
          <div className="flex flex-row items-center">
            <div>
              <img src={hrdIcons} alt="logo-eecom" className="w-32 h-auto" />
            </div>
            <div className="ms-3">
              <h1 className="text-red-600 text-base md:text-lg font-bold">Human Resource Development</h1>
              <polyline className="text-sm md:text-base text-justify">
                Berperan untuk menjaga kekeluargaan anggota UKM-FT EECOM baik internal maupun ekstetrnal.
              </polyline>
            </div>
          </div>

          <div className="flex flex-row items-center md:mt-0 mt-2">
            <div>
              <img src={icIcons} alt="logo-eecom" className="w-24 h-auto"/>
            </div>
            <div className="ms-3">
              <h1 className="text-red-600 text-base md:text-lg font-bold">Information and Communication</h1>
              <p className="text-sm md:text-base text-justify">
                Bergerak di bidang informasi dan komunikasi serta sosial media UKM-FT EECOM.
              </p>
            </div>
          </div>
        </div>
      
        <div className="hidden md:flex md:w-4/12 justify-center items-center">
          <img src="/eecom-logo.png" alt="logo-eecom" className="h-80 w-auto" />
        </div>
      
        <div className="md:w-4/12 flex flex-col md:justify-around">
          <div className="flex flex-row items-center md:mt-0 mt-2">
            <div>
              <img src={rndIcons} alt="logo-eecom" className="w-32 h-auto" />
            </div>
            <div className="ms-3">
              <h1 className="text-red-600 text-base md:text-lg font-bold">Research and Development</h1>
              <p className="text-sm md:text-base text-justify">
                Bergerak untuk meningkatkan dan menggali setiap potensi sumberdaya pengurus UKM-FT EECOM.
              </p>
            </div>
          </div>

          <div className="flex flex-row items-center md:mt-0 mt-2">
            <div>
              <img src={entreIcons} alt="logo-eecom" className="w-32 h-auto"/>
            </div>
            <div className="ms-3">
              <h1 className="text-red-600 text-base md:text-lg font-bold">Entrepreneurship</h1>
              <p className="text-sm md:text-base text-justify">
                Bergerak di bidang wirausaha UKM-FT EECOM. Memberikan pemasukan dana kepada UKM-FT EECOM.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}