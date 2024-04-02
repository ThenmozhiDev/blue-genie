import React, { useState } from 'react';
import {
    Box,
    Button,
    Divider,
    Grid,
    IconButton,
    ListItem,
    ListItemText,
    Paper,
    Stack,
    TextField,
    Typography
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AppContainer from '../Dashboard/AppContainer';
import { List } from '@mui/material';


interface MessageProps {
    content: string;
    onDelete: () => void;
}

const ListMessage = [
    { text: 'Hello!', isSent: true },
    { text: 'Hi there!', isSent: false },
    { text: 'How are you?', isSent: true },
    { text: 'I am doing well, thank you!', isSent: false }
];

const Message: React.FC<MessageProps> = ({ content, onDelete }) => {
    return (
        <Grid container wrap="nowrap" spacing={2}>
            <Grid item md={12}>
                <Paper
                    elevation={3}
                    sx={{
                        padding: 10,
                        marginBottom: "15px",
                        py: 1,
                        px: 2,
                        maxWidth: '70%',
                        bgcolor: !content ? 'primary.main' : 'background.paper',
                        color: !content ? 'primary.contrastText' : 'text.primary',
                        borderRadius: !content ? '10px 0 10px 10px' : '0 10px 10px 10px'
                    }}
                >
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Typography variant="body1">{content}</Typography>
                        <IconButton onClick={onDelete}>
                            <DeleteIcon />
                        </IconButton>
                    </Stack>
                </Paper>
            </Grid>
        </Grid>
    );
};


interface message {
    messages: any;
}


const MessageList = ({ messages }: message) => {
    return (
        <List>
            {messages.map((message: { text: any; isSent: any; }, index: React.Key | null | undefined) => (
                <MessageText key={index} text={message.text} isSent={message.isSent} />
            ))}
        </List>
    );
};


interface MessageTextProps {
    text: string;
    isSent: boolean;
}

const MessageText: React.FC<MessageTextProps> = ({ text, isSent }) => {
    return (
        <ListItem sx={{ justifyContent: isSent ? 'flex-end' : 'flex-start' }}>
            <ListItemText>
                <Paper
                    elevation={3}
                    sx={{
                        py: 1,
                        px: 2,
                        maxWidth: '70%',
                        bgcolor: isSent ? 'primary.main' : 'background.paper',
                        color: isSent ? 'primary.contrastText' : 'text.primary',
                        borderRadius: isSent ? '10px 0 10px 10px' : '0 10px 10px 10px'
                    }}
                >
                    <Typography variant="body1">{text}</Typography>
                </Paper>
            </ListItemText>
        </ListItem>
    );
};


const ConversationPage: React.FC = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>('');

    const localData = localStorage.getItem('LoginData');
    const userData = localData && JSON.parse(localData);

    const handleMessageSubmit = () => {
        if (inputValue.trim() !== '') {
            setMessages([...messages, inputValue.trim()]);
            setInputValue('');
        }
    };

    const handleDeleteMessage = (index: number) => {
        const updatedMessages = [...messages];
        updatedMessages.splice(index, 1);
        setMessages(updatedMessages);
    };

    return (
        <AppContainer>
            {userData.role === 'admin' ?
                <Stack direction="column" spacing={4} paddingY={5}>
                    <Box>
                        <Typography variant="h4" gutterBottom>
                            Message Conversations
                        </Typography>
                        <Divider />
                    </Box>
                    <div style={{ marginTop: 20 }}>
                        {messages.map((message, index) => (
                            <Message
                                key={index}
                                content={message}
                                onDelete={() => handleDeleteMessage(index)}
                            />
                        ))}
                    </div>

                    <TextField
                        label="Type your message"
                        variant="outlined"

                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        sx={{ width: "600px" }}

                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleMessageSubmit}
                        sx={{ width: "200px" }}
                    >
                        Submit
                    </Button>
                </Stack> : <Stack direction="column" spacing={4} paddingY={5}>
                    <h1>Message Conversation</h1>
                    <MessageList messages={ListMessage} />
                </Stack>
            }
        </AppContainer>
    );
};

export default ConversationPage;
