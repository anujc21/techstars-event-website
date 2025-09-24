import { useState, useEffect } from "react";
import { createTheme, ThemeProvider, CssBaseline, Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { Slide } from "react-awesome-reveal";

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
        primary: { main: "#429541" },
        secondary: { main: "#1cd61a" },
        background: { default: "#fff" },
    },
});

const sections = [
    <About />,
    <People />,
    <Partners />,
    <Sponsors />,
    <Media />,
    <Registration />,
    <Team />,
    <Contact />,
    <FAQ />,
    <Footer />,
];

function App() {
    const [showFab, setShowFab] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowFab(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Topbar />
            <Header />

            {sections.map((Section, index) => (
                <Slide
                    key={index}
                    direction={index % 2 === 0 ? "left" : "right"}
                    triggerOnce
                >
                    {Section}
                </Slide>
            ))}

            {showFab && (
                <Fab
                    onClick={scrollToTop}
                    style={{
                        position: "fixed",
                        bottom: 16,
                        left: 16,
                        zIndex: 1000,
                        background: "#429541",
                        color: "#fff",
                    }}
                >
                    <KeyboardArrowUpIcon />
                </Fab>
            )}
        </ThemeProvider>
    );
}

export default App;
