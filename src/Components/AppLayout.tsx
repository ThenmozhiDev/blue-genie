

import { Box, BoxProps } from "@mui/material";
import { Outlet } from "react-router-dom";
import Layout from "./Layout";
import AppHeader from "../Dashboard/AppHeader";
import AppFooter from "../Dashboard/AppFooter";
import SubHeader from "../Dashboard/SubHeader";

export default function AppLayout({ children, ...props }: BoxProps) {
    return (
        <Layout {...props}>
            <SubHeader />
            <Box display="flex" flexDirection="column" width="100%" flexGrow={1}>
                <Box display="flex" flexDirection="column" flexGrow={1}>
                    <Box display="flex" flexDirection="column" flexGrow={1}>
                        <Outlet />
                    </Box>
                    <AppFooter />
                </Box>
            </Box>
        </Layout>
    );
}
