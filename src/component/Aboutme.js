import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from "@mui/material/Typography";
import WebIcon from '@mui/icons-material/Web';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import Box from '@mui/material/Box';


function Aboutme() {
  return <div>
      <Grid container display="flex" id="About">
          <Box sx={{height:{xs:"" , sm:"" , md:""} }}>

          
          <Grid item xs={10} sm={12} md={12} style={{}}  >
              <Grid>
              <Typography
                        variant="subtitle2"
                        component="div"
                        gutterBottom
                        sx={{
                            flexGrow: 1,
                            fontSize: { xs: "10px", md: "10px",lg:"15px" },
                            width: { xs: "90%" , sm:"80%", md: "80%" },
                            padding: "10px 40px",
                            // paddingLeft:"17px",
                            color: "#FFF",
                        }}
                    >
                        <h1>ABOUT</h1>
                        <h2>CHISANUPONG  TAMPRASIT (First)</h2>
                        
                        <p>
                           
                        I’m Chisanupong. I graduated in Information Technology from Kasetsart University. 
                        And has one year experience as a programmer from Metro Systems Company. 
                        I am looking for a job I can apply my programming skills and 
                        ability to solve problems related to software development.
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
                            fontSize: { xs: "10px", md: "10px" ,lg:"15px"},
                            width: { xs: "80%", md: "70%" },
                            padding: "10px 20px",
                            color: "#FFF",
                        }}
                    >
                        <h2><WebIcon style={{color:"#FFF" ,paddingLeft:"17px",paddingRight:"10px"}}/>Font End</h2>
                        <p style={{paddingLeft:"47px"}}>
                        I develop web applications the front end using the following tools and languages.     
                        </p>

                        <p style={{paddingLeft:"47px"}}>
                        REACT JS , JAVA Script , HTML5 and CSS.
                        </p>
                        <p style={{paddingLeft:"47px"}}>
                        
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
                            fontSize: { xs: "10px", md: "10px",lg:"15px" },
                            width: { xs: "80%", md: "60%" },
                            padding: "10px 20px",
                            color: "#FFF",
                        }}
                    >
                        <h2><IntegrationInstructionsIcon style={{color:"#FFF" ,paddingLeft:"17px",paddingRight:"10px"}}/>Back End</h2>
                        <p style={{paddingLeft:"47px"}}>
                        I develop a web application using an API to work as a back end.
                        </p>
                        <p style={{paddingLeft:"47px"}}>
                        C# .NET CORE ,
                         My SQL and Docker
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
