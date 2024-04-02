import { Button, Stack, Typography, styled } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Colors from "../Components/Colors";
import routes from "../routes/routes";
import AppContainer from "./AppContainer";
import CustomButton from "../Components/CustomButton";
import LoginForm from "../Login/LoginForm";
import { useState } from "react";


export default function AppHeader() {
    const [modalOpen, setModalOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setModalOpen(true);
    }

    const handleUserClick = () => {
        setOpen(true);

    }

    const handleClose = () => {
        setModalOpen(false);
        navigate(routes.INTERACTIVE);
    }
    const ModalClose = () => {
        setOpen(false);
        navigate(routes.INTERACTIVE);
    }

    return (
        <AppContainer>
            <Stack direction="row" alignItems="center" justifyContent="space-between" paddingY={4}>
                <Typography variant="h4" fontWeight={600}>Welcome!</Typography>
                <Stack
                    direction={"row"}
                    spacing={3}
                    alignItems="center"
                >
                    <CustomButton
                        sx={{
                            padding: "10px 20px",
                            textTransform: "none",
                            fontSize: "20px",

                        }}
                        onClick={handleClick}
                    >
                        Admin Login
                    </CustomButton>
                    <CustomButton sx={{ padding: "10px 20px", textTransform: "none", fontSize: "20px", }} onClick={handleUserClick}>
                        User Login
                    </CustomButton>
                </Stack>
            </Stack>
            <LoginForm open={modalOpen} handleClose={handleClose} label="Admin Login" />
            <LoginForm open={open} handleClose={ModalClose} label="User Login" />
        </AppContainer>
    )
}