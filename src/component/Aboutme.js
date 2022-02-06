import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from "@mui/material/Typography";
import WebIcon from '@mui/icons-material/Web';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import Box from '@mui/material/Box';


function Aboutme() {
  return <div>
      <Grid container display="flex">
          <Box sx={{height:{xs:"0" , sm:"30vh" , md:"40vh"} }}>

          
          <Grid item xs={12} sm={12} md={12} style={{}}>
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
                        <h1>ABOUT</h1>
                        <p>
                            What is Lorem Ipsum? Lorem Ipsum is simply dummy
                            text of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type
                            specimen book. It has survived not only five
                            centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged. 
                        </p>
                    </Typography>
              </Grid>
          </Grid>
          </Box>



          <Grid item xs={12} sm={6} md={6} >
              <Grid style={{backgroundColor:""}}>           
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
                        }}
                    >
                        <h1><WebIcon style={{color:"#FFF" ,paddingLeft:"17px",paddingRight:"10px"}}/>Font End</h1>
                        <p style={{paddingLeft:"47px"}}>
                            What is Lorem Ipsum? Lorem Ipsum is simply dummy
                            text of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text
                         
                        </p>
                    </Typography>
              </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
              <Grid style={{}}>
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
                        }}
                    >
                        <h1><IntegrationInstructionsIcon style={{color:"#FFF" ,paddingLeft:"17px",paddingRight:"10px"}}/>Back End</h1>
                        <p style={{paddingLeft:"47px"}}>
                            What is Lorem Ipsum? Lorem Ipsum is simply dummy
                            text of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text
                         
                        </p>
                    </Typography>
              </Grid>
          </Grid>
          {/* <Grid item sx={12} sm={6} md={6}>
              <Grid style={{backgroundColor:"pink"}}>
              TEST3
              </Grid>
          </Grid>
          <Grid item sx={12} sm={6} md={6}>
              <Grid style={{backgroundColor:"blue"}}>
              TEST4
              </Grid>
          </Grid> */}

      </Grid>
  </div>;
}

export default Aboutme;
