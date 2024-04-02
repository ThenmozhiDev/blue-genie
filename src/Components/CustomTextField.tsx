import { Box, InputAdornment, TextField, TextFieldProps } from "@mui/material";
import {
    ChangeEvent,
    ReactNode,
    useCallback,
    useEffect,
    useMemo,
    useRef,
} from "react";
import CustomLabel from "./CustomLabel";

interface InternalCustomTextFieldProps {
    onChange?: (value: string) => void;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    label?: string;
}

export type CustomTextFieldProps = InternalCustomTextFieldProps &
    Omit<TextFieldProps, "onChange">;

export default function CustomTextField({
    onChange,
    startIcon,
    endIcon,
    autoFocus,
    label,
    fullWidth = true,
    required = true,
    ...props
}: CustomTextFieldProps) {
    const inputRef = useRef<HTMLDivElement>(null);

    // Workaround due to https://github.com/mui/material-ui/issues/33004
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (autoFocus && inputRef.current) {
                inputRef.current.focus();
            }
        }, 0);

        return () => clearTimeout(timeout);
    }, [autoFocus, inputRef]);

    const onTextChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            onChange?.(e.target.value);
        },
        [onChange]
    );

    const InputProps = useMemo(
        () => ({
            ...props.InputProps,
            startAdornment: startIcon ? (
                <InputAdornment position="start">{startIcon}</InputAdornment>
            ) : (
                props.InputProps?.startAdornment
            ),
            endAdornment: endIcon ? (
                <InputAdornment position="end">{endIcon}</InputAdornment>
            ) : (
                props.InputProps?.endAdornment
            ),
        }),
        [startIcon, endIcon, props.InputProps]
    );

    return (
        <Box width={fullWidth ? "100%" : "auto"}>
            <CustomLabel label={label} required={required} />
            <TextField
                required={required}
                {...props}
                fullWidth={fullWidth}
                inputRef={inputRef}
                value={props.value ?? ""}
                type={props.type ?? "text"}
                InputProps={InputProps}
                onChange={onTextChange}
            />
        </Box>
    );
}
