import { Outlet, useNavigate } from "react-router-dom"
import Header from "./components/Header"
import { useEffect } from "react"

function Dashboard() {
  
  const navigate = useNavigate();

  useEffect( () => {

    const usuario = localStorage.getItem( "usuario" );
    if( !usuario ){
      navigate( "/" );
    }

  }, [] )

  return (
    <>
        <Header />
        <br/>
        <Outlet />
    </>
  )
}

export default Dashboard