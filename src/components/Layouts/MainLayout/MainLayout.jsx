import React from "react"
import { ThemeProvider } from "@mui/material/styles"
import { CssBaseline, Container } from "@mui/material"
import theme from "../../theme"
import { NavBar } from "../../NavBar"

const MainLayout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <Container maxWidth="lg">
          <main>{children}</main>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default MainLayout
