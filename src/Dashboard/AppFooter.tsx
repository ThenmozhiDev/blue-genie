import { Box, IconButton, Stack, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";
import Colors from "../Components/Colors";
import routes from "../routes/routes";
import AppContainer from "./AppContainer";
import CustomButton from "../Components/CustomButton";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function AppFooter() {
    return (
        <Box sx={{ backgroundColor: "#000", padding: "40px 50px", }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Typography color="#fff">© 2021 BlueGenieSolutions. All Rights Reserved</Typography>
                <Stack
                    direction={"row"}
                    spacing={3}
                    alignItems="center"
                >
                    <IconButton><FacebookIcon sx={{ color: "#fff", fontSize: "35px" }} /></IconButton>
                    <IconButton><InstagramIcon sx={{ color: "#fff", fontSize: "35px" }} /></IconButton>
                </Stack>
            </Stack>
        </Box>
    )
}