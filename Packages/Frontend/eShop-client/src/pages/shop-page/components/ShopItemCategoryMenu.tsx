import Tab from '@mui/material/Tab';
import {Box, Tabs, Typography} from "@mui/material";
import React from "react";
import {useGetCategoryTypes} from "../hooks/useGetCategoryTypes.ts";
import {useCategoryContext} from "../ShopPage.tsx";

function ShopItemCategoryMenu(){
    const { data: categoryTypes } = useGetCategoryTypes();
    const { category, setCategory } = useCategoryContext();

    const currentTabIndex = categoryTypes?.findIndex(c => c.id === category) ?? 0;

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        const selectedCategory = categoryTypes?.[newValue].id;
        if (selectedCategory) {
            setCategory(selectedCategory);
        }
    };

    if (!categoryTypes || categoryTypes.length === 0) {
        return <Typography>Loading categories...</Typography>;
    }

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ flexGrow: 1 }}>
                <Tabs
                    value={currentTabIndex}
                    variant="scrollable"
                    onChange={handleChange}
                    sx={{ flexGrow: 1 }}
                >
                    {categoryTypes?.map((item) => (
                        <Tab key={item.id} label={item.name} />
                    ))}
                </Tabs>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    bgcolor: 'background.paper',
                    borderRadius: 2,
                    boxShadow: 1,
                    pl: 1.1,
                }}
            >
            </Box>
        </Box>
    );
}

export default ShopItemCategoryMenu;