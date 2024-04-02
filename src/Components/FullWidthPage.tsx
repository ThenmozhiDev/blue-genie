import { Box, BoxProps } from "@mui/material";

export default function FullWidthPage({ children, ...props }: BoxProps) {
  return (
    <Box {...props} minHeight="100vh">
      {children}
    </Box>
  );
}
