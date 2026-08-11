import CardDivisionComponents from "./card-org-comps";

import { entreIcons, hrdIcons, icIcons, phIcons, rndIcons } from "../../../global/assets";

// icons


export default function CardDivision() {
  const divisions = [
    {
      links: "/organisasi/ph/2026",
      icons: phIcons,
      titles: "Daily Manager",
      deskrips: "Berperan penting dalam mencapai tujuan organisasi dan memastikan operasional harian berjalan lancar.",
    },
    {
      links: "/organisasi/hrd/2026",
      icons: hrdIcons,
      titles: "Human Resource Development",
      deskrips: "Berperan untuk menjaga kekeluargaan anggota UKM-FT EECOM baik internal maupun ekstetrnal.",
    },
    {
      links: "/organisasi/rnd/2026",
      icons: rndIcons,
      titles: "Research And Development",
      deskrips: "Bergerak untuk meningkatkan dan menggali setiap potensi sumberdaya pengurus UKM-FT EECOM.",
    },
    {
      links: "/organisasi/ic/2026",
      icons: icIcons,
      titles: "Information Communication",
      deskrips: "Bergerak di bidang informasi dan komunikasi serta sosial media UKM-FT EECOM.",
    },
    {
      links: "/organisasi/entre/2026",
      icons: entreIcons,
      titles: "Entrepreneurship",
      deskrips: "Bergerak di bidang wirausaha UKM-FT EECOM. Memberikan pemasukan dana kepada UKM-FT EECOM.",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-4 md:flex-row justify-around">
        {divisions.slice(0, 1).map((division, index) => (
          <CardDivisionComponents
            key={index}
            links={division.links}
            icons={division.icons}
            titles={division.titles}
            deskrips={division.deskrips}
          />
        ))}
      </div>

      <div className="flex flex-col gap-4 md:flex-row justify-around">
        {divisions.slice(1, 3).map((division, index) => (
          <CardDivisionComponents
            key={index}
            links={division.links}
            icons={division.icons}
            titles={division.titles}
            deskrips={division.deskrips}
          />
        ))}
      </div>

      <div className="flex flex-col gap-4 md:flex-row justify-around">
        {divisions.slice(3).map((division, index) => (
          <CardDivisionComponents
            key={index}
            links={division.links}
            icons={division.icons}
            titles={division.titles}
            deskrips={division.deskrips}
          />
        ))}
      </div>
    </>
  );
}
