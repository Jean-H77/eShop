import {useQuery} from "@tanstack/react-query";
import type {ShopItem} from "../types.ts";

const BASE_URL = "http://localhost:8080/api/category";

type ShopItemCategoryParams = {
    id: number;
};

export const useGetShopItemsByPageCategory = ( { id } : ShopItemCategoryParams) => {
    return useQuery<ShopItem[]>({
        queryKey: [`shopItems_${id}`],
        queryFn: () =>
            fetch(`${BASE_URL}/${id}/items`).then(res => res.json()),
    });
}

