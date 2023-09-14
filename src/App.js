import { Avatar, Button, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";



function App() {

    return (
        <Container >
            <Outlet />
        </Container>
    );
}

export default App;
