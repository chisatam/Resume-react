import React from "react";
import Grid from "@mui/material/Grid";
import "../css/mainResume.css";
import ActionAreaCard from "./ActionAreaCard";
import Videobackground from "./Videobackground";
import TypographyNew from "./Typography";
import Typography from "@mui/material/Typography";
import Profile from "../img/profile1.jpg";
import Aboutme from "./Aboutme";
import Skill from "./Skill";
import { Button } from "@mui/material";
import Dowloadfile from "./Dowloadfile";
import MyEucatuin from "./Page_EW";
import Experience from "./Page_EW";

function mainResume() {
    const detail1 = {
        headName: "WORK EXPERIENCE",
        detail: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of readable English. Many desktop publishing",

        dicription: [
            {
                headName2: "JUNIOR PROGRAMER",
                detail2:
                    "Lorem Ipsum is simply dummy text of the printing and" +
                    " typesetting industry. Lorem Ipsum has been the",
                number: 1,
                unit: "Years",
            },
            {
                headName2: "INTERNET OF THING",
                detail2:
                    "industry's standard dummy text ever since the 1500s" +
                    "when an unknown printer took a galley of type and" +
                    "  scrambled it to make a type specimen book. It has",
                number: 2,
                unit: "Years",
            },
        ],
    };
    const detail2 = {
        headName: "MY EDUCATIN",
        detail: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of readable English. Many desktop publishing",

        dicription: [
            {
                headName2: "GRAPHIC DESIGN",
                detail2:
                    "Lorem Ipsum is simply dummy text of the printing and" +
                    " typesetting industry. Lorem Ipsum has been the",
                number: 4.5,
                unit: "GPA",
            },
            {
                headName2: "CIT DIPLOMA",
                detail2:
                    "industry's standard dummy text ever since the 1500s" +
                    "when an unknown printer took a galley of type and" +
                    "  scrambled it to make a type specimen book. It has",
                number: 3,
                unit: "GPA",
            },
            {
                headName2: "LEAD WEB",
                detail2:
                    " It is a long established fact that a reader will be" +
                    "distracted by the readable content of a page when",
                number: 2.89,
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
                            fontSize: { xs: "10px", md: "15px" },
                            width: { xs: "80%", md: "80%" },
                            padding: "10px 20px",
                            margin: {
                                xs: "15px auto",
                                sm: "15px auto",
                                md: "60px auto",
                            },
                            backgroundColor: "rgba(255, 255, 255, 0.07)",
                        }}
                    >
                        <h1>VALUES</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries,
                        </p>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Typography
                        variant="subtitle2"
                        component="div"
                        gutterBottom
                        sx={{
                            flexGrow: 1,
                            fontSize: { xs: "10px", md: "15px" },
                            width: { xs: "80%", md: "80%" },
                            padding: "10px 20px",
                            margin: {
                                xs: "15px auto",
                                sm: "15px auto",
                                md: "60px auto",
                            },
                            backgroundColor: "rgba(255, 255, 255, 0.07)",
                        }}
                    >
                        <h1>GOALS</h1>
                        <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using
                            'Content here, content here', making it look like
                        </p>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Typography
                        variant="subtitle2"
                        component="div"
                        gutterBottom
                        sx={{
                            flexGrow: 1,
                            fontSize: { xs: "10px", md: "15px" },
                            width: { xs: "80%", md: "80%" },
                            padding: "10px 20px",
                            margin: {
                                xs: "15px auto",
                                sm: "15px auto",
                                md: "60px auto",
                            },
                            backgroundColor: "rgba(255, 255, 255, 0.07)",
                        }}
                    >
                        <h1>HOBBIES</h1>
                        <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believable. If
                            you are going to use a passage of readable English.
                            Many desktop publishing
                        </p>
                    </Typography>
                </Grid>
            </Grid>
            {/* VALUE GOALS HOBBIES */}

            <Grid
                container
                display="flex"
                style={{ backgroundColor: "#131A21" }}
            >
                <Grid item xs={12} sm={5} md={4} style={{}}>
                    <Grid style={{}}>
                        <img
                            src={Profile}
                            alt="profile"
                            style={{
                                width: "100%",
                                height: "77vh",
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
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }}
                >
                    <Aboutme></Aboutme>
                </Grid>
            </Grid>
            {/* MY SKILLS */}
            <Grid
                container
                display="flex"
                style={{ backgroundColor: "#131A21", padding: "30px 0" }}
            >
                <Skill></Skill>
            </Grid>

            {/*Dowload file Resume */}
            <Grid>
                <Dowloadfile></Dowloadfile>
            </Grid>

            {/* Education */}
            <Grid>
                <MyEucatuin detail={detail2}></MyEucatuin>
            </Grid>

            {/* Line */}
            <Grid style={{ backgroundColor: "#131A21" }}>.</Grid>

            {/* Experience */}
            <Grid>
                <Experience detail={detail1}></Experience>
            </Grid>
        </div>
    );
}

export default mainResume;
