import {
    Box,
    Button,
    Dialog,
    DialogContent,
    Divider,
    IconButton,
    InputAdornment,
    Link,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Colors from "../Components/Colors";
import CustomLabel from "../Components/CustomLabel";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CustomButton from "../Components/CustomButton";


interface loginProps {
    handleClose?: () => void;
    open: any;
    label: string;
}

export default function Form({ handleClose, open, label }: loginProps) {
    const [email, setEmail] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [password, setPassword] = useState("");
    const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleEmailChange = (event: any) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
        setIsValidEmail(false);
    };


    const validateEmail = (input: any) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(input);
        return isValid;
    };

    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value);
        setIsPasswordValid(false);
    };

    const onSubmit = async (event: any) => {
        event.preventDefault();
        if (!email) {
            setIsValidEmail(true);
            return;
        }

        if (!validateEmail(email)) {
            setIsValidEmail(true);
            return;
        }

        if (!password) {
            setIsPasswordValid(true);
            return;
        }

        if (password.length < 8) {
            setIsPasswordValid(true);
            return;
        }
        const data = {
            email: email,
            password: password,
            role: label === "Admin Login" ? "admin" : "user",
        };
        if (email && password) {
            console.log("data", data);
            localStorage.setItem("LoginData", JSON.stringify(data));
            handleClose?.();
            // try {
            //   const response = await UserLoginApi.loginUser({
            //     email: data.email,
            //     password: data.password,
            //   });
            //   if (response) {
            //     localStorage.setItem("user", JSON.stringify(response));
            //     setEmail("");
            //     setPassword("");
            //     setIsValidEmail(false);
            //     setIsPasswordValid(false);
            //     //navigate(routes.BOOKING_SERVICE);
            //     navigate(0);
            //     handleClose?.();
            //     setShowPassword(false);
            //   }
            // } catch (err: any) {
            //  console.log("fff");
            // }
        }
    };

    const ModlaCloseChange = () => {
        handleClose?.();
        setEmail("");
        setPassword("");
        setIsValidEmail(false);
        setIsPasswordValid(false);
        setShowPassword(false);
    };


    return (
        <>
            <Dialog
                open={open}
                maxWidth="xs"
                fullWidth
                sx={{
                    borderRadius: "42px !important",
                    "& .MuiDialog-paper": {
                        borderRadius: "42px !important",
                    },
                }}
            >
                <DialogContent
                    style={{
                        background: Colors.WHITE,
                    }}
                >
                    <Stack direction="row" alignItems="center" justifyContent="space-between" paddingY={2.2}>
                        <Typography variant="h4" fontWeight={600}>{label}</Typography>
                        <IconButton onClick={ModlaCloseChange}>
                            <CloseIcon sx={{ color: Colors.BLACK, fontSize: "30px" }} />
                        </IconButton>
                    </Stack>

                    <Stack direction="column" spacing={3} padding={2} marginY={3}>
                        <Box>
                            <CustomLabel color={Colors.BLACK} mb={1}>
                                Email
                            </CustomLabel>
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                sx={{
                                    backgroundColor: Colors.WHITE,
                                    width: "100%",
                                    borderRadius: "8px",
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "8px",
                                    },
                                }}
                                placeholder="Enter your email"
                                type="email"
                                required
                                value={email}
                                onChange={handleEmailChange}
                                error={!!isValidEmail}
                                InputProps={{
                                    endAdornment: isValidEmail && (
                                        <ErrorOutlineIcon
                                            color="error"
                                            style={{ marginRight: "8px" }}
                                        />
                                    ),
                                }}
                            />
                            <span style={{ color: "#d32f2f", fontSize: "12px" }}>
                                {isValidEmail ? "Please enter a valid email address" : ""}
                            </span>
                        </Box>
                        <Box>
                            <CustomLabel color={Colors.BLACK} mb={1}>
                                Password
                            </CustomLabel>
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                sx={{
                                    backgroundColor: Colors.WHITE,
                                    width: "100%",
                                    borderRadius: "8px",
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "8px",
                                    },
                                }}
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                onChange={handlePasswordChange}
                                value={password}
                                required
                                error={!!isPasswordValid}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>

                                            {isPasswordValid && (
                                                <ErrorOutlineIcon
                                                    sx={{ ml: "5px" }}
                                                    color="error"
                                                    style={{ marginRight: "8px" }}
                                                />
                                            )}
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <span style={{ color: "#d32f2f", fontSize: "12px" }}>
                                {isPasswordValid ? "Please enter a valid password" : ""}
                            </span>
                        </Box>
                        <Typography
                            //onClick={ForgetpOnClickChange}
                            sx={{
                                color: Colors.BLACK,
                                textDecoration: "underline",
                                textAlign: "end",
                                cursor: "pointer",
                            }}
                        >
                            Forgot Password?
                        </Typography>
                        <CustomButton
                            sx={{ padding: "15px 20px" }}
                            onClick={onSubmit}
                        >
                            Login
                        </CustomButton>

                    </Stack>

                </DialogContent>
            </Dialog>
        </>
    );
}
