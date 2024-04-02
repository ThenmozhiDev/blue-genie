import React, { useEffect, useState } from "react";
import {
    Box,
    Button,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AppContainer from "../Dashboard/AppContainer";
interface Link {
    id: number;
    url: string;
}
const LinkPage: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>("");
    const [links, setLinks] = useState<Link[]>([]);
    const [linkData, setLinkData] = useState<Link[]>([
        { id: 1, url: "https://www.calculator.net/finance-calculator.html" },
        { id: 2, url: "https://www.bankbazaar.com/calculators.html" },
        { id: 3, url: "https://groww.in/calculators/emi-calculator" },
    ]);

    const localData = localStorage.getItem("LoginData");
    const userData = localData && JSON.parse(localData);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };
    const handleSubmit = () => {
        if (inputValue.trim() !== "") {
            setLinks([...links, { id: Date.now(), url: inputValue }]);
            setInputValue("");
        }
    };
    const handleLinkClick = (url: string) => {
        window.open(url, "_blank");
    };
    const handleDeleteLink = (id: number) => {
        const updatedLinks = links.filter((link) => link.id !== id);
        setLinks(updatedLinks);
    };

    return (
        <AppContainer>
            {userData.role === "admin" ? (
                <Stack direction="column" spacing={4} paddingY={5}>
                    <Box>
                        <Typography variant="h4" gutterBottom>
                            Add Links
                        </Typography>
                        <Divider />
                    </Box>
                    <TextField
                        label="Enter URL"
                        value={inputValue}
                        onChange={handleChange}
                        sx={{ width: "600px" }}
                        variant="outlined"
                        margin="normal"
                    />
                    <Button
                        variant="contained"
                        onClick={handleSubmit}
                        sx={{ width: "200px" }}
                    >
                        Submit
                    </Button>
                    <List>
                        {links.map((link) => (
                            <ListItem
                                key={link.id}
                                button
                                onClick={() => handleLinkClick(link.url)}
                                sx={{
                                    marginBottom: "30px",
                                    boxShadow:
                                        "0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)",
                                }}
                            >
                                <ListItemText primary={link.url} />
                                <ListItemSecondaryAction>
                                    <IconButton
                                        edge="end"
                                        aria-label="delete"
                                        onClick={() => handleDeleteLink(link.id)}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                    </List>{" "}
                </Stack>
            ) : (
                <Stack direction="column" spacing={4} paddingY={5}>
                    <Typography variant="h4" gutterBottom>
                        Added Link List
                    </Typography>
                    <List>
                        {linkData.map((link) => (
                            <ListItem
                                key={link.id}
                                button
                                onClick={() => handleLinkClick(link.url)}
                                sx={{
                                    marginBottom: "30px",
                                    boxShadow:
                                        "0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)",
                                }}
                            >
                                <ListItemText primary={link.url} />
                            </ListItem>
                        ))}
                    </List>
                </Stack>
            )}
        </AppContainer>
    );
};
export default LinkPage;
