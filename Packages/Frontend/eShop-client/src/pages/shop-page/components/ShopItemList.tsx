import React from 'react';
import type {ShopItem} from "../types.ts";
import ShopItemCard from "./ShopItemCard.tsx";
import {Grid} from "@mui/material";

type ShopItemListProps = {
    items: ShopItem[];
};


const ShopItemList: React.FC<ShopItemListProps> = ({ items }) => {
    return (
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {items.map((item) => (
                <Grid key={item.id}>
                    <ShopItemCard shopItem={item}/>
                </Grid>
            ))}
        </Grid>
    );
};


export default ShopItemList;