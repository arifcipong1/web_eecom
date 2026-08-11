import { useParams } from "react-router-dom";
import { FooterComponent, JumbotronComponent, MaintenaceComponents, NavbarComponent } from "../../global/components";
import NotFoundPage from "../../global/pages/404";



// pages
import PHPages from "./pages/ph-page";
import ICPages from "./pages/ic-page";
import EntrePages from "./pages/entre-page";
import HRDPages from "./pages/hrd-page";
import RNDPages from "./pages/rnd-page";

export default function DivisionPage() {
  const { division, year } = useParams();

  // validate division and year
  const validDivision = ["ph", "entre", "ic", "hrd", "rnd"];
  const validYear = ["2026"];

  if (!validDivision.includes(division) || !validYear.includes(year)) {
    return <NotFoundPage />;
  }

  const titlePageMap = {
    ph: "DAILY MANAGER",
    entre: "ENTREPRENEURSHIP",
    ic: "INFORMATION AND COMMUNICATION",
    hrd: "HUMAN RESOURCE DEVELOPMENT",
    rnd: "RESEARCH AND DEVELOPMENT",
  };

  const titlePage = titlePageMap[division];

  // rendering division content
  const renderDivisionContent = () => {
    switch (division) {
      case "ph":
        return <PHPages />;
      case "entre":
        return <EntrePages />;
      case "ic":
        return <ICPages />;
      case "hrd":
        return <HRDPages />;
      case "rnd":
        return <RNDPages />;
      default:
        return null;
    }
  };

  return (
    <>
      <NavbarComponent />

      <JumbotronComponent textPage={titlePage} />

      <div className="flex flex-col md:flex-row min-h-screen px-3 pt-5 bg-white">
        <div className="md:w-8/12 w-full px-2">
          <h1 className="font-bold md:text-2xl mb-3">{titlePage} {year}</h1>
          {renderDivisionContent()}
        </div>

        <div className="md:w-4/12 w-full mt-5 md:mt-0 px-2">
          <div className="">
            <h1 className="text-center font-semibold">Latest Information</h1>
          </div>
          <MaintenaceComponents />
        </div>
      </div>

      <FooterComponent />
    </>
  );
}
