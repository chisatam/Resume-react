import React from "react";
import Grid from "@mui/material/Grid";
import LogoEmail from "../img/logoEmail.png";
import LogoLine from "../img/logoLine.png";
import LogoGithub from "../img/logoGitHub.png";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import GitHubIcon from "@mui/icons-material/GitHub";
import ChatIcon from "@mui/icons-material/Chat";

function Mailto({ email, subject, body, ...props }) {
    return (
        <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
            {props.children}
        </a>
    );
}

export default function contact() {
    const handleClickAddline = () => {
        window.open("https://line.me/ti/p/~chertamfirst");
    };
    const handleClickGitHub = () => {
        window.open("https://github.com/chisatam?tab=repositories");
    };
    return (
        <div id="Contact">
            <Grid
                container
                display="flex"
                justifyContent="center"
                alignItems="center"
                style={{
                    backgroundColor: "#131A21",
                    height: "20vh",
                    paddingLeft: "",
                }}
            >
                <Grid item xs={12}>
                    <Typography
                        variant="subtitle2"
                        component="div"
                        gutterBottom
                        color="#ABB2B9"
                        sx={{
                            flexGrow: 1,
                            fontSize: { xs: "4px", md: "6px" },
                            textAlign: "center",
                            padding: "",
                        }}
                    >
                        <h1>Contact of Chisanupong Tamprasit</h1>
                    </Typography>
                </Grid>
                <Grid item xs={3} sm={1} md={1} style={{ marginLeft: "5%" }}>
                    <Mailto
                        email="Chisanupong.tp@gmail.com"
                        subject="apply for work"
                        body=""
                    >
                        <SendIcon style={{ color: "white" }}></SendIcon>
                    </Mailto>
                </Grid>
                <Grid item xs={3} sm={1} md={1}>
                    <Button onClick={handleClickAddline}>
                        <ChatIcon style={{ color: "white" }}></ChatIcon>
                    </Button>
                </Grid>
                <Grid item xs={3} sm={1} md={1}>
                    <Button onClick={handleClickGitHub}>
                        <GitHubIcon style={{ color: "white" }}></GitHubIcon>
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}
