import { Route, Routes } from "react-router-dom"

import { CoursesPage } from "./CoursesPage"
import { LandingPage } from "./LandingPage"

import { ROUTES } from "~/shared/utils"

export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.LANDING.path} element={<LandingPage />} />
      <Route path={ROUTES.COURSES.path} element={<CoursesPage />} />
    </Routes>
  )
}
