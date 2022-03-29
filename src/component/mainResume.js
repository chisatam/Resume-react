import React from "react";
import Grid from "@mui/material/Grid";
import "../css/mainResume.css";
import ActionAreaCard from "./ActionAreaCard";
import Videobackground from "./Videobackground";
import TypographyNew from "./TypographyNew";
import Typography from "@mui/material/Typography";
import Profile from "../img/profile.jpg";
import Aboutme from "./Aboutme";
import Skill from "./Skill";
import { Button } from "@mui/material";
import Dowloadfile from "./Dowloadfile";
import MyEducation from "./Page_EW";
import Experience from "./Page_EW";
import SkillTest from "./SkillTest";
import Contact from "./contact";
import ImageListcert from "./ImageLiscert"

function mainResume() {
    const detail1 = {
        headName: "WORK EXPERIENCE",
        detail: "The work experience written here is all that I have been through since I started working.",

        dicription: [
            {
                headName2: "NATIONAL CENTRAL UNIVERSITY IN TAIWAN (Trainee)",
                detail2:
                    "Develop a face recognition application as program for face recognition in classroom.",
                number: 4,
                unit: "Month",
            },
            {
                headName2: "METRO SYSTEMS CORPORATION PUBLIC COMPANY LIMITED",
                detail2:
                    "Develop web applications for Hitachi.Front-end react, Back-end C# .net core ",
                number: 1,
                unit: "Years",
            },
        ],
    };
    const detail2 = {
        headName: "EDUCATION",
        detail: "My educational background from bachelor's degree onwards",

        dicription: [
            {
                headName2: "Information Technology",
                detail2:
                    "BSc.in Information Technology, Kasetsart " +
                    "University Sirachar Campus",
                number: 2.82,
                unit: "GPA",
            },
        ],
    };

    return (
        <div className="">
            <Grid
                container
                className="Typography"
                display="flex"
                flexDirection=""
                justifyContent="center"
                alignItems="center"
            >
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    style={{
                        position: "absolute",

                        width: "100%",
                        height: "100vh",
                    }}
                >
                    <Grid>
                        {/* Video Background */}
                        <Videobackground></Videobackground>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12} style={{}}>
                    {/* Typography */}
                    <TypographyNew></TypographyNew>
                </Grid>
            </Grid>

            <Grid
                container
                display="flex"
                justifyContent="center"
                style={{ color: "#FFF", backgroundColor: "#131A21" }}
            >
                {/* VALUE GOALS HOBBIES */}
                <Grid item xs={12} sm={6} md={4}>
                    <Typography
                        variant="subtitle2"
                        component="div"
                        gutterBottom
                        sx={{
                            flexGrow: 1,
                            fontSize: { xs: "10px", md: "10px",lg:"15px" },
                            width: { xs: "80%", md: "80%" },
                            padding: "10px 20px",
                            margin: {
                                xs: "15px auto",
                                sm: "15px auto",
                                md: "60px auto",
                            },
                            backgroundColor: "#1D2934"
                        }}
                    >
                        <h1>DESIRED JOB ROLE</h1>
                        <p>Full stack developer</p>
                        <p>Programmer</p>
                        <p style={{ color: "#131A21" }}>.</p>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Typography
                        variant="subtitle2"
                        component="div"
                        gutterBottom
                        sx={{
                            flexGrow: 1,
                            fontSize: { xs: "10px", md: "10px",lg:"15px" },
                            width: { xs: "80%", md: "90%" },
                            padding: "10px 20px",
                            margin: {
                                xs: "15px auto",
                                sm: "15px auto",
                                md: "60px auto",
                            },
                            backgroundColor: "#1D2934"
                        }}
                    >
                        <h1>GOALS</h1>
                        <p>Develop your own potential.</p>
                        <p>learn new things to develop one's potential</p>
                        <p>Can fix the problem.</p>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Typography
                        variant="subtitle2"
                        component="div"
                        gutterBottom
                        sx={{
                            flexGrow: 1,
                            fontSize: { xs: "10px", md: "10px",lg:"15px" },
                            width: { xs: "80%", md: "80%" },
                            padding: "10px 20px",
                            margin: {
                                xs: "15px auto",
                                sm: "15px auto",
                                md: "60px auto",
                            },
                            backgroundColor: "#1D2934"
                        }}
                    >
                        <h1>HOBBIES</h1>
                        <p>Read books about innovation</p>
                        <p>Trade cryptocurrency</p>
                        <p>Study general knowledge</p>
                    </Typography>
                </Grid>
            </Grid>
            {/* VALUE GOALS HOBBIES */}

            <Grid
                container
                display="flex"
                style={{ backgroundColor: "#131A21" }}
            >
                <Grid item xs={12} sm={5} md={3} style={{}}>
                    <Grid style={{ margin: "0px 40px" }}>
                        <img
                            src={Profile}
                            alt="profile"
                            style={{
                                width: "100%",
                                height: "auto",
                                // height: "80vh",
                                // margin: "0 20px",
                                // alignItems: "center",
                                //  resizeMode: 'contain'
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={7}
                    md={8}
                    style={{ backgroundColor: "#1D2934" }}
                >
                    <Aboutme id="About"></Aboutme>
                </Grid>
            </Grid>
            {/* MY SKILLS */}
            <Grid
                container
                display="flex"
                style={{ backgroundColor: "#131A21", padding: "30px 0" }}
            >
                {/* <SkillTest></SkillTest> */}
                <Skill></Skill>
            </Grid>

            {/*Dowload file Resume */}
            <Grid style={{ backgroundColor: "#1D2934" }}>
                <Dowloadfile></Dowloadfile>
            </Grid>
            {/* Line */}
            <Grid style={{ backgroundColor: "#131A21" }}>.</Grid>
            {/* Education */}
            <Grid style={{ backgroundColor: "#131A21" }}>
                <MyEducation detail={detail2} id="Education"></MyEducation>
            </Grid>

            {/* Line */}
            <Grid style={{ backgroundColor: "#131A21" }}>.</Grid>

            {/* Experience */}
            <Grid style={{ backgroundColor: "#131A21" }}>
                <Experience detail={detail1} id="Experience"></Experience>
            </Grid>
             {/* Line */}
             <Grid style={{ backgroundColor: "#131A21" }}>.</Grid>
             {/* Imagelistcert */}
             <Grid >
                <ImageListcert></ImageListcert>
            </Grid>
            {/* Contact */}
            <Grid>
                <Contact></Contact>
            </Grid>
           

        </div>
    );
}

export default mainResume;
