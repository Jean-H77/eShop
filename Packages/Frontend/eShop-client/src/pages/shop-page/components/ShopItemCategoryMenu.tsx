import Tab from '@mui/material/Tab';
import {Grid, IconButton, Tabs} from "@mui/material";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

const ShopItemCategoryMenu = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Grid container>
            <Grid size={9}>
                <Tabs
                    value={value}
                    variant="scrollable"
                    onChange={handleChange}>
                    <Tab label="Category One"/>
                    <Tab label="Category Two"/>
                    <Tab label="Category Three"/>
                    <Tab label="Category Four"/>
                    <Tab label="Category Five"/>
                </Tabs>
            </Grid>
            <Grid size={3}>
                <InputBase
                    sx={{
                        ml: 1,
                        flex: 1,
                        bgcolor: 'background.paper',
                        borderRadius: 2,
                        boxShadow: 1,
                        pl: 1.1,
                    }}
                    placeholder="Search"
                    inputProps={{'aria-label': 'search'}}/>
                <IconButton type="button" sx={{p: '10px'}} aria-label="search">
                    <SearchIcon/>
                </IconButton>
            </Grid>
        </Grid>
    )
}

export default ShopItemCategoryMenu;