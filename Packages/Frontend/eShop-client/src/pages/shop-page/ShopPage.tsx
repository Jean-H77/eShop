import {useGetAllShopItems} from "./hooks/useGetAllShopItems.ts";
import ShopItemList from "./components/ShopItemList.tsx";
import ShopItemCategoryMenu from "./components/ShopItemCategoryMenu.tsx";
import {Box, Grid} from "@mui/material";
import ShopItemPagination from "./components/ShopItemPagination.tsx";

export default function ShopPage() {
    const {data} = useGetAllShopItems();

    return (
        <Box sx={{p: 2}}>
            <Grid container spacing={2}>
                <Grid>
                    <ShopItemCategoryMenu />
                </Grid>
                <Grid>
                    <ShopItemList items={data ?? []} />
                </Grid>
                <Grid>
                    <ShopItemPagination />
                </Grid>
            </Grid>
        </Box>
    );
}

