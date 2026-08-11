import { useState } from "react";
import { Dropdown, Navbar, TextInput } from "flowbite-react";
import { HiCollection, HiDocumentSearch, HiHome, HiInformationCircle, HiMenu, HiSearch, HiUserGroup, HiX, HiChevronDown } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

export default function NavbarComponent() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenSection(null);
  };

  const goTo = (path) => {
    navigate(path);
    closeMenu();
  };

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="sticky top-0 z-50">
      {/* ===== TOP BAR ===== */}
      <div className="flex flex-wrap justify-between items-center p-3 bg-red-600">
        <Link to="/" className="flex items-center space-x-2 text-white">
          <img src="/eecom-logo.png" className="h-10 md:h-14" alt="EECOM LOGO" />
          <div className="flex flex-col justify-center">
            <h1 className="font-semibold text-base md:text-2xl">UKM-FT EECOM</h1>
            <span className="text-xs">Engineering English Community</span>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          {/* Search bar — desktop only */}
          <form className="hidden md:flex max-w-md">
            <TextInput type="text" icon={HiSearch} placeholder="search article" required />
          </form>

          {/* Hamburger button — mobile only */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-red-700 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* ===== DESKTOP NAV BAR ===== */}
      <div className="hidden md:flex bg-slate-200 text-red-700 justify-center">
        <div className="flex space-x-1 text-center font-medium whitespace-nowrap">
          <Link to="/" className="flex items-center px-3 py-2 hover:bg-red-600 hover:text-white">
            <HiHome className="mr-1" />Home
          </Link>

          <div className="flex items-center px-3 py-2 hover:bg-red-600 hover:text-white">
            <Dropdown label={<><HiInformationCircle className="mr-1" />About</>} inline>
              <Dropdown.Item className="text-red-700" onClick={() => navigate('/profile')}>Profile EECOM</Dropdown.Item>
              <Dropdown.Item className="text-red-700" onClick={() => navigate('/logo-eecom')}>Logo EECOM</Dropdown.Item>
              <Dropdown.Item className="text-red-700" onClick={() => navigate('/mars-eecom')}>Mars EECOM</Dropdown.Item>
            </Dropdown>
          </div>

          <div className="flex items-center px-3 py-2 hover:bg-red-600 hover:text-white">
            <Dropdown label={<><HiUserGroup className="mr-1" />Organization</>} inline>
              <Dropdown.Item className="text-red-700" onClick={() => navigate('/organisasi/struktur')}>Struktur Organisasi</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item className="text-red-700" onClick={() => navigate('/organisasi/ph/2026')}>Daily Manager</Dropdown.Item>
              <Dropdown.Item className="text-red-700" onClick={() => navigate('/organisasi/hrd/2026')}>Human Resource Development</Dropdown.Item>
              <Dropdown.Item className="text-red-700" onClick={() => navigate('/organisasi/rnd/2026')}>Research And Development</Dropdown.Item>
              <Dropdown.Item className="text-red-700" onClick={() => navigate('/organisasi/ic/2026')}>Information And Communication</Dropdown.Item>
              <Dropdown.Item className="text-red-700" onClick={() => navigate('/organisasi/entre/2026')}>Entrepreneurship</Dropdown.Item>
            </Dropdown>
          </div>

          <div className="flex items-center px-3 py-2 hover:bg-red-600 hover:text-white">
            <Dropdown label={<><HiDocumentSearch className="mr-1" />Information</>} inline>
              <Dropdown.Item className="text-red-700" onClick={() => navigate('/info-1')}>All</Dropdown.Item>
              <Dropdown.Item className="text-red-700" onClick={() => navigate('/info-1')}>News</Dropdown.Item>
              <Dropdown.Item className="text-red-700" onClick={() => navigate('/informations/announcements/bee/assignment-tm1-bee-2024')}>Announcement</Dropdown.Item>
              <Dropdown.Item className="text-red-700" onClick={() => navigate('/info-2')}>Competition</Dropdown.Item>
            </Dropdown>
          </div>

          <Link to="/docs" className="flex items-center px-3 py-2 hover:bg-red-600 hover:text-white">
            <HiCollection className="mr-1" />Publication
          </Link>
        </div>
      </div>

      {/* ===== MOBILE SIDEBAR OVERLAY ===== */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* ===== MOBILE SIDEBAR DRAWER ===== */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 bg-red-600 text-white">
          <div className="flex items-center gap-2">
            <img src="/eecom-logo.png" className="h-9" alt="EECOM LOGO" />
            <span className="font-bold text-sm">UKM-FT EECOM</span>
          </div>
          <button onClick={closeMenu} className="p-1 rounded hover:bg-red-700">
            <HiX size={22} />
          </button>
        </div>

        {/* Sidebar Nav Links */}
        <nav className="overflow-y-auto h-[calc(100%-72px)] py-2">
          {/* Home */}
          <button onClick={() => goTo("/")} className="w-full flex items-center gap-3 px-5 py-3 text-red-700 hover:bg-red-50 font-medium text-sm text-left">
            <HiHome size={18} /><span>Home</span>
          </button>

          {/* About */}
          <div>
            <button
              onClick={() => toggleSection("about")}
              className="w-full flex items-center justify-between gap-3 px-5 py-3 text-red-700 hover:bg-red-50 font-medium text-sm"
            >
              <span className="flex items-center gap-3"><HiInformationCircle size={18} />About</span>
              <HiChevronDown size={16} className={`transition-transform duration-200 ${openSection === "about" ? "rotate-180" : ""}`} />
            </button>
            {openSection === "about" && (
              <div className="bg-slate-50 border-l-4 border-red-400 ml-5">
                <button onClick={() => goTo("/profile")} className="w-full text-left text-sm px-5 py-2.5 text-slate-700 hover:bg-red-50 hover:text-red-600">Profile EECOM</button>
                <button onClick={() => goTo("/logo-eecom")} className="w-full text-left text-sm px-5 py-2.5 text-slate-700 hover:bg-red-50 hover:text-red-600">Logo EECOM</button>
                <button onClick={() => goTo("/mars-eecom")} className="w-full text-left text-sm px-5 py-2.5 text-slate-700 hover:bg-red-50 hover:text-red-600">Mars EECOM</button>
              </div>
            )}
          </div>

          {/* Organization */}
          <div>
            <button
              onClick={() => toggleSection("org")}
              className="w-full flex items-center justify-between gap-3 px-5 py-3 text-red-700 hover:bg-red-50 font-medium text-sm"
            >
              <span className="flex items-center gap-3"><HiUserGroup size={18} />Organization</span>
              <HiChevronDown size={16} className={`transition-transform duration-200 ${openSection === "org" ? "rotate-180" : ""}`} />
            </button>
            {openSection === "org" && (
              <div className="bg-slate-50 border-l-4 border-red-400 ml-5">
                <button onClick={() => goTo("/organisasi/struktur")} className="w-full text-left text-sm px-5 py-2.5 text-slate-700 hover:bg-red-50 hover:text-red-600">Struktur Organisasi</button>
                <hr className="mx-4 border-slate-200" />
                <button onClick={() => goTo("/organisasi/ph/2026")} className="w-full text-left text-sm px-5 py-2.5 text-slate-700 hover:bg-red-50 hover:text-red-600">Daily Manager</button>
                <button onClick={() => goTo("/organisasi/hrd/2026")} className="w-full text-left text-sm px-5 py-2.5 text-slate-700 hover:bg-red-50 hover:text-red-600">Human Resource Development</button>
                <button onClick={() => goTo("/organisasi/rnd/2026")} className="w-full text-left text-sm px-5 py-2.5 text-slate-700 hover:bg-red-50 hover:text-red-600">Research And Development</button>
                <button onClick={() => goTo("/organisasi/ic/2026")} className="w-full text-left text-sm px-5 py-2.5 text-slate-700 hover:bg-red-50 hover:text-red-600">Information And Communication</button>
                <button onClick={() => goTo("/organisasi/entre/2026")} className="w-full text-left text-sm px-5 py-2.5 text-slate-700 hover:bg-red-50 hover:text-red-600">Entrepreneurship</button>
              </div>
            )}
          </div>

          {/* Information */}
          <div>
            <button
              onClick={() => toggleSection("info")}
              className="w-full flex items-center justify-between gap-3 px-5 py-3 text-red-700 hover:bg-red-50 font-medium text-sm"
            >
              <span className="flex items-center gap-3"><HiDocumentSearch size={18} />Information</span>
              <HiChevronDown size={16} className={`transition-transform duration-200 ${openSection === "info" ? "rotate-180" : ""}`} />
            </button>
            {openSection === "info" && (
              <div className="bg-slate-50 border-l-4 border-red-400 ml-5">
                <button onClick={() => goTo("/info-1")} className="w-full text-left text-sm px-5 py-2.5 text-slate-700 hover:bg-red-50 hover:text-red-600">All</button>
                <button onClick={() => goTo("/info-1")} className="w-full text-left text-sm px-5 py-2.5 text-slate-700 hover:bg-red-50 hover:text-red-600">News</button>
                <button onClick={() => goTo("/informations/announcements/bee/assignment-tm1-bee-2024")} className="w-full text-left text-sm px-5 py-2.5 text-slate-700 hover:bg-red-50 hover:text-red-600">Announcement</button>
                <button onClick={() => goTo("/info-2")} className="w-full text-left text-sm px-5 py-2.5 text-slate-700 hover:bg-red-50 hover:text-red-600">Competition</button>
              </div>
            )}
          </div>

          {/* Publication */}
          <button onClick={() => goTo("/docs")} className="w-full flex items-center gap-3 px-5 py-3 text-red-700 hover:bg-red-50 font-medium text-sm text-left">
            <HiCollection size={18} /><span>Publication</span>
          </button>
        </nav>
      </div>
    </div>
  );
}
