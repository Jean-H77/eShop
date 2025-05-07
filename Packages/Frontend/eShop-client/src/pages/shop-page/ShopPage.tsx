import ShopItemCategoryMenu from "./components/ShopItemCategoryMenu.tsx";
import {Box} from "@mui/material";
import ShopItemList from "./components/ShopItemList.tsx";
import {createContext, useContext, useState} from "react";
import type {CategoryContextType} from "./types.ts";
import ShoppingCartCard from "./components/ShoppingCartCard.tsx";

export const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export function useCategoryContext() {
    const context = useContext(CategoryContext);
    if (!context) {
        throw new Error('usePageContext must be used within a PageContext.Provider');
    }
    return context;
}

export default function ShopPage() {
    const [category, setCategory] = useState<number>(1);

    return (
        <Box sx={{ display: 'flex', p: 1, borderRadius: 1, width: '100%' }}>
            <CategoryContext.Provider value={{ category, setCategory }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flexGrow: 1 }}>
                    <ShopItemCategoryMenu />
                    <ShopItemList />
                </Box>
                <Box
                    sx={{
                        position: 'fixed',
                        top: 32,
                        right: 32,
                        zIndex: 1300,
                    }}
                >
                    <ShoppingCartCard />
                </Box>
            </CategoryContext.Provider>
        </Box>
    );
}

