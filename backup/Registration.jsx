import React from "react";
import { Box, Typography, Card, Button, InputBase } from "@mui/material";

function Registration() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const GlassInput = ({ placeholder, type = "text" }) => (
        <Box
            sx={{
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(15px)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: 5,
                px: 3,
                py: 1,
                transition: "all 0.3s ease",
                "&:hover": {
                    borderColor: "rgba(255,255,255,0.4)",
                },
                "&:focus-within": {
                    borderColor: "#d269ff",
                    boxShadow: "0 0 10px rgba(210,105,255,0.4)",
                },
            }}
        >
            <InputBase
                placeholder={placeholder}
                type={type}
                fullWidth
                sx={{
                    color: "#fff",
                    fontSize: "1rem",
                    "&::placeholder": {
                        color: "rgba(255,255,255,0.7)",
                    },
                }}
            />
        </Box>
    );

    return (
        <Box
            sx={{
                width: "100%",
                py: { xs: 10, md: 12 },
                px: { xs: 5, md: 10 },
                background: "url(section.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                color: "#fff",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(0,0,0,0.5)",
                    zIndex: 1,
                }}
            />

            <Box
                sx={{
                    position: "relative",
                    zIndex: 2,
                    maxWidth: 600,
                    width: "100%",
                }}
            >
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
                    Registration Form
                </Typography>
                <Typography
                    variant="subtitle1"
                    sx={{ mb: 6, color: "rgba(255,255,255,0.8)" }}
                >
                    Want to be a part of Techstars Startup Weekend? Fill out the
                    registration form. Registrations for Techstars Startup
                    Weekend will open soon. Stay connected with us.
                </Typography>

                <Card
                    variant="outlined"
                    sx={{
                        p: { xs: 4, md: 6 },
                        borderRadius: "50px 0 50px 0",
                        background: "rgba(255,255,255,0.05)",
                        backdropFilter: "blur(20px)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: 3,
                        transition: "all 0.3s ease",
                        "&:hover": {
                            transform: "translateY(-5px) scale(1.02)",
                            background: "rgba(255,255,255,0.1)",
                            boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                        },
                    }}
                >
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 3,
                        }}
                    >
                        <GlassInput placeholder="Full Name" />
                        <GlassInput placeholder="Email Address" type="email" />
                        <GlassInput placeholder="Phone Number" type="tel" />

                        <Button
                            type="submit"
                            size="large"
                            sx={{
                                textTransform: "none",
                                borderRadius: 5,
                                background:
                                    "linear-gradient(45deg, #7d00b3, #d269ff)",
                                color: "#fff",
                                py: 1.5,
                                mt: 1,
                                "&:hover": {
                                    background:
                                        "linear-gradient(45deg, #d269ff, #7d00b3)",
                                },
                            }}
                        >
                            Register
                        </Button>
                    </Box>
                </Card>
            </Box>
        </Box>
    );
}

export default Registration;
