export default function FunActivitySection() {
  return (
    <section className="bg-red-700 md:px-24 px-4 py-7 md:py-20">
      <h1 className="text-white text-center w-full text-2xl md:text-4xl font-bold md:mb-10 mb-5">FUN ACTIVITY</h1>

      <div className="flex md:flex-row flex-col gap-4">

        {/* Left Column */}
        <div className="flex flex-col md:w-1/2 w-full gap-3">
          
          {/* MAROON DAY */}
          <div className="flex md:flex-row flex-col p-6 bg-white rounded-xl justify-between">
            <div className="flex flex-col md:w-3/5">
              <h1 className="text-black text-lg md:text-xl font-semibold">MAROON DAY</h1>
              <p className="text-black text-sm md:text-base mt-3 text-justify">Maroon Day is a routine agenda of UKM-FT EECOM aimed at improving the English skills of EECOM members and is usually held on Wednesdays.</p>
            </div>
            <div className="md:w-36 md:h-36 overflow-hidden rounded-xl mt-5 md:mt-0 flex-shrink-0">
              <img src="/photos/bgheader.jpg" alt="Maroon Day" className="object-cover w-full h-full"/>
            </div>
          </div>

          {/* E-VIP COMPETITION */}
          <div className="flex md:flex-row flex-col p-6 bg-white rounded-xl justify-between">
            <div className="flex flex-col md:w-3/5">
              <h1 className="text-black text-lg md:text-xl font-semibold">E-VIP COMPETITION</h1>
              <p className="text-black text-sm md:text-base mt-3 text-justify">English Competition 2026 is an event to enhance the English skills and creativity of students. Open to all faculties, this competition provides a supportive and motivating environment to learn and grow.</p>
            </div>
            <div className="md:w-36 md:h-36 overflow-hidden rounded-xl mt-5 md:mt-0 flex-shrink-0">
              <img src="/photos/evip.webp" alt="E-VIP Competition" className="object-cover w-full h-full"/>
            </div>
          </div>

        </div>

        {/* Right Column */}
        <div className="flex flex-col md:w-1/2 w-full gap-3">

          {/* ENGLISH COLLABORATION COMMUNITY */}
          <div className="flex md:flex-row flex-col p-6 bg-white rounded-xl justify-between">
            <div className="flex flex-col md:w-3/5">
              <h1 className="text-black text-lg md:text-xl font-semibold">ENGLISH COLLABORATION COMMUNITY</h1>
              <p className="text-black text-sm md:text-base mt-3 text-justify">English Club Collaboration is an initiative organized by English-focused student groups at UTM, aimed at fostering connections and sharing knowledge regarding the English Languange</p>
            </div>
            <div className="md:w-36 md:h-36 overflow-hidden rounded-xl mt-5 md:mt-0 flex-shrink-0">
              <img src="/photos/ecc.JPG" alt="English Collaboration Community" className="object-cover w-full h-full"/>
            </div>
          </div>

          {/* E-VIP SEMINAR TOEFL */}
          <div className="flex md:flex-row flex-col p-6 bg-white rounded-xl justify-between">
            <div className="flex flex-col md:w-3/5">
              <h1 className="text-black text-lg md:text-xl font-semibold">E-VIP SEMINAR TOEFL</h1>
              <p className="text-black text-sm md:text-base mt-3 text-justify">UKM-FT EECOM holds TOEFL seminars aimed at providing Eecom members with insights about the TOEFL test. Additionally, EECOM also organizes TOEFL simulation sessions.</p>
            </div>
            <div className="md:w-36 md:h-36 overflow-hidden rounded-xl mt-5 md:mt-0 flex-shrink-0">
              <img src="/photos/seminar.JPG" alt="E-VIP Seminar TOEFL" className="object-cover w-full h-full"/>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}