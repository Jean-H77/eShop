import {Grid} from "@mui/material";
import {useCategoryContext} from "../ShopPage.tsx";
import {useGetShopItemsByPageCategory} from "../hooks/useGetShopItemsByPageCategory.ts";
import ShopItemCard from "./ShopItemCard.tsx";


function ShopItemList(){

    const { category } = useCategoryContext();
    const {  data: items = [], isLoading, error  } = useGetShopItemsByPageCategory({ id: category });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading items.</div>;

    return (
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {items.map((item) => (
                <Grid key={item.id}>
                    <ShopItemCard shopItem={item}/>
                </Grid>
            ))}
        </Grid>
    );
}


export default ShopItemList;