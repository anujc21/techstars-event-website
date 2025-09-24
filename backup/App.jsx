import { createTheme, ThemeProvider, CssBaseline, Box } from "@mui/material";

import Topbar from "./Topbar.jsx";
import Header from "./Header.jsx";
import About from "./About.jsx";
import People from "./People.jsx";
import Partners from "./Partners.jsx";
import Sponsors from "./Sponsors.jsx";
import Media from "./Media.jsx";
import Registration from "./Registration.jsx";
import Team from "./Team.jsx";
import Contact from "./Contact.jsx";
import FAQ from "./FAQ.jsx";
import Footer from "./Footer.jsx";

import "./App.css";

const theme = createTheme({
    palette: {
        primary: {
            main: "#7d00b3",
        },
        secondary: {
            main: "#d269ff",
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <Topbar />
            <Header />
            <About />
            <People />
            <Partners />
            <Sponsors />
            <Media />
            <Registration />
            <Team />
            <Contact />
            <FAQ />
            <Footer />
        </ThemeProvider>
    );
}

export default App;
