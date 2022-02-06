// import Grid from "@mui/material/Grid";
// import React from "react";
// import "../css/Testflex.css";

// function Testflex() {
//     return (
//         <div>
//             <Grid container display="flex" justifyContent="flexStart" spacing={2}>
//                 <Grid item xs={4} sm={6} md={4}>
//                     <Grid className="content">
//                         <h1>Ege 1</h1>
//                         <h1>Content....</h1>
//                     </Grid>
//                 </Grid>
//             </Grid>
//         </div>
//     );
// }

// export default Testflex;

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Types() {
    return (
        <div>
            
            
            <Typography variant="h2" gutterBottom component="div">
                h2. Heading
            </Typography>
            <Typography variant="h3" gutterBottom component="div">
                h3. Heading
            </Typography>
        </div>

        // <Box sx={{ width: '100%', maxWidth: 500 }}>
        //   <Typography variant="h1" component="div" gutterBottom>
        //     h1. Heading
        //   </Typography>
        //   <Typography variant="h2" gutterBottom component="div">
        //     h2. Heading
        //   </Typography>
        //   <Typography variant="h3" gutterBottom component="div">
        //     h3. Heading
        //   </Typography>
        //   <Typography variant="h4" gutterBottom component="div">
        //     h4. Heading
        //   </Typography>
        //   <Typography variant="h5" gutterBottom component="div">
        //     h5. Heading
        //   </Typography>
        //   <Typography variant="h6" gutterBottom component="div">
        //     h6. Heading
        //   </Typography>
        //   <Typography variant="subtitle1" gutterBottom component="div">
        //     subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        //     blanditiis tenetur
        //   </Typography>
        //   <Typography variant="subtitle2" gutterBottom component="div">
        //     subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        //     blanditiis tenetur
        //   </Typography>
        //   <Typography variant="body1" gutterBottom>
        //     body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        //     blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        //     neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        //     quasi quidem quibusdam.
        //   </Typography>
        //   <Typography variant="body2" gutterBottom>
        //     body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        //     blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        //     neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        //     quasi quidem quibusdam.
        //   </Typography>
        //   <Typography variant="button" display="block" gutterBottom>
        //     button text
        //   </Typography>
        //   <Typography variant="caption" display="block" gutterBottom>
        //     caption text
        //   </Typography>
        //   <Typography variant="overline" display="block" gutterBottom>
        //     overline text
        //   </Typography>
        // </Box>
    );
}
