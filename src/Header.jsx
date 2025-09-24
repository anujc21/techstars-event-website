import { Box, Typography, Toolbar, Button } from "@mui/material";

function Header() {
    const handleScrollToRegistration = () => {
        const registrationSection = document.getElementById(
            "registration-section"
        );
        if (registrationSection) {
            registrationSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <Box
            sx={{
                width: "100%",
                background: "#212121",
            }}
        >
            <Toolbar />

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mt: 5,
                    pb: {
                        xs: 5,
                        sm: 5,
                        md: 7,
                    },
                    flexWrap: "wrap",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        color: "#fff",
                        margin: 5,
                        maxWidth: 500,
                    }}
                >
                    <Box
                        component="img"
                        src="logos/techstarsLogo.png"
                        alt="Main Logo"
                        sx={{
                            mb: 2,
                            p: 2,
                            background: "#fff",
                            height: 200,
                            width: "100%",
                            objectFit: "contain",
                            borderRadius: 5,
                            boxShadow: 5,
                            cursor: "pointer",
                        }}
                    />

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                            px: 2,
                        }}
                    >
                        <Typography
                            variant="body1"
                            sx={{
                                textAlign: {
                                    xs: "center",
                                    md: "start",
                                },
                            }}
                        >
                            A 54-hour collaboration and mentorship event
                            bringing founders, students, makers, and local
                            ecosystem partners together to build impactful
                            ventures in Dhamtari, Chhattisgarh.
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                textAlign: {
                                    xs: "center",
                                    md: "start",
                                },
                            }}
                        >
                            Event date: 3rd November, 2025
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            mt: 3,
                            width: "100%",
                            display: "flex",
                            gap: 1,
                            justifyContent: { xs: "center", md: "flex-start" },
                        }}
                    >
                        <Button
                            size="large"
                            variant="contained"
                            color="primary"
                            onClick={handleScrollToRegistration}
                            sx={{
                                textTransform: "none",
                                borderRadius: 5,
                                color: "#fff",
                            }}
                        >
                            Register
                        </Button>

                        <Button
                            size="large"
                            variant="outlined"
                            sx={{
                                textTransform: "none",
                                borderRadius: 5,
                                borderColor: "white",
                                color: "white",
                                "&:hover": {
                                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                                    borderColor: "white",
                                },
                            }}
                        >
                            Know More
                        </Button>
                    </Box>
                </Box>

                <Box
                    component="img"
                    src="logos/mainLogo.png"
                    alt="Main Logo"
                    sx={{
                        width: 300,
                        height: 300,
                        margin: 5,
                        borderRadius: "50%",
                        objectFit: "cover",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                    }}
                />
            </Box>
        </Box>
    );
}

export default Header;
