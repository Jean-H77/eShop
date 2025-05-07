import React from "react";

export interface ShopItem {
    id: number;
    name: string;
    price: number;
    thumbnailUrl: string;
}

export interface CategoryContextType {
    category: number;
    setCategory: React.Dispatch<React.SetStateAction<number>>;
}

