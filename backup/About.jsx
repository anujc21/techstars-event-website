import React, { useState, useEffect } from "react";
import { Box, Typography, Card } from "@mui/material";

function About() {
    const calculateTimeLeft = () => {
        const eventDate = new Date("2025-09-28T00:00:00");
        const now = new Date();
        const difference = eventDate - now;

        return difference > 0
            ? {
                  days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                  hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                  minutes: Math.floor((difference / 1000 / 60) % 60),
                  seconds: Math.floor((difference / 1000) % 60),
              }
            : { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const countdownItems = [
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Minutes", value: timeLeft.minutes },
        { label: "Seconds", value: timeLeft.seconds },
    ];

    return (
        <Box
            sx={{
                width: "100%",
                py: { xs: 10, md: 10 },
                px: { xs: 5, md: 10 },
                background: "url(section.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                color: "#fff",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    zIndex: 1,
                }}
            />

            <Box sx={{ position: "relative", zIndex: 2 }}>
                <Typography
                    variant="h4"
                    sx={{
                        mb: 2,
                        fontWeight: "bold",
                        letterSpacing: 1,
                    }}
                >
                    Countdown to Startup Weekend
                </Typography>
                <Typography variant="h6" sx={{ mb: 6, fontWeight: 400 }}>
                    28th, 29th, and 30th of September, 2025
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: { xs: 2, md: 4 },
                    }}
                >
                    {countdownItems.map((item) => (
                        <Box
                            key={item.label}
                            sx={{
                                minWidth: 120,
                                px: 4,
                                py: 3,
                                borderRadius: 3,
                                background: "rgba(255, 255, 255, 0.1)",
                                backdropFilter: "blur(12px)",
                                textAlign: "center",
                                color: "#fff",
                                border: "1px solid rgba(255, 255, 255, 0.2)",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    transform: "translateY(-5px) scale(1.05)",
                                    background: "rgba(255, 255, 255, 0.15)",
                                    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                                },
                            }}
                        >
                            <Typography
                                variant="h3"
                                sx={{
                                    fontWeight: 700,
                                    fontFamily: "'Roboto Mono', monospace",
                                    background:
                                        "linear-gradient(90deg, #6a11cb, #2575fc)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    transition: "0.3s",
                                }}
                            >
                                {item.value.toString().padStart(2, "0")}
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    mt: 1,
                                    letterSpacing: 1,
                                    textTransform: "uppercase",
                                    fontWeight: 500,
                                    color: "rgba(255,255,255,0.85)",
                                }}
                            >
                                {item.label}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>

            <Box
                sx={{
                    mt: 10,
                    mb: 3,
                    width: "100%",
                    display: "flex",
                    color: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    zIndex: 2,
                    maxWidth: 1200,
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        mb: 4,
                        fontWeight: "bold",
                    }}
                >
                    About
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: 6,
                    }}
                >
                    <Card
                        variant="outlined"
                        sx={{
                            background: "rgba(255, 255, 255, 0.1)",
                            backdropFilter: "blur(20px)",
                            textAlign: "start",
                            p: 5,
                            color: "#fff",
                            borderRadius: "50px 0 50px 0",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            flex: "300px 1 1",
                            transition: "all 0.3s ease",
                            "&:hover": {
                                transform: "translateY(-5px) scale(1.02)",
                                background: "rgba(255, 255, 255, 0.15)",
                                boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                            },
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: "bold",
                                mb: 3,
                            }}
                        >
                            What is Techstars?
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                my: 2,
                            }}
                        >
                            <span
                                style={{
                                    color: "#d269ff",
                                }}
                            >
                                {" "}
                                Building the World’s Most Powerful Network for
                                Founders.{" "}
                            </span>{" "}
                            Techstars is the original mentorship-driven
                            accelerator. We are a global network that supports
                            founders, mentors, investors, and partners in
                            building the future of business.
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                my: 2,
                            }}
                        >
                            Whether you're launching a company, mentoring the
                            next generation of founders, investing in startups,
                            or driving innovation in your industry or community,
                            Techstars is where breakthroughs begin.
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                my: 2,
                            }}
                        >
                            Since 2006, we've helped launch and grow thousands
                            of companies, including dozens of unicorns like
                            Chainalysis, Zipline, DataRobot, Alloy, and more, by
                            combining capital, mentorship, partnerships, and
                            community-building initiatives across more than 150
                            countries.
                        </Typography>
                    </Card>

                    <Card
                        variant="outlined"
                        sx={{
                            background: "rgba(255, 255, 255, 0.1)",
                            backdropFilter: "blur(20px)",
                            textAlign: "start",
                            p: 5,
                            color: "#fff",
                            borderRadius: "50px 0 50px 0",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            flex: "300px 1 1",
                            transition: "all 0.3s ease",
                            "&:hover": {
                                transform: "translateY(-5px) scale(1.02)",
                                background: "rgba(255, 255, 255, 0.15)",
                                boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                            },
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: "bold",
                                mb: 3,
                            }}
                        >
                            What is Techstars Startup Weekend Dhamtari?
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                my: 2,
                            }}
                        >
                            <span
                                style={{
                                    color: "#d269ff",
                                }}
                            >
                                {" "}
                                Building the World’s Most Powerful Network for
                                Founders.{" "}
                            </span>{" "}
                            Techstars is the original mentorship-driven
                            accelerator. We are a global network that supports
                            founders, mentors, investors, and partners in
                            building the future of business.
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                my: 2,
                            }}
                        >
                            Whether you're launching a company, mentoring the
                            next generation of founders, investing in startups,
                            or driving innovation in your industry or community,
                            Techstars is where breakthroughs begin.
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                my: 2,
                            }}
                        >
                            Since 2006, we've helped launch and grow thousands
                            of companies, including dozens of unicorns like
                            Chainalysis, Zipline, DataRobot, Alloy, and more, by
                            combining capital, mentorship, partnerships, and
                            community-building initiatives across more than 150
                            countries.
                        </Typography>
                    </Card>

                    <Card
                        variant="outlined"
                        sx={{
                            background: "rgba(255, 255, 255, 0.1)",
                            backdropFilter: "blur(20px)",
                            textAlign: "start",
                            p: 5,
                            color: "#fff",
                            borderRadius: "50px 0 50px 0",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            flex: "300px 1 1",
                            transition: "all 0.3s ease",
                            "&:hover": {
                                transform: "translateY(-5px) scale(1.02)",
                                background: "rgba(255, 255, 255, 0.15)",
                                boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                            },
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: "bold",
                                mb: 3,
                            }}
                        >
                            What is VikaasGarh?
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                my: 2,
                            }}
                        >
                            <span
                                style={{
                                    color: "#d269ff",
                                }}
                            >
                                {" "}
                                Building the World’s Most Powerful Network for
                                Founders.{" "}
                            </span>{" "}
                            Techstars is the original mentorship-driven
                            accelerator. We are a global network that supports
                            founders, mentors, investors, and partners in
                            building the future of business.
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                my: 2,
                            }}
                        >
                            Whether you're launching a company, mentoring the
                            next generation of founders, investing in startups,
                            or driving innovation in your industry or community,
                            Techstars is where breakthroughs begin.
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                my: 2,
                            }}
                        >
                            Since 2006, we've helped launch and grow thousands
                            of companies, including dozens of unicorns like
                            Chainalysis, Zipline, DataRobot, Alloy, and more, by
                            combining capital, mentorship, partnerships, and
                            community-building initiatives across more than 150
                            countries.
                        </Typography>
                    </Card>
                </Box>
            </Box>
        </Box>
    );
}

export default About;
