import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Cerjs from "../img/cerjs.jpg"
import Cerdb from "../img/cerdb.jpg"
import Cerncu from "../img/cerncu.jpg"
import Cerof from "../img/cerof.jpg"

export default function ImageListcert() {
    return (
        <div style={{ backgroundColor: "#1D2934" ,textAlign:"center"}}>
          <Grid item xs={12} md={5}>
                    <Typography
                        variant="subtitle2"
                        component="div"
                        gutterBottom
                        sx={{
                            flexGrow: 1,
                            fontSize: { xs: "10px", md: "15px" },
                            width: { xs: "80%", md: "80%" },
                            padding: "10px 20px",
                           
                            color: "#FFF",
                            // backgroundColor: "rgba(255, 255, 255, 0.07)",
                        }}
                    >
                     <h1>CERTIDICATE</h1>
                    </Typography>
                </Grid>
            <Grid
                display="flex"
                justifyContent="right"
                style={{ backgroundColor: "#1D2934", padding: "30px" }}
            >
              <Grid item xs={0} md={2}>

              </Grid>
                <Grid item xs={12} md={8}>
                    <ImageList
                        sx={{ width: "100%", height: "55vh", margin: "0px" }}
                    >
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                <ImageListItemBar
                                    title={item.title}
                                    subtitle={<span>by: {item.author}</span>}
                                    position="below"
                                   style={{color:"White"}}
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Grid>
                <Grid item xs={0} md={2}>

              </Grid>
            </Grid>
        </div>
    );
}
const itemData = [
    {
        img:Cerjs,
        title: "CERTIFICATE INTRODUCTION JAVASCRIPT",
        author: "www.borntodev.com",
    },
    {
        img:Cerdb,
        title: "CERTIFICATE ESSENTIAL SQL FOR EVERYONE",
        author: "www.borntodev.com",
    },
    {
      img:Cerof,
      title: "CERTIFICATE COMPUTER AND ONLINE BASICS",
      author: "ICDL-ECDL FOUNDATION APPROVED TEST",
  },
    {
        img:Cerncu,
        title: "CERTIFICATE NATIONAL CENTRAL UNIVERSITY",
        author: "KASETSART UNIVERSITY",
    },
  
   
];
