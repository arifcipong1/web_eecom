import { createBrowserRouter } from "react-router-dom"

import NotFoundPage from "../global/pages/404"
import { FooterComponent, NavbarComponent, JumbotronComponent } from "../global/components"

import HomePage from "../user/homepage"
import MarsEecom from "../user/mars-eecom"
import ProfileEecom from "../user/profile"
import LogoEecom from "../user/logo-eecom"
import StrukturOrganisasi from "../user/struktur-organisasi"
import DivisionPage from "../user/divisi"
import InformationsPage from "../user/information"
import StudyClubOneDayOne from "../user/information/pages/announcements/bee/assignment-sc1-day1"
import StudyClubOneDayTwo from "../user/information/pages/announcements/bee/assignment-sc1-day2"
import StudyClubTwoDayOne from "../user/information/pages/announcements/bee/assignment-sc2-day1"
import StudyClubTwoDayTwo from "../user/information/pages/announcements/bee/assignment-sc2-day2"
import TechnicalMeetingTwo from "../user/information/pages/announcements/bee/assignment-tm2"


const router = createBrowserRouter([
  {
    path : "/",
    element : (
      <>
        <NavbarComponent />
        <HomePage/>
        <FooterComponent />
      </>
    ),
  },
  {
    path : "/mars-eecom",
    element : (
      <>
        <NavbarComponent />
        <JumbotronComponent textPage="MARS EECOM" />
        <MarsEecom />
        <FooterComponent />
      </>
    ),
  },
  {
    path : "/profile",
    element : (
      <>
        <NavbarComponent />
        <JumbotronComponent textPage="PROFILE EECOM" />
        <ProfileEecom />
        <FooterComponent />
      </>
    ),
  },
  {
    path : "/logo-eecom",
    element : (
      <>
        <NavbarComponent />
        <JumbotronComponent textPage="LOGO EECOM" />
        <LogoEecom />
        <FooterComponent />
      </>
    ),
  },
  {
    path : "/organisasi/struktur",
    element : (
      <>
        <NavbarComponent />
        <JumbotronComponent textPage="STRUKTUR ORGANISASI" />
        <StrukturOrganisasi />
        <FooterComponent />
      </>
    ),
  },
  {
    path : `/organisasi/:division/:year`,
    element : (
      <>
        <DivisionPage />
      </>
    ),
  },
  {
    path : "/v1-gate",
    element : (
      <>
        <h1>ADMIN</h1>
      </>
    )
  },
  {
    path : "/*",
    element : (
      <>
        <NotFoundPage />
      </>
    )
  },
  {
    path : "/informations/announcements/bee/assignment-tm1-bee-2024",
    element : (
      <>
        <NavbarComponent />
        <JumbotronComponent textPage="ANNOUNCEMENTS" />
        <InformationsPage />
        <FooterComponent />
      </>
    ) 
  },
  {
    path : "/informations/announcements/bee/assignment-tm2-bee-2024",
    element : (
      <>
        <NavbarComponent />
        <JumbotronComponent textPage="ANNOUNCEMENTS" />
        <TechnicalMeetingTwo />
        <FooterComponent />
      </>
    ) 
  },
  {
    path : "/informations/announcements/bee/assignment-sc1day1-bee-2024",
    element : (
      <>
        <NavbarComponent />
        <JumbotronComponent textPage="ANNOUNCEMENTS" />
        <StudyClubOneDayOne />
        <FooterComponent />
      </>
    ) 
  },
  {
    path : "/informations/announcements/bee/assignment-sc1day2-bee-2024",
    element : (
      <>
        <NavbarComponent />
        <JumbotronComponent textPage="ANNOUNCEMENTS" />
        <StudyClubOneDayTwo />
        <FooterComponent />
      </>
    ) 
  },
  {
    path : "/informations/announcements/bee/assignment-sc2day1-bee-2024",
    element : (
      <>
        <NavbarComponent />
        <JumbotronComponent textPage="ANNOUNCEMENTS" />
        <StudyClubTwoDayOne />
        <FooterComponent />
      </>
    ) 
  },
  {
    path : "/informations/announcements/bee/assignment-sc2day2-bee-2024",
    element : (
      <>
        <NavbarComponent />
        <JumbotronComponent textPage="ANNOUNCEMENTS" />
        <StudyClubTwoDayTwo />
        <FooterComponent />
      </>
    ) 
  },

])

export default router