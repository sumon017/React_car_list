import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyle = makeStyles({
    container:{
        display:"flex",
        alignItems:"center",
        backgroundColor: "#002984",
        padding:"20px",
        borderRadius:"10px",
        color:"#fff",

    },

})

function Footer(props) {
    const classes = useStyle()
    return (
        <Container maxWidth='xs' className={classes.container}>

        </Container>
    );
}

export default Footer;