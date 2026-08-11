import PropTypes from 'prop-types';
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { BsInstagram, BsTiktok, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
import bgHead from "../assets/head-background.png";

const HeadSection = () => {

  const [showText, setShowText] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText((prev) => !prev)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const fadeInOutVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    }
  }
  

  return (
    <section 
      className="flex md:flex-row flex-col justify-between py-7 md:py-20 bg-white md:px-10 px-4" 
      style={{
        backgroundImage: `url(${bgHead})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="md:w-6/12 w-full">
        <h1 className="text-white text-5xl md:text-6xl font-bold">UKM-FT EECOM</h1>
        <h1 className="text-white text-xl md:text-3xl font-bold">ENGINEERING ENGLISH COMMUNITY</h1>

        <motion.div
          variants={fadeInOutVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 1 }}
          key={showText ? "show" : "hide"}
        >
          {showText ? 
            (
              <p className="text-white mt-2 md:mt-5 text-justify text-sm md:text-base font-medium">
                Selamat Datang di Website UKM-FT EECOM, Unit Kegiatan Mahasiswa Fakultas Teknik yang Mengasah Minat Bahasa Inggris dengan Cara Seru dan Menyenangkan. Temukan Pengalaman Belajar yang Penuh Keceriaan dan Jadilah Bagian dari Kami yang Selalu Mengutamakan <span className="font-extrabold">Be Enjoy, Be Happy!</span>
              </p>
            ) : (
              <p className="text-white mt-2 md:mt-5 text-justify text-sm md:text-base font-medium">
                Welcome to the UKM-FT EECOM Website, the Student Activity Unit of the Faculty of Engineering that Sharpens English Interests in a Fun and Enjoyable Way. Discover a Learning Experience Full of Joy and Become Part of Us Who Always Prioritize <span className="font-extrabold">Be Enjoy, Be Happy!</span>
              </p>
            )}

        </motion.div>

        <div className="flex flex-row mt-4 justify-between items-center">
          <Link to="/profile" type="button" className="text-white hover:text-red-600 border border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-white font-bold rounded-md text-sm px-20 py-3 text-center me-2 mb-2">About Us</Link>

          <div className="flex text-white">
            <Link to={"https://www.instagram.com/ukmfteecom/"} target="_blank" className="me-5" ><BsInstagram/></Link>
            <Link to={"http://www.youtube.com/@UKMFTEECOM"} target="_blank" className="me-5"><BsYoutube/></Link>
            <Link to={"https://www.tiktok.com/@ukmfteecom"} target="_blank" ><BsTiktok/></Link>
          </div>

        </div>


      </div>

      <div className="flex md:w-6/12 w-full md:ps-10 justify-center items-center mt-5 md:mt-0">
        <img
          src="/photos/bgheader.jpg"
          alt="EECOM Header"
          className="xl:h-96 h-60 w-full rounded-xl border-4 border-white object-cover"
          style={{boxShadow: '10px 10px 15px rgba(0, 0, 0, 0.5)'}}
        />
      </div>

    </section>
  );
}

HeadSection.propTypes = {};


export default HeadSection;