import React from 'react';
import { Menu, MenuItem } from '@mui/material';

export const CardMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Menu open={open} anchorEl={anchorEl}>
            <MenuItem />
        </Menu>
    )
}