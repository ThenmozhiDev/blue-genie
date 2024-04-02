import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { NavLink, useNavigate } from 'react-router-dom';
import { Stack, styled } from '@mui/material';
import CustomButton from '../Components/CustomButton';
import routes from '../routes/routes';
import Colors from '../Components/Colors';
import AppContainer from './AppContainer';

const StyledButton = styled(CustomButton)(({ theme }) => ({
    padding: theme.spacing(1),
    margin: theme.spacing(0, 3),
    fontWeight: "inherit",
    color: "inherit",
    minWidth: "unset",
    textTransform: 'capitalize',
    fontSize: "20px"
}));

const MenuList = [
    { name: "Interactive Questions", url: routes.INTERACTIVE },
    { name: "Default Questions", url: routes.DEFAULT },
    { name: "Appointment", url: routes.APPOINTMENT },
    { name: "Link", url: routes.LINK },
    { name: "Conversation", url: routes.CONVERSATION },
];
const activeStyle: React.CSSProperties = {
    fontWeight: "bold",
    color: "#1976d2",
};

const defaultStyle: React.CSSProperties = {
    fontWeight: 500,
    color: Colors.WHITE
};

function SubHeader() {
    const navigate = useNavigate();

    const handleClick = () => {
        localStorage.removeItem("LoginData");
        navigate(routes.ROOT)
    }
    return (
        <Box sx={{ background: Colors.BLACK }} paddingX={18} paddingY={4}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" >
                <Stack direction="row" marginX={-4} flexWrap="wrap" >
                    {MenuList.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.url}
                            style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
                        >
                            {item.name !== "Logout" && (
                                <StyledButton variant="text">{item.name}</StyledButton>
                            )}
                        </NavLink>
                    ))}
                </Stack>
                <CustomButton bgColor='#1976d2' onClick={handleClick} sx={{ borderRadius: '5px' }}>Logout</CustomButton>
            </Stack>
        </Box>
    );
}
export default SubHeader;