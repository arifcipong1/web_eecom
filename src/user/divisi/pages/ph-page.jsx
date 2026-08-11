import SliderMember from "../components/slider-member";
import data from "../data/data-member.json";

export default function PHPages() {
  return (
    <>

      <div className="flex flex-col md:flex-row md:gap-6 md:items-start">
        <p className="text-justify text-sm md:text-base md:w-1/2 indent-8">
          {data.ph.jobdesk}
        </p>
        <img src={data.ph.struktur} alt="Struktur Daily Manager" className="w-full md:w-1/2 mt-3 md:mt-0 mx-auto block" />
      </div>

      <h1 className="font-semibold mt-3 text-red-600">Our Staff : </h1>

      {/* slider */}
      <div className="mt-3">
        <SliderMember data={data.ph} />
      </div>
    </>
  );
}