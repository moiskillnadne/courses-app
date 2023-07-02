import { RouterProvider } from "./providers/router-provider"
import { Router } from "../pages"
import "./App.css"

function App() {
  return (
    <>
      <RouterProvider>
        <Router />
      </RouterProvider>
    </>
  )
}

export default App
