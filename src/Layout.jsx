import { Outlet } from "react-router-dom"
import Header from "@components/header/Header.jsx"
import Footer from "@components/footer/Footer.jsx"
import UpwardButton from "@components/upward-button/UpwardButton.jsx"
import Preloader from "@components/preloader/Preloader.jsx"
function Layout() {
  return (
    <>
      <header>
        <Header />
      </header>
      <Preloader />
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
        <UpwardButton />
      </footer>
    </>
  )
}

export default Layout
