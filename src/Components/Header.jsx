import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyle = makeStyles({
    container:{
        backgroundColor: "#002984",
        padding:"10px",
        borderRadius:"10px",
        color:"#fff"

    },

})

function Header(props) {
    const classes = useStyle()
    return (
        <Container maxWidth='xs' className={classes.container}>
            <Box>
               <Typography variant="h5" className="text"> Total Car List</Typography>
            </Box>
        </Container>
    );
}

export default Header;