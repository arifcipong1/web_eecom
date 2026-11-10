import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiDownload,
  HiIdentification,
  HiUserGroup,
  HiUser,
  HiCalendar,
  HiClock,
  HiExclamationCircle,
  HiClipboardCopy,
  HiClipboardCheck,
} from "react-icons/hi";
import { FaInstagram, FaTiktok } from "react-icons/fa";

export default function InformationsPage() {
  const [copied, setCopied] = useState(false);

  const captionText = `🚀🐝 READY TO EXPLORE THE UNIVERSE WITH BEE 2026! 🐝🚀

There's a whole universe of possibilities out there, just waiting to be explored!

Hello, I'm (full name) from (your major), Faculty of Engineering. My group name is (group name).
I'm ready and excited to join BEE 2026 by UKM-FT EECOM, University of Trunodjoyo Madura

A new adventure with BEE (Basic English Education) 2026 is about to start, and I can't wait to dive in with all of you!

(tag IG @LO)

Want to know more?
📸 IG: @bee.eecom & @ukmfteecom
🎵 TikTok: @ukmfteecom
▶️ YouTube: UKM-FTECOM
🌐 Website: https://ukmfteecom.netlify.app/

#BEE2026
#EECOM2026
#BEEECOM
#BEENJOY
#BEHAPPY`;

  const handleCopy = () => {
    navigator.clipboard.writeText(captionText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen px-3 md:px-10 mt-4 bg-white py-6">
      {/* ===== MAIN CONTENT ===== */}
      <div className="md:w-8/12 w-full px-2 md:pr-6">
        {/* Header Title */}
        <div className="border-b-2 border-red-100 pb-4 mb-6">
          <span className="inline-block px-3 py-1 bg-[#820000] text-white text-xs font-semibold rounded-full uppercase tracking-wider mb-2">
            Official Announcement
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
            CHALLENGE BEE 2026
          </h1>
          <p className="text-sm md:text-base text-slate-600 mt-2">
            Basic English Education (BEE) 2026 — UKM-FT EECOM Universitas Trunojoyo Madura.
            Berikut adalah panduan lengkap serangkaian <span className="font-semibold text-[#820000]">Challenge</span> yang wajib dipersiapkan dan dipatuhi oleh seluruh calon member (peserta) BEE 2026.
          </p>
        </div>

        <div className="space-y-8 text-slate-700 text-sm md:text-base">
          {/* ============================================================ */}
          {/* SECTION 1: TWIBBON & VIDEO PERKENALAN */}
          {/* ============================================================ */}
          <section className="bg-slate-50 border border-slate-200 rounded-xl p-5 md:p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4 border-b border-slate-200 pb-3">
              <span className="p-2 bg-[#820000] text-white rounded-lg">
                <HiUser className="w-5 h-5" />
              </span>
              <div>
                <h2 className="text-lg md:text-xl font-bold text-[#820000]">
                  1. TWIBBON & VIDEO INTRODUCTION
                </h2>
                <p className="text-xs md:text-sm text-slate-500">Rules of Challenge</p>
              </div>
            </div>

            <div className="space-y-5">
              {/* Part A: Foto Twibbon */}
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <h3 className="font-semibold text-slate-800 mb-2">
                  A. Ketentuan Twibbon BEE 2026
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-600">
                  <li>
                    Foto twibbon bertema <strong>bebas dan sopan</strong>.
                  </li>
                  <li>
                    Unduh file twibbon resmi BEE 2026 melalui tombol download di bawah:
                  </li>
                </ul>
                <div className="mt-3">
                  <a
                    href="/IMG_4580.MOV"
                    download="Twibbon_BEE_2026.MOV"
                    className="inline-flex items-center gap-2 bg-[#820000] hover:bg-[#600000] text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 shadow hover:shadow-md"
                  >
                    <HiDownload className="w-5 h-5" />
                    Download File Twibbon BEE 2026
                  </a>
                </div>
              </div>

              {/* Part B: Video Perkenalan */}
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <h3 className="font-semibold text-slate-800 mb-2">
                  B. Ketentuan Video Perkenalan (Introduction Video)
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-600">
                  <li>
                    Durasi video minimal <strong>1 menit</strong>.
                  </li>
                  <li>
                    <strong>Wajib menyertakan:</strong> Logo BEE 2026 dan Logo UKM-FT EECOM di dalam video.
                  </li>
                  <li>
                    <strong>Poin perkenalan diri yang wajib disampaikan:</strong>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2 bg-slate-50 p-3 rounded-md text-xs md:text-sm">
                      <p>• Nama Lengkap</p>
                      <p>• Program Studi (Major)</p>
                      <p>• Asal Daerah</p>
                      <p>• Nama Kelompok</p>
                      <p>• Motto Hidup</p>
                      <p>• Alasan Bergabung EECOM</p>
                      <p className="md:col-span-2 font-medium text-slate-800">
                        • Jargon EECOM & Jargon BEE 2026 <em>(delivered in English)</em>
                      </p>
                    </div>
                  </li>
                  <li>
                    <strong>Dresscode saat pembuatan video:</strong> Bebas, rapi, dan berkerah.
                  </li>
                  <li>
                    Gunakan frame video resmi BEE 2026 dengan mengunduhnya melalui tombol di bawah:
                  </li>
                </ul>
                <div className="mt-3">
                  <a
                    href="/photos/perkenalan diri BEE26.png"
                    download="Frame_Video_Perkenalan_BEE2026.png"
                    className="inline-flex items-center gap-2 bg-[#820000] hover:bg-[#600000] text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 shadow hover:shadow-md"
                  >
                    <HiDownload className="w-5 h-5" />
                    Download Frame Video Perkenalan
                  </a>
                </div>
              </div>

              {/* Part C: Aturan Posting & Sosial Media */}
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <h3 className="font-semibold text-slate-800 mb-2">
                  C. Media Sosial & Aturan Upload
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-600">
                  <li>
                    Twibbon dan video perkenalan wajib di-upload di platform{" "}
                    <strong>Instagram</strong> dan <strong>TikTok</strong>.
                  </li>
                  <li>
                    <strong>Wajib Mention:</strong>
                    <ul className="list-circle pl-5 mt-1 space-y-1 text-slate-700">
                      <li className="flex items-center gap-1.5 flex-wrap">
                        <FaInstagram className="w-4 h-4 text-pink-600 inline-block" />
                        <span>Instagram:</span>
                        <Link
                          to="https://www.instagram.com/ukmfteecom/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-[#820000] hover:underline"
                        >
                          @ukmfteecom
                        </Link>
                        <span>,</span>
                        <Link
                          to="https://www.instagram.com/bee.eecom/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-[#820000] hover:underline"
                        >
                          @bee.eecom
                        </Link>
                        <span>, dan akun Instagram LO kelompok masing-masing.</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <FaTiktok className="w-3.5 h-3.5 text-slate-800 inline-block" />
                        <span>TikTok:</span>
                        <Link
                          to="https://www.tiktok.com/@ukmfteecom"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-[#820000] hover:underline"
                        >
                          @ukmfteecom
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Akun media sosial <strong>wajib first account (akun utama)</strong> dan{" "}
                    <strong>tidak boleh di-private</strong> selama rentetan kegiatan berlangsung.
                  </li>
                  <li>
                    Mencantumkan quotes pada caption twibbon. Dilarang keras menggunakan kata-kata kasar, toxic, maupun mengandung unsur SARA.
                  </li>
                  <li>
                    <span className="font-semibold text-slate-800">Deadline Upload:</span>{" "}
                    <span className="font-bold text-[#820000]">15 November 2026</span>
                  </li>
                  <li>
                    <span className="font-semibold text-slate-800">Format Caption Feed:</span>{" "}
                    <span className="text-slate-700 font-medium">Tersedia pada bagian D di bawah (bisa langsung disalin)</span>
                  </li>
                  <li className="text-red-900 font-semibold bg-red-50 p-3 rounded-md border border-red-200 flex items-start gap-2.5">
                    <HiExclamationCircle className="w-5 h-5 text-[#820000] flex-shrink-0 mt-0.5" />
                    <span>
                      Postingan Challenge <strong>TIDAK BOLEH DIHAPUS</strong> hingga seluruh rentetan kegiatan BEE 2026 berakhir pada{" "}
                      <strong>24 November 2026</strong>.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Part D: Format Caption Feed */}
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-slate-800">
                    D. Format Caption Feed Resmi
                  </h3>
                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#820000] hover:bg-[#600000] text-white rounded-md text-xs font-medium transition duration-200 shadow-sm"
                  >
                    {copied ? (
                      <>
                        <HiClipboardCheck className="w-4 h-4 text-green-300" />
                        <span>Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <HiClipboardCopy className="w-4 h-4" />
                        <span>Salin Caption</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-xs text-slate-500 mb-3">
                  Salin dan gunakan format caption di bawah ini saat mengunggah feed di Instagram / TikTok:
                </p>
                <div className="relative bg-slate-900 text-slate-100 p-4 rounded-lg text-xs md:text-sm font-sans whitespace-pre-wrap leading-relaxed select-all border border-slate-800">
                  {captionText}
                </div>
              </div>
            </div>
          </section>

          {/* ============================================================ */}
          {/* SECTION 2: KETENTUAN ID CARD */}
          {/* ============================================================ */}
          <section className="bg-slate-50 border border-slate-200 rounded-xl p-5 md:p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4 border-b border-slate-200 pb-3">
              <span className="p-2 bg-[#820000] text-white rounded-lg">
                <HiIdentification className="w-5 h-5" />
              </span>
              <div>
                <h2 className="text-lg md:text-xl font-bold text-[#820000]">
                  2. KETENTUAN ID CARD PESERTA
                </h2>
                <p className="text-xs md:text-sm text-slate-500">ID Card Guidelines & Specifications</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-slate-200">
              <ol className="list-decimal pl-5 space-y-2.5 text-slate-600">
                <li>
                  Pas foto pada ID Card bertema <strong>semiformal</strong> dengan background{" "}
                  <strong>merah maroon</strong> (
                  <span className="inline-flex items-center gap-1 font-mono text-xs font-bold text-[#820000] bg-red-50 px-2 py-0.5 rounded border border-red-200">
                    <span className="w-3 h-3 rounded-full bg-[#820000] inline-block"></span>
                    #820000
                  </span>
                  ).
                </li>
                <li>
                  Ukuran cetak ID Card: <strong>B5</strong>.
                </li>
                <li>
                  Menggunakan <strong>tali ID Card berwarna merah</strong>.
                </li>
                <li>
                  ID Card <strong>wajib dilaminating</strong> agar tetap rapi dan tidak mudah rusak.
                </li>
                <li>
                  Dicetak (print) menggunakan kertas <strong>buffalo putih</strong>.
                </li>
                <li>
                  Unduh file template resmi ID Card peserta melalui tombol di bawah:
                </li>
              </ol>

              <div className="mt-4">
                <a
                  href="/photos/ID CARD PESERTA BEE26.png"
                  download="ID_CARD_PESERTA_BEE2026.png"
                  className="inline-flex items-center gap-2 bg-[#820000] hover:bg-[#600000] text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 shadow hover:shadow-md"
                >
                  <HiDownload className="w-5 h-5" />
                  Download File Template ID Card
                </a>
              </div>
            </div>
          </section>

          {/* ============================================================ */}
          {/* SECTION 3: GROUP CHALLENGE */}
          {/* ============================================================ */}
          <section className="bg-slate-50 border border-slate-200 rounded-xl p-5 md:p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4 border-b border-slate-200 pb-3">
              <span className="p-2 bg-[#820000] text-white rounded-lg">
                <HiUserGroup className="w-5 h-5" />
              </span>
              <div>
                <h2 className="text-lg md:text-xl font-bold text-[#820000]">
                  3. GROUP CHALLENGE
                </h2>
                <p className="text-xs md:text-sm text-slate-500">Perlengkapan & Persiapan Kelompok</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-slate-200">
              <p className="text-slate-600 mb-3">
                Setiap kelompok wajib mempersiapkan dan membawa perlengkapan berikut:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-700">
                <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <span className="text-[#820000] font-bold">✓</span>
                  <div>
                    <strong>Yel-yel Kelompok</strong>
                    <p className="text-xs text-slate-500 mt-0.5">Kreatif, kompak, dan bersemangat.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <span className="text-[#820000] font-bold">✓</span>
                  <div>
                    <strong>Jargon Kelompok</strong>
                    <p className="text-xs text-slate-500 mt-0.5">Singkat, khas, dan membakar semangat.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <span className="text-[#820000] font-bold">✓</span>
                  <div>
                    <strong>Kardus Bekas</strong>
                    <p className="text-xs text-slate-500 mt-0.5">Sebanyak <strong>3 buah kardus</strong> per kelompok.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <span className="text-[#820000] font-bold">✓</span>
                  <div>
                    <strong>Tikar</strong>
                    <p className="text-xs text-slate-500 mt-0.5">Membawa <strong>1 buah tikar</strong> per kelompok.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200 md:col-span-2">
                  <span className="text-[#820000] font-bold">✓</span>
                  <div>
                    <strong>Stop Kontak / Kabel Rol</strong>
                    <p className="text-xs text-slate-500 mt-0.5">Membawa <strong>1 buah stop kontak</strong> dengan kabel yang aman dan berfungsi baik.</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* ============================================================ */}
          {/* SECTION 4: INDIVIDUAL CHALLENGE */}
          {/* ============================================================ */}
          <section className="bg-slate-50 border border-slate-200 rounded-xl p-5 md:p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4 border-b border-slate-200 pb-3">
              <span className="p-2 bg-[#820000] text-white rounded-lg">
                <HiUser className="w-5 h-5" />
              </span>
              <div>
                <h2 className="text-lg md:text-xl font-bold text-[#820000]">
                  4. INDIVIDUAL CHALLENGE
                </h2>
                <p className="text-xs md:text-sm text-slate-500">Perlengkapan Pribadi yang Wajib Dibawa</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-slate-200">
              <p className="text-slate-600 mb-4">
                Seluruh calon peserta wajib menyiapkan dan membawa barang-barang berikut secara mandiri:
              </p>

              {/* Urutan Menurun (Vertical Order) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-slate-700 text-sm">
                {/* Kolom Kiri: Nomor 1 - 12 */}
                <ol className="list-decimal pl-5 space-y-2">
                  <li><span className="font-medium">Baju berkerah:</span> Bebas & rapi</li>
                  <li><span className="font-medium">Baju olahraga & celana training:</span> Warna gelap (1 pasang)</li>
                  <li><span className="font-medium">Sepatu bebas (tertutup):</span> 1 pasang</li>
                  <li><span className="font-medium">Baju ganti:</span> Bebas secukupnya</li>
                  <li><span className="font-medium">Peralatan / alat sholat</span></li>
                  <li><span className="font-medium">Slayer gelap:</span> 1 buah</li>
                  <li><span className="font-medium">ATK (Alat Tulis Kantor):</span> Buku catatan & bolpoin</li>
                  <li><span className="font-medium">ID Card peserta</span> + tali merah (sudah dilaminating)</li>
                  <li><span className="font-medium">Surat Keterangan Sehat</span> (dari faskes/klinik/dokter)</li>
                  <li><span className="font-medium">Surat Izin Orang Tua</span></li>
                  <li><span className="font-medium">Fotokopi KTP</span></li>
                  <li><span className="font-medium">Fotokopi BPJS</span> (khusus bagi yang memiliki)</li>
                </ol>

                {/* Kolom Kanan: Nomor 13 - 23 */}
                <ol start={13} className="list-decimal pl-5 space-y-2">
                  <li><span className="font-medium">Lotion anti nyamuk</span></li>
                  <li><span className="font-medium">Botol tumbler (air minum)</span></li>
                  <li><span className="font-medium">Jaket hangat</span></li>
                  <li><span className="font-medium">Jas hujan / mantel</span></li>
                  <li><span className="font-medium">Sandal</span></li>
                  <li><span className="font-medium">Roti sisir</span></li>
                  <li><span className="font-medium">Bekal makan malam Day 1:</span> Disarankan makanan yang tidak mudah basi</li>
                  <li><span className="font-medium">Obat-obatan pribadi</span></li>
                  <li><span className="font-medium">Peralatan mandi</span></li>
                  <li><span className="font-medium">Hand warmer:</span> <em>(Opsional)</em></li>
                  <li><span className="font-medium">Selimut</span></li>
                </ol>
              </div>
            </div>
          </section>

          {/* ============================================================ */}
          {/* SECTION 5: DRESSCODE */}
          {/* ============================================================ */}
          <section className="bg-slate-50 border border-slate-200 rounded-xl p-5 md:p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4 border-b border-slate-200 pb-3">
              <span className="p-2 bg-[#820000] text-white rounded-lg">
                <HiCalendar className="w-5 h-5" />
              </span>
              <div>
                <h2 className="text-lg md:text-xl font-bold text-[#820000]">
                  5. DRESSCODE (DAY 1, DAY 2, DAY 3)
                </h2>
                <p className="text-xs md:text-sm text-slate-500">Ketentuan Pakaian Selama Kegiatan</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {/* Day 1 */}
              <div className="bg-white p-4 rounded-lg border-t-4 border-[#820000] shadow-sm">
                <div className="flex items-center gap-1.5 text-[#820000] font-bold text-sm mb-1">
                  <HiClock className="w-4 h-4" />
                  <span>DAY 1 (H-1)</span>
                </div>
                <p className="text-slate-700 text-sm font-medium mt-1">
                  Bebas rapi, berkerah, dan bersepatu
                </p>
              </div>

              {/* Day 2 */}
              <div className="bg-white p-4 rounded-lg border-t-4 border-[#820000] shadow-sm">
                <div className="flex items-center gap-1.5 text-[#820000] font-bold text-sm mb-1">
                  <HiClock className="w-4 h-4" />
                  <span>DAY 2 (H-2)</span>
                </div>
                <p className="text-slate-700 text-sm font-medium mt-1">
                  Bebas rapi, berkerah, dan bersepatu
                </p>
              </div>

              {/* Day 3 */}
              <div className="bg-white p-4 rounded-lg border-t-4 border-[#820000] shadow-sm">
                <div className="flex items-center gap-1.5 text-[#820000] font-bold text-sm mb-1">
                  <HiClock className="w-4 h-4" />
                  <span>DAY 3 (H-3)</span>
                </div>
                <p className="text-slate-700 text-sm font-medium mt-1">
                  Pakaian olahraga & bersepatu
                </p>
                <p className="text-xs text-slate-500 mt-1 italic">
                  *Saat penutupan berganti memakai baju berkerah rapi.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ===== SIDEBAR ===== */}
      <div className="md:w-4/12 w-full mt-6 md:mt-0 px-2">
        <div className="sticky top-24 space-y-4">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-sm">
            <h2 className="font-bold text-slate-800 text-base mb-3 border-b pb-2 flex items-center gap-2">
              <HiDownload className="w-5 h-5 text-[#820000]" />
              Quick Downloads & Links
            </h2>
            <div className="flex flex-col gap-2.5">
              <a
                href="/IMG_4580.MOV"
                download="Twibbon_BEE_2026.MOV"
                className="flex items-center justify-between p-3 bg-white hover:bg-red-50 border border-slate-200 hover:border-red-300 rounded-lg text-xs md:text-sm font-semibold text-slate-700 hover:text-[#820000] transition duration-150"
              >
                <span>Download File Twibbon</span>
                <HiDownload className="w-4 h-4 text-[#820000]" />
              </a>

              <a
                href="/photos/perkenalan diri BEE26.png"
                download="Frame_Video_Perkenalan_BEE2026.png"
                className="flex items-center justify-between p-3 bg-white hover:bg-red-50 border border-slate-200 hover:border-red-300 rounded-lg text-xs md:text-sm font-semibold text-slate-700 hover:text-[#820000] transition duration-150"
              >
                <span>Download Frame Video</span>
                <HiDownload className="w-4 h-4 text-[#820000]" />
              </a>

              <a
                href="/photos/ID CARD PESERTA BEE26.png"
                download="ID_CARD_PESERTA_BEE2026.png"
                className="flex items-center justify-between p-3 bg-white hover:bg-red-50 border border-slate-200 hover:border-red-300 rounded-lg text-xs md:text-sm font-semibold text-slate-700 hover:text-[#820000] transition duration-150"
              >
                <span>Download Template ID Card</span>
                <HiDownload className="w-4 h-4 text-[#820000]" />
              </a>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-sm">
            <h3 className="font-bold text-slate-800 text-sm mb-2 border-b pb-2">
              Official Media Sosial
            </h3>
            <p className="text-xs text-slate-600 mb-3">
              Pantau informasi terbaru dan tag akun resmi kami:
            </p>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-center gap-2">
                <FaInstagram className="w-4 h-4 text-pink-600 flex-shrink-0" />
                <span className="text-slate-700">Instagram:</span>
                <a
                  href="https://www.instagram.com/bee.eecom/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#820000] hover:underline"
                >
                  @bee.eecom
                </a>
                <span>&</span>
                <a
                  href="https://www.instagram.com/ukmfteecom/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#820000] hover:underline"
                >
                  @ukmfteecom
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaTiktok className="w-4 h-4 text-slate-800 flex-shrink-0" />
                <span className="text-slate-700">TikTok:</span>
                <a
                  href="https://www.tiktok.com/@ukmfteecom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#820000] hover:underline"
                >
                  @ukmfteecom
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
