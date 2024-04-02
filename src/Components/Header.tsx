import { CardMedia, Stack } from "@mui/material";

import Image from "../assets/Login-image.jpg";

export default function Header() {
    return (
        <Stack
            direction="row"
            margin="auto"
            spacing={3}
            justifyContent="center"
            alignItems="center"
            width="100%"
            maxWidth="1200px"
        >
            <CardMedia
                component="img"
                image={Image}
                alt="logo"
                sx={{ width: { xs: "50%", sm: "50%", md: "50%", xl: "20%" } }}
                height="15%"
            />
        </Stack>
    );
}
