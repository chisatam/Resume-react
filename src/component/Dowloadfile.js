import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

function Dowloadfile() {
    const handleClick = () => {
        window.open(
            "https://drive.google.com/file/d/1HwsnawSuJyDLKzwC3JUNe1gOIdNKaIlQ/view?usp=sharing"
        );
    };
    return (
        <div>
            <Grid
                container
                display="flex"
                textAlign="center"
                justifyContent="center"
                style={{ backgroundColor: "#1C2731", padding: "30px 10%" }}
            >
                <Grid item xs={12}>
                    <Typography
                        variant="subtitle2"
                        component="div"
                        gutterBottom
                        sx={{
                            flexGrow: 1,
                            fontSize: { xs: "10px", md: "15px" },
                            width: { xs: "90%", md: "97%" },
                            padding: "10px 20px",
                            color: "#FFF",
                        }}
                    >
                        <h1>RESUME</h1>
                        <p>
                            What is Lorem Ipsum? Lorem Ipsum is simply dummy
                            text of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type
                            specimen book. It has survived not only five
                            centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged What is
                            Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since
                            the 1500s, when an unknown printer took a galley of
                            type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also
                            the leap into electronic typesetting, remaining
                            essentially unchanged.
                        </p>
                    </Typography>
                   
                  
                </Grid>
                <Grid item xs={12}>
                <Button
                        onClick={handleClick}
                        style={{ border: "1px solid", marginBottom: "5%" }}
                    >
                        DOWLOAD RESUME
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default Dowloadfile;
