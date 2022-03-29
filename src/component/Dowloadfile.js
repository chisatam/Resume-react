import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

function Dowloadfile() {
    const handleClick = () => {
        window.open(
            "https://drive.google.com/file/d/16TGxrOKftJJXlg6hkCrHuMol8RjzfCki/view?usp=sharing"
        );
    };
    return (
        <div>
            <Grid
                container
                display="flex"
                textAlign="center"
                justifyContent="center"
                style={{ padding: "10px 10%" ,}}
            >
                <Grid item xs={12} >
                    <Typography
                        variant="subtitle2"
                        component="div"
                        gutterBottom
                        sx={{
                            flexGrow: 1,
                            fontSize: { xs: "10px", md: "15px" },
                            width: { xs: "90%", md: "97%" },
                            padding: "0px 20px",
                            color: "#FFF",
                        }}
                    >
                        <h1>RESUME</h1>
                        <p>
                        This is my resume PDF file, you can download and view my resume.
                        </p>
                    </Typography>
                   
                  
                </Grid>
                <Grid item xs={12} >
                <Button
                        onClick={handleClick}
                        style={{ border: "1px solid", marginBottom: "3%" }}
                    >
                        DOWLOAD RESUME
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default Dowloadfile;
