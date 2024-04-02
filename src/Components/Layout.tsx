import { BoxProps } from "@mui/material";
import FullWidthPage from "./FullWidthPage";

export default function Layout({ children, ...props }: BoxProps) {
    return <FullWidthPage {...props}>{children}</FullWidthPage>;
}
