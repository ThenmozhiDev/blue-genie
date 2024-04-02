import { Stack, StackProps } from "@mui/material";

export default function AppContainer(props: StackProps) {
    return (
        <Stack
            direction="column"
            spacing={4}
            width="100%"
            alignItems="stretch"
            maxWidth={1200}
            mx="auto"
            px={4}
            // px={{ xs: 2, sm: 3, md: 5 }}
            {...props}
        />
    );
}
