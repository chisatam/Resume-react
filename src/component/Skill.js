import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import {
    Chart,
    BarSeries,
    Title,
    ArgumentAxis,
    ValueAxis,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";
import { padding } from "@mui/system";
import { AreaSeries } from '@devexpress/dx-react-chart';

const consumptionColor = "#41c0f0";

const makeLabel =
    (symbol, color) =>
    ({ text, style, ...restProps }) =>
        (
            <ValueAxis.Label
                text={`${text} ${symbol}`}
                style={{
                    fill: color,
                    ...style,
                }}
                {...restProps}
            />
        );
const LabelWithThousand = makeLabel("", consumptionColor);

export default function Skill() {
    const data = [
        { year: "Cs", population: 2.5 },
        { year: "M", population: 3 },
        { year: "C", population: 3 },
        { year: "H", population: 2.5 },
        { year: "R", population: 4 },
    ];
    return (
        <div>
            <Grid container display="flex" textAlign="left">
                <Grid item={true} xs={12} sm={12} md={6}>
                    <Grid>
                        <Typography
                            variant="subtitle2"
                            component="div"
                            gutterBottom
                            sx={{
                                flexGrow: 1,
                                fontSize: { xs: "10px", md: "15px" },
                                width: { xs: "50%",sm:"60%", md: "70%" },
                                padding: "10px 20px",
                                paddingLeft: "100px",
                                color: "#FFF",
                            }}
                        >
                            <h1>MY SKILLS</h1>
                            <p>
                                The skills in web applications are part of the
                                languages I've used, Display Languages are my
                                primary working language. And there are many
                                Computer or tools that I can use. And I can
                                learn tools to improve my skills.
                            </p>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    container
                    display="flex"
                    textAlign="center"
                    flexDirection="column"
                    justifyContent="space-between"
                    style={{ color: "white" }}
                    width="73px"
                >
                    <Grid item xs={2} sm={1} md={1}>
                        <Typography
                            variant="subtitle2"
                            component="div"
                            gutterBottom
                            sx={{
                                flexGrow: 1,
                                fontSize: { xs: "5px", sm: "7px", md: "8px" },
                                width: { xs: "80%", md: "80%" },
                                padding: "5px 20px",
                                color: "#FFF",
                                paddingTop: "35px",
                            }}
                        >
                            <h1>React</h1>
                        </Typography>
                    </Grid>
                    <Grid item xs={2} sm={1} md={1}>
                        <Typography
                            variant="subtitle2"
                            component="div"
                            gutterBottom
                            sx={{
                                flexGrow: 1,
                                fontSize: { xs: "5px", sm: "7px", md: "8px" },
                                width: { xs: "80%", md: "80%" },
                                padding: "5px 20px",
                                color: "#FFF",
                                paddingTop: { xs: "35px", md: "0px" },
                               
                            }}
                        >
                            <h1>HTML</h1>
                        </Typography>
                    </Grid>
                    <Grid item xs={2} sm={1} md={1}>
                        <Typography
                            variant="subtitle2"
                            component="div"
                            gutterBottom
                            sx={{
                                flexGrow: 1,
                                fontSize: { xs: "5px", sm: "7px", md: "8px" },
                                width: { xs: "80%", md: "80%" },
                                padding: "5px 20px",
                                color: "#FFF",
                                paddingTop: { xs: "30px", md: "0px" },
                               
                            }}
                        >
                            <h1>C#</h1>
                        </Typography>
                    </Grid>
                    <Grid item xs={2} sm={1} md={1}>
                        <Typography
                            variant="subtitle2"
                            component="div"
                            gutterBottom
                            sx={{
                                flexGrow: 1,
                                fontSize: { xs: "5px", sm: "7px", md: "8px" },
                                width: { xs: "80%", md: "80%" },
                                padding: "5px 20px",
                                color: "#FFF",
                                paddingTop: { xs: "25px", md: "0px" },
                               
                            }}
                        >
                            <h1>SQL</h1>
                        </Typography>
                    </Grid>

                    <Grid item xs={2} sm={1} md={1}>
                        <Typography
                            variant="subtitle2"
                            component="div"
                            gutterBottom
                            sx={{
                                flexGrow: 1,
                                fontSize: { xs: "5px", sm: "7px", md: "8px" },
                                width: { xs: "80%", md: "80%" },
                                padding: " 20px",
                                color: "#FFF",
                                paddingBottom:  { xs: "60px", md: "50px" },
                            }}
                        >
                            <h1>CSS</h1>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={9} sm={5} md={5}>
                    <Grid>
                        <Paper
                            style={{
                                backgroundColor: "#131A21",
                                paddingRight: "40px",
                            }}
                        >
                            <Chart data={data} rotated >
                                <ArgumentAxis  />
                                
                                <ValueAxis
                                    max={7}
                                    showGrid={false}
                                    labelComponent={LabelWithThousand}
                                />
                                {/* labelComponent={LabelWithThousand} */}

                                <BarSeries
                                    valueField="population"
                                    argumentField="year"
                                    color="#395068"
                                />
                                <Animation />
                            </Chart>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
