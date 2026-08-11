import SliderMember from "../components/slider-member";
import data from "../data/data-member.json";

export default function RNDPages() {
  return (
    <>

      <div className="flex flex-col md:flex-row md:gap-6 md:items-start">
        <p className="text-justify text-sm md:text-base mt-3 md:mt-0 md:w-1/2 indent-8">
          {data.rnd.jobdesk}
        </p>
        <img src={data.rnd.struktur} alt={data.rnd.name} className="w-full md:w-1/2 mt-3 md:mt-0 mx-auto block" />
      </div>

      <h1 className="font-semibold mt-3 text-red-600">Our Staff : </h1>

      {/* slider */}
      <div className="md:mt-3 md:mb-5">
        <SliderMember data={data.rnd} />
      </div>
    </>
  );
}