import { Box, Stack, Typography } from "@mui/material";
import background from "../assets/Home.jpg";
import CustomButton from "../Components/CustomButton";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";


export default function FullWidthPage() {
    return (
        <>
            <AppHeader />
            <Box>
                <img
                    src={background}
                    width={"100%"}
                    height={"100%"}
                    alt="background"
                ></img>
                <Stack direction="column" spacing={5} alignItems={"center"} sx={{
                    position: "absolute",
                    top: "60%",
                    left: "20%",
                }}>
                    <Typography variant="h2" fontWeight={600}>Take charge of your Financial Future</Typography>
                    <Typography variant="h6">We all work hard for money, is your money working hard for you ? Or is it hardly working?
                    </Typography>
                    <CustomButton sx={{ padding: "15px 20px", textTransform: "capitalize" }}>Learn More</CustomButton>
                </Stack>
            </Box>
            <AppFooter />
        </>
    );
}
