import { Link } from "react-router-dom";

export default function MaintenaceComponents() {
  return (
    <div className="mt-2">
      <Link
        to="/informations/announcements/bee/challenge-bee-2026"
        className="block p-4 bg-gradient-to-br from-red-50 to-white border border-red-200 rounded-xl shadow-sm hover:shadow-md transition-all group"
      >
        <div className="flex items-center justify-between">
          <span className="inline-block px-2.5 py-0.5 text-[11px] font-bold text-white bg-[#820000] rounded-full uppercase tracking-wider">
            Pengumuman Baru
          </span>
          <span className="text-[11px] font-medium text-slate-500">2026</span>
        </div>
        <h3 className="font-bold text-[#820000] text-sm md:text-base mt-2.5 group-hover:underline">
          CHALLENGE BEE 2026
        </h3>
        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
          Panduan twibbon, video perkenalan, ketentuan ID Card, dan perlengkapan peserta BEE 2026.
        </p>
        <div className="mt-3 text-xs font-semibold text-[#820000] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
          <span>Lihat Pengumuman Lengkap</span>
          <span>→</span>
        </div>
      </Link>
    </div>
  );
}
