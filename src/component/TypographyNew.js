import React from "react";
import "../css/mainResume.css";
import TypeWriterEffect from "react-typewriter-effect";
import Typography from "@mui/material/Typography";

function TypographyNew() {
    return (
        <div>
            <div className="">
                <Typography
                    variant="h2"
                    component="div"
                    gutterBottom
                    sx={{
                        flexGrow: 1,
                        display: { xs: "flex", md: "flex" },
                        fontSize: { xs: "15px", md: "20px" },
                        border: "3px solid #FFF",
                        borderRadius: "20px",
                        width: { xs: "80%", md: "65%" },
                        padding: "10px 20px",
                        margin: "0 auto",
                        justifyContent: "center",
                    }}
                >
                    <TypeWriterEffect
                        textStyle={{
                            fontFamily: "Red Hat Display",
                            color: "#FFFF",
                            fontWeight: 500,
                            backgroundColor: "rgba(10, 9, 9, 0.522)",
                        }}
                        loop={true}
                        startDelay={1000}
                        cursorColor="#FFFF"
                        multiText={[
                            // 'Print ("  Programmer & Deverloper  ")',
                            // 'Print ("  I\'am full stack developer  ")',
                            // 'Print ("  If you want a potential developer  ")',
                            // 'Print ("  The person you\'re looking for is me  ")',
                            "Programmer & Deverloper",
                            "If you want a potential developer",
                            "The person you're looking for is me",
                            "Programmer & Deverloper",
                            "If you want a potential developer",
                            "The person you're looking for is me",
                            "Programmer & Deverloper",
                            "If you want a potential developer",
                            "The person you're looking for is me",
                            "Programmer & Deverloper",
                            "If you want a potential developer",
                            "The person you're looking for is me",
                        ]}
                        multiTextDelay={1000}
                        typeSpeed={30}
                    />
                </Typography>
            </div>
        </div>
    );
}

export default TypographyNew;
