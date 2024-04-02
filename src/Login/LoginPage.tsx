import { Divider, Grid, Stack, Typography } from "@mui/material";
import background from "../assets/Image-2.jpg";
import LoginForm from "./LoginForm";
import Header from "../Components/Header";

export default function SignUpPage() {
  return (
    <>
      {/* <Header /> */}
      <Grid
        //minHeight="100vh"
        container
        width="100%"
        // maxWidth="1200px"
        margin="auto"
        alignItems="center"
        sx={{ background: "#1D866B" }}
        padding={12}
        spacing={5}
      >
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Stack direction="column" spacing={4}>
            <Divider orientation="vertical" variant="middle" color="#fff" sx={{ height: 5, width: '120px' }} />
            <Typography variant="h1" color="#fff">Simple Your Financial In Future</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={5}>
          {/* <LoginForm /> */}
        </Grid>
      </Grid>
    </>
  );
}
