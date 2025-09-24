import React from "react";
import {
    Box,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqData = [
    {
        category: "Before the Weekend",
        qa: [
            {
                q: "Is this event for me?",
                a: `If you are interested in entrepreneurship the answer is most likely yes. Whether you are a serial entrepreneur or new to the startup scene, you’ll fit right in as long as you are motivated to build a product or startup and are open to new ideas. We believe that great ideas can come from anywhere.
        
The event is intended to be a collaborative and inclusive forum for sharing, learning, building, and having fun. We expect each member of the startup community to be inclusive of all people and their ideas at Techstars Startup Weekend and we welcome all, regardless of experience, industry or background.`,
            },
            {
                q: "Do I have to participate in all three days?",
                a: `Apart from the organizing team, mentors, speakers, event volunteers and judges, everyone who participates in the event is expected to participate in all three days. This is important not only to preserve your own learning experience, but also to minimize distractions or disruptions for the team you choose to join.
        
At many Techstars Startup Weekends, a “Sunday Presentation Only” registration option is available for those wishing to only view the teams’ final pitch presentations. We welcome any friends, family or colleagues you would like to invite to watch your final presentation. Please check the registration page of your city’s event website for availability.`,
            },
            {
                q: "How do I register?",
                a: `Every Techstars Startup Weekend event has a corresponding website with a registration page. Please see our events page at https://www.techstars.com/events for a complete list of upcoming events.
        
There are typically different types of tickets for different skill sets, like ‘Business’, ‘Designer’, ‘Technical’ or ‘Enthusiast’. This is done to maximize the event’s value for each participant by making sure teams are balanced and effective. Choose the ticket type closest to your background — don’t worry if nothing precisely matches.`,
            },
            {
                q: "Can I pay at the door?",
                a: `In some cases you’ll be able to pay for your ticket at the door, on the day of the event. However, it’s preferable to buy your ticket in advance as organizers need to order catering and supplies. Please reach out to the local organizers to understand more about payment in your local city.`,
            },
            {
                q: "Do I need a team?",
                a: `Everyone who attends the event as a participant is expected to come without a team and then join one during the event. The ideal team consists of members from diverse backgrounds and experiences who collaborate to build a great minimum viable product (MVP) using the Lean Canvas framework.`,
            },
            {
                q: "What ticket type should I purchase to pitch an idea?",
                a: `Pitching is open to every participant! We recommend you purchase the ticket that best represents your skill set.`,
            },
            {
                q: "Will accommodation be provided?",
                a: `In most cases, participants are responsible for providing their own transportation and accommodation (if needed) to in-person events. Reach out to the local organizing team for nearby recommendations.`,
            },
            {
                q: "Do I have to pitch an idea to attend?",
                a: `No, but we highly encourage you to. You can pitch an idea you've been thinking about for years, or something you think of at the last minute during the event. The point is to learn how to go from ideation to product.
        
Pitching provides invaluable practice for public speaking. You won’t regret pitching, but might regret not pitching.`,
            },
        ],
    },
    {
        category: "During the Weekend",
        qa: [
            {
                q: "What happens on Friday, Saturday and Sunday?",
                a: `Friday: Networking, ice-breaking, short talks, then “Pitchfire” (60-second pitches). Teams form around top ideas.
        
Saturday: Teams work all day with meals, short talks, and mentor sessions.
        
Sunday: Teams finish their prototypes and present to judges in 5-minute pitches with Q&A.`,
            },
            {
                q: "What types of ideas can I pitch?",
                a: `All business ideas are welcome, whether for-profit or non-profit. However, most ideas are tech-oriented (about 90% are SaaS). We recommend even non-tech ideas focus on a scalable tech-related deliverable to demonstrate an MVP by Sunday.`,
            },
            {
                q: "Can I pitch more than one idea?",
                a: `Depending on the schedule, you may or may not be able to pitch multiple ideas. Prioritize your best/prepared idea first. Note: you can only work on one idea through the weekend.`,
            },
            {
                q: "Can I pitch my existing business?",
                a: `No. Startup Weekend is designed to grow new businesses from scratch over a weekend. Existing businesses undermine the collaborative spirit. Local organizers may disqualify existing ideas.`,
            },
            {
                q: "What resources/assistance are provided over the weekend?",
                a: `Mentors and speakers provide advice on entrepreneurship, software, marketing, finance, law, and more. Talks are practical (e.g. pitching, customer validation). You’ll also get access to curated resources and tools.`,
            },
        ],
    },
    {
        category: "After the Weekend",
        qa: [
            {
                q: "Are teams expected to continue after the event?",
                a: `Whether or not you continue to work on the idea is completely up to you.`,
            },
            {
                q: "How can I get more involved?",
                a: `You can organize a Startup Weekend, join Techstars’ Talent Network, share your company success story, subscribe to Startup Digest, join virtual meet-and-greets, or apply to Techstars accelerators.`,
            },
            {
                q: "What kind of support can Techstars provide after the weekend?",
                a: `Startup Weekend is just the entry point. Techstars offers accelerators, mentorship, funding, and a global network to support your journey long after the weekend.`,
            },
        ],
    },
];

function FAQ() {
    return (
        <Box
            sx={{
                width: "100%",
                pt: { xs: 6, md: 8 },
                pb: 2,
                px: { xs: 3, md: 10 },
                background: "#0a0a0a",
                color: "#fff",
            }}
        >
            <Box sx={{ maxWidth: 900, mx: "auto" }}>
                <Typography
                    variant="h4"
                    sx={{ fontWeight: 700, mb: 8, textAlign: "center" }}
                >
                    Frequently Asked Questions
                </Typography>

                {faqData.map((section, idx) => (
                    <Box key={idx} sx={{ mb: 6 }}>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 600,
                                mb: 2,
                                color: "secondary.main",
                            }}
                        >
                            {section.category}
                        </Typography>

                        {section.qa.map((item, qIdx) => (
                            <Accordion
                                key={qIdx}
                                sx={{
                                    background: "rgba(255,255,255,0.05)",
                                    backdropFilter: "blur(10px)",
                                    color: "#fff",
                                    mb: 1,
                                    "&:before": { display: "none" },
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={
                                        <ExpandMoreIcon
                                            sx={{ color: "#fff" }}
                                        />
                                    }
                                >
                                    <Typography sx={{ fontWeight: 500 }}>
                                        {item.q}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography
                                        sx={{
                                            color: "rgba(255,255,255,0.85)",
                                            whiteSpace: "pre-line",
                                        }}
                                    >
                                        {item.a}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default FAQ;
