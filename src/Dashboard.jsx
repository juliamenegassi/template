import { Outlet } from "react-router-dom"
import Header from "./components/Header"

function Dashboard() {
  return (
    <>
        <Outlet />
    </>
  )
}

export default Dashboard