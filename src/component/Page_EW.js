import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function Page_EW(props) {
    useEffect(() => {
        // Update the document title using the browser API
        console.log("consolLog", props);
    });

    const listItems = props.detail.dicription.map((item) => (
        <Grid key={item.number} item xs={12} style={{}}>
            <Typography
                variant="subtitle2"
                component="div"
                gutterBottom
                sx={{
                    flexGrow: 1,
                    fontSize: { xs: "10px", md: "14px" },
                    width: { xs: "80%", md: "80%" },
                    padding: "10px 20px",
                    margin: {
                        xs: "15px auto",
                        sm: "15px auto",
                        md: "60px auto",
                    },
                    color: "#FFF",
                    // backgroundColor: "rgba(255, 255, 255, 0.07)",
                }}
            >
                <h1>{item.headName2}</h1>
                <p>{item.detail2}</p>
                <p
                    style={{
                        backgroundColor: "green",
                        width: "10%",
                        textAlign: "center",
                    }}
                >
                    {item.number} {item.unit}
                </p>
                <p style={{ borderBottom: "1px solid #FFF" }}></p>
            </Typography>
        </Grid>
    ));

    return (
        <div>
            <Grid
                container
                display="flex"
                style={{ backgroundColor: "#1D2934", padding: "30px" }}
            >
                <Grid item xs={12} md={6}>
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
                            color: "#FFF",
                            // backgroundColor: "rgba(255, 255, 255, 0.07)",
                        }}
                    >
                        <h1>{props.detail.headName}</h1>
                        <p>{props.detail.detail}</p>
                    </Typography>
                </Grid>
                <Grid
                    container
                    display="flex"
                    xs={12}
                    md={6}
                    style={{ paddingTop: "60px" }}
                >
                    {listItems}
                    {/* <Grid item xs={12}  style={{backgroundColor:"red"}}>
                        test1
                    </Grid>
                    <Grid item xs={12}  style={{backgroundColor:"yellow"}}>
                        test2
                    </Grid>
                    <Grid item xs={12}  style={{backgroundColor:"pink"}}>
                        test3
                    </Grid> */}
                </Grid>
            </Grid>
        </div>
    );
}
