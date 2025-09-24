import { Box, Typography, Toolbar, Button } from "@mui/material";

function Header() {
    return (
        <Box
            sx={{
                width: "100%",
                background: "url(background.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center center",
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
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: "bold",
                            mb: 3,
                            textAlign: {
                                xs: "center",
                                md: "start",
                            },
                        }}
                    >
                        Techstars Startup Weekend Dhamtari VikaasGarh
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
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
                            Event dates: 28th, 29th & 30th September, 2025
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
                            sx={{
                                textTransform: "none",
                                borderRadius: 5,
                                background:
                                    "linear-gradient(45deg, #6a11cb, #2575fc)",
                                "&:hover": {
                                    background:
                                        "linear-gradient(45deg, #2575fc, #6a11cb)",
                                },
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
