import { AppBar, Container, Toolbar } from "@mui/material";

function Header() {
  return (
    <AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
            </Toolbar>
        </Container>
    </AppBar>
  )
}

export default Header;