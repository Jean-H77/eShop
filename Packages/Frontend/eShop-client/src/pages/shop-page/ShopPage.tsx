import ShopItemCategoryMenu from "./components/ShopItemCategoryMenu.tsx";
import {Box} from "@mui/material";
import ShopItemList from "./components/ShopItemList.tsx";
import {createContext, useContext, useState} from "react";
import type {CategoryContextType} from "./types.ts";

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
        <div style={{ width: '100%' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', p: 1, borderRadius: 1 }}>
                <CategoryContext.Provider value={{ category, setCategory }}>
                    <Box>
                        <ShopItemCategoryMenu />
                    </Box>
                    <Box sx={{ mt: 2 }}>
                        <ShopItemList />
                    </Box>
                </CategoryContext.Provider>
            </Box>
        </div>
    );
}

