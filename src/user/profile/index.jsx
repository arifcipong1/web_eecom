import { MaintenaceComponents } from "../../global/components";

export default function ProfileEecom() {
  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen px-3 pt-5 bg-white">
        <div className="md:w-8/12 w-full px-2 md:mb-5">
          <div className="flex flex-col items-center">
            <img src="/eecom-logo.png" alt="Logo EECOM" className="w-40 md:w-72 h-auto"/>
            {/* <h1 className="font-bold md:text-2xl">UNIT KEGIATAN MAHASISWA</h1>
            <h1 className="font-bold md:text-2xl">FAKULTAS TEKNIK</h1>
            <h1 className="font-bold md:text-2xl">ENGINEERING ENGLISH COMMUNITY</h1>
            <h1 className="font-bold md:text-2xl">UNIVERSITAS TRUNOJOYO MADURA</h1> */}
          </div>
          
          <div className="text-sm md:text-base md:pl-3">

            <ol className="list-upper-alpha pl-4 pr-2 text-justify bold-list-alpha">
              <li className="mt-3">
                <strong className="text-red-500">SEJARAH</strong> 
                <p className="mt-1 text-paragraph">
                EECOM didirikan pada hari Minggu, 10 Oktober 2004 atas berkat rahmat Tuhan Yang Maha Kuasa, maka dibentuklah Unit Kegiatan Mahasiswa Fakultas Teknik <i className="text-red-600 font-semibold">“Engineering English Community”</i>. EECOM sebagai organisasi kemahasiswaan intra kampus, merupakan organisasi struktural di bawah Badan Eksekutif Mahasiswa Fakultas Teknik Universitas Trunojoyo yang menaungi segenap aktivitas mahasiswa dalam pengembangan pengetahuan dibidang Bahasa Inggris.
                </p>
              </li>
              
              <li className="mt-3">
                <strong className="text-red-500">VISI</strong>
                <p className="mt-1 text-paragraph">
                Menjadi organisasi kemahasiswaan yang bergerak dibidang Bahasa Inggris di Fakultas Teknik yang cerdas, berdaya saing dan berakhlakul karimah.
                </p>
              </li>
              
              <li className="mt-3">
                <strong className="text-red-500">MISI</strong>
                <p className="mt-1 text-paragraph">
                Melaksanakan kegiatan belajar dan mengajar Bahasa Inggris kepada Mahasiswa Fakultas Teknik Universitas Trunojoyo Madura untuk meningkatkan prestasi akademik dan non-akademik.
                </p>
              </li>
              
              <li className="mt-3">
                <strong className="text-red-500">MOTTO</strong>
                <p className="mt-1 text-paragraph">
                <i>&quot;Be EECOM Be Enjoy Be Happy&quot;</i>
                </p>
              </li>
              
              <li className="mt-3">
                <strong className="text-red-500">KEPENGURUSAN</strong>
                <p className="text-paragraph">
                Kepengurusan EECOM terdiri dari Daily Manager atau Pengurus Harian dan 4 Divisi yang masing-masing divisi memiliki tugas dan tanggung jawabnya, yaitu :
                </p>
                <ol className="list-decimal pl-4">
                  <li className="mt-2">
                    <strong className="text-red-500">Daily Manager :</strong> 
                    <p className="mt-1 text-paragraph">
                    Daily Manager bertanggung jawab untuk mengimplementasikan kebijakan, mengelola keuangan, mengoordinasikan kegiatan, menjalin hubungan eksternal, menyusun laporan, dan mengelola sumber daya manusia member EECOM serta berperan penting dalam mencapai tujuan organisasi dan memastikan operasional harian berjalan lancar.
                    </p>
                  </li>
                  
                  <li className="mt-2">
                    <strong className="text-red-500">Human Resource Development :</strong> 
                    <p className="mt-1 text-paragraph">
                    Divisi Human Resource Development (HRD) adalah Divisi yang fokus untuk mempererat dan menjaga kekeluargaan (internal) sekaligus melaksanakan penerimaan calon member baru UKM-FT EECOM.
                    </p>
                  </li>
                  
                  <li className="mt-2">
                    <strong className="text-red-500">Research and Development :</strong> 
                    <p className="mt-1 text-paragraph">
                    Divisi Research and Development (RnD) adalah Divisi akademik yang berfokus dalam meningkatkan kemampuan bahasa inggris di lingkungan internal UKM-FT EECOM.
                    </p>
                  </li>
                  
                  <li className="mt-2">
                    <strong className="text-red-500">Information and Communication :</strong> 
                    <p className="mt-1 text-paragraph">
                    Divisi Information and Communication (IC) adalah Divisi yang berfokus pada sarana publikasi, informasi dan menjaga hubungan baik dengan masyarakat umum, organisasi, dan instansi terkait.
                    </p>
                  </li>
                  
                  <li className="mt-2">
                    <strong className="text-red-500">Entrepreneurship :</strong> 
                    <p className="mt-1 text-paragraph">
                    Divisi Entrepreneurship adalah Divisi UKM-FT EECOM yang menjadi sarana melatih jiwa entrepreneur para member, sehingga tidak hanya melatih kemampuan bahasa inggris tetapi juga jiwa kewirausahaan.
                    </p>
                  </li>
                </ol>
              </li>
            </ol>
          </div>
        </div>

        <div className="md:w-4/12 w-full mt-5 md:mt-0 px-2">
          <div className="">
            <h1 className="text-center font-semibold">Latest Information</h1>
          </div>
          <MaintenaceComponents />
        </div>
      </div>
    </>

    
  )
}