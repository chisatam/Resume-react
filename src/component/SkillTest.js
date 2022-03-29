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
        { year: "C", population: 3 },
        { year: "M", population: 3 },
        { year: "R", population: 4 },
    ];
    return (
        <div>
            <Grid container display="flex" textAlign="center" xs={12}>
                <Grid item={true}  xs={12} sm={6} md={6}>
                    <Grid>
                        <Typography
                            variant="subtitle2"
                            component="div"
                            gutterBottom
                            sx={{
                                flexGrow: 1,
                                fontSize: { xs: "10px", md: "15px" },
                                width: { xs: "90%", md: "80%" },
                                padding: "10px 20px",
                                color: "#FFF",
                            }}
                        >
                            <h1>MY SKILLS</h1>
                            <p>
                                What is Lorem Ipsum? Lorem Ipsum is simply dummy
                                text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard
                                dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it
                                to make a type specimen book. It has survived
                                not only five centuries, but also the leap into
                                electronic typesetting, remaining essentially
                                unchanged What is Lorem Ipsum? Lorem Ipsum is
                                simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the
                                1500s, when an unknown printer took a galley of
                                type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged.
                            </p>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    container
                    display="flex"
                    textAlign="center"
                    alignItems="center"         
                    xs={2}
                    sm={1}
                    md={1}
                    style={{ color: "white" }}
                >
                    <Grid item  xs={12}>
                        <Typography
                            variant="subtitle2"
                            component="div"
                            gutterBottom
                            sx={{
                                flexGrow: 1,
                                fontSize: { xs: "5px", sm: "7px", md: "10px" },
                                width: { xs: "80%", md: "80%" },
                                padding: "5px 20px",
                                color: "#FFF",
                            }}
                        >
                            <h1>React</h1>
                        </Typography>
                    </Grid>
                    <Grid  item xs={12}>
                        <Typography
                            variant="subtitle2"
                            component="div"
                            gutterBottom
                            sx={{
                                flexGrow: 1,
                                fontSize: { xs: "5px", sm: "7px", md: "10px" },
                                width: { xs: "80%", md: "80%" },
                                padding: "5px 20px",
                                color: "#FFF",
                            }}
                        >
                            <h1>C#</h1>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                            variant="subtitle2"
                            component="div"
                            gutterBottom
                            sx={{
                                flexGrow: 1,
                                fontSize: { xs: "5px", sm: "7px", md: "10px" },
                                width: { xs: "80%", md: "80%" },
                                padding: "5px 20px",
                                color: "#FFF",
                            }}
                        >
                            <h1>MY SQL</h1>
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography
                            variant="subtitle2"
                            component="div"
                            gutterBottom
                            sx={{
                                flexGrow: 1,
                                fontSize: { xs: "5px", sm: "7px", md: "10px" },
                                width: { xs: "80%", md: "80%" },
                                padding: " 20px",
                                color: "#FFF",
                            }}
                        >
                            <h1>CSS</h1>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={10} sm={5} md={5}>
                    <Grid>
                        <Paper
                            style={{
                                backgroundColor: "#131A21",
                                paddingRight: "40px",
                            }}
                        >
                            <Chart data={data} rotated>
                                <ArgumentAxis />
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