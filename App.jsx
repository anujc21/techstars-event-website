import { createTheme, ThemeProvider, CssBaseline, Box } from "@mui/material";
import { Reveal } from "react-awesome-reveal";
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
        background: {
            default: "#000000",
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <Topbar />

            <Header />

            <Reveal>
                <About />
            </Reveal>

            <Reveal>
                {" "}
                <People />
            </Reveal>

            <Reveal>
                {" "}
                <Partners />
            </Reveal>

            <Reveal>
                {" "}
                <Sponsors />
            </Reveal>

            <Reveal>
                {" "}
                <Media />
            </Reveal>

            <Reveal>
                {" "}
                <Registration />
            </Reveal>

            <Reveal>
                {" "}
                <Team />
            </Reveal>

            <Reveal>
                {" "}
                <Contact />
            </Reveal>

            <Reveal>
                {" "}
                <FAQ />
            </Reveal>

            <Reveal>
                {" "}
                <Footer />
            </Reveal>
        </ThemeProvider>
    );
}

export default App;
