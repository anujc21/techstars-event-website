import React from "react";
import { Box, Typography, Card, Button, InputBase } from "@mui/material";

function Registration() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const StyledInput = ({ placeholder, type = "text" }) => (
        <Box
            sx={{
                px: 2,
                py: 1,
                borderRadius: 3,
                border: "2px solid #66cc66",
                boxShadow: "0 0 0 3px rgba(102,204,102,0.15)",
                transition: "all 0.3s ease",
                "&:hover": {
                    transform: "scale(1.02)",
                    boxShadow: "0 0 0 4px rgba(102,204,102,0.3)",
                },
            }}
        >
            <InputBase
                placeholder={placeholder}
                type={type}
                fullWidth
                sx={{
                    color: "#000",
                    fontSize: "0.95rem",
                    "&::placeholder": {
                        color: "rgba(0,0,0,0.5)",
                    },
                }}
            />
        </Box>
    );

    return (
        <Box
            id="registration-section"
            sx={{
                width: "100%",
                py: { xs: 10, md: 12 },
                px: { xs: 5, md: 10 },
                background: "#f9f9f9",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Box sx={{ maxWidth: 1200, width: "100%" }}>
                <Typography
                    variant="h4"
                    sx={{ fontWeight: 700, mb: 3, color: "#000" }}
                >
                    Registration Form
                </Typography>
                <Typography
                    variant="subtitle1"
                    sx={{ mb: 6, color: "rgba(0,0,0,0.7)" }}
                >
                    Want to be a part of Techstars Startup Weekend? Fill out the
                    registration form. Registrations for Techstars Startup
                    Weekend will open soon. Stay connected with us.
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap: {
                            xs: 0,
                            sm: 0,
                            md: 5,
                        },
                    }}
                >
                    <Box
                        sx={{
                            width: 500,
                            height: {
                                xs: 300,
                                sm: 500,
                            },
                            alignSelf: "center",
                            background: "url(registration.svg)",
                            backgroundSize: "contain",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    />

                    <Card
                        variant="outlined"
                        sx={{
                            width: 500,
                            p: { xs: 4, md: 6 },
                            borderRadius: "50px 0 50px 0",
                            background: "#fff",
                            border: "2px solid #66cc66",
                            boxShadow: "0 0 0 4px rgba(102,204,102,0.15)",
                            textAlign: "left",
                            display: "flex",
                            flexDirection: "column",
                            gap: 3,
                            transition: "all 0.3s ease",
                            "&:hover": {
                                transform: "translateY(-5px) scale(1.02)",
                                boxShadow: "0 0 0 6px rgba(102,204,102,0.3)",
                            },
                        }}
                    >
                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 2.5,
                            }}
                        >
                            <StyledInput placeholder="Full Name" />
                            <StyledInput
                                placeholder="Email Address"
                                type="email"
                            />
                            <StyledInput
                                placeholder="Phone Number"
                                type="tel"
                            />

                            <Button
                                type="submit"
                                size="large"
                                sx={{
                                    textTransform: "none",
                                    borderRadius: 3,
                                    background: "#429541",
                                    color: "#fff",
                                    py: 1.5,
                                    mt: 1,
                                }}
                            >
                                Register
                            </Button>
                        </Box>
                    </Card>
                </Box>
            </Box>
        </Box>
    );
}

export default Registration;
