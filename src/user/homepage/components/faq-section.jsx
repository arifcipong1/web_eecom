// FAQ image now served from public folder
import { useState } from 'react';

export default function FAQSection() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <section className="bg-white md:px-10 px-4 py-7 md:py-20">
      <h1 className="w-full text-center text-2xl md:text-4xl font-bold">
        FREQUENTLY ASKED QUESTION
      </h1>

      <div className="flex md:flex-row flex-col mt-10">
        
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img src="/photos/photoQUESTION.png" alt="FAQ" className="w-96 h-auto" />
        </div>

        <div className="w-full md:w-1/2 mt-5 md:mt-0">
          <div
            id="accordion-flush"
            data-accordion="collapse"
            data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            data-inactive-classes="text-gray-500 dark:text-gray-400"
          >
            {/* Accordion Item 1 */}
            <h2 id="accordion-flush-heading-1">
              <button
                type="button"
                className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                aria-expanded={openAccordion === 1 ? 'true' : 'false'}
                onClick={() => toggleAccordion(1)}
              >
                <span className='text-sm md:text-base'>Apakah Kegiatan di UKM-FT EECOM Selalu Bahasa Inggris?</span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 ${openAccordion === 1 ? '' : 'rotate-180'} shrink-0`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5L5 1 1 5"
                  />
                </svg>
              </button>
            </h2>

            {/* Konten Accordion 1 */}
            <div
              id="accordion-flush-body-1"
              className={`${openAccordion === 1 ? '' : 'hidden'}`}
              aria-labelledby="accordion-flush-heading-1"
            >
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400 text-justify text-sm md:text-base">
                Kegiatan UKM-FT EECOM tidak sepenuhnya selalu menggunakan bahasa Inggris. Meskipun tujuan utama adalah untuk meningkatkan kemampuan bahasa Inggris, namun penggunaan bahasa persatuan yaitu bahasa Indonesia perlu dilakukan, terutama untuk mempermudah koordinasi antar sesama, dalam situasi formal maupun informal. Pada setiap kegiatan tetap ditekankan untuk menggunakan bahasa inggris atau setidaknya diselipkan dengan penggunaan kosa kata bahasa inggris untuk melatih keterampilan dari setiap mahasiswa.
                </p>
              </div>
            </div>

            {/* Accordion Item 2 */}
            <h2 id="accordion-flush-heading-2">
              <button
                type="button"
                className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                aria-expanded={openAccordion === 2 ? 'true' : 'false'}
                onClick={() => toggleAccordion(2)}
              >
                <span className='text-sm md:text-base'>Apakah di UKM-FT EECOM Hanya Belajar Melalui Materi Saja?</span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 ${openAccordion === 2 ? '' : 'rotate-180'} shrink-0`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5L5 1 1 5"
                  />
                </svg>
              </button>
            </h2>

            {/* Konten Accordion 2 */}
            <div
              id="accordion-flush-body-2"
              className={`${openAccordion === 2 ? '' : 'hidden'}`}
              aria-labelledby="accordion-flush-heading-2"
            >
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400 text-justify text-sm md:text-base">
                UKM-FT EECOM melakukan proses pembelajaran tidak hanya terbatas pada materi ataupun teori. UKM-FT EECOM menggunakan cara pembelajaran yang lebih interaktif dan bervariasi untuk membantu anggota atau pengurus untuk membantu meningkatkan kemampuan berbahasa inggris. Beberapa metode pembelajaran yang diterapkan adalah seperti diskusi antar kelompok, public speaking, debat, game interaktif dan event yang diselenggarakan.
                </p>
              </div>
            </div>
            
            {/* Accordion Item 3 */}
            <h2 id="accordion-flush-heading-3">
              <button
                type="button"
                className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                aria-expanded={openAccordion === 3 ? 'true' : 'false'}
                onClick={() => toggleAccordion(3)}
              >
                <span className='text-sm md:text-base'>Mengapa Jargon UKM-FT EECOM Be Enjoy Be Happy?</span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 ${openAccordion === 3 ? '' : 'rotate-180'} shrink-0`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5L5 1 1 5"
                  />
                </svg>
              </button>
            </h2>

            {/* Konten Accordion 3 */}
            <div
              id="accordion-flush-body-3"
              className={`${openAccordion === 3 ? '' : 'hidden'}`}
              aria-labelledby="accordion-flush-heading-3"
            >
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400 text-justify text-sm md:text-base">
                  Jargon Be Enjoy Be Happy memiliki arti kata nikmatilah dan berbahagialah. Kata tersebut bermakna bahwa ketika beproses dalam UKM-FT EECOM tentu tidak luput dengan namanya belajar bahasa Inggris, yang mana ketika proses tersebut diperlukan agar setiap individu senang dan menikmati saat proses belajar berlangsung supaya motivasi belajar semakin tinggi sehingga output pembelajaran menjadi efektif dan efisien serta tujuan dari organisasi menjadi tercapai.
                </p>
              </div>
            </div>


            {/* Accordion Item 4 */}
            <h2 id="accordion-flush-heading-4">
              <button
                type="button"
                className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                aria-expanded={openAccordion === 4 ? 'true' : 'false'}
                onClick={() => toggleAccordion(4)}
              >
                <span className='text-sm md:text-base'>Kegiatan di UKM-FT EECOM Untuk Member dan Pengurus?</span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 ${openAccordion === 4 ? '' : 'rotate-180'} shrink-0`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5L5 1 1 5"
                  />
                </svg>
              </button>
            </h2>

            {/* Konten Accordion 4 */}
            <div
              id="accordion-flush-body-4"
              className={`${openAccordion === 4 ? '' : 'hidden'}`}
              aria-labelledby="accordion-flush-heading-4"
            >
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400 text-justify text-sm md:text-base">
                  Seluruh rangkaian kegiatan UKM-FT EECOM tidak hanya untuk member terdaftar ataupun pengurus saja, tetapi terbuka juga untuk seluruh mahasiswa fakultas teknik terutama yang memiliki minat terhadap bahasa inggris. Kegiatan yang terbuka untuk keluarga fakultas teknik adalah seperti contohnya seminar, debat, competisi dan lain sebagainya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
