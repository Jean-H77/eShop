import {useQuery} from "@tanstack/react-query";
import type {ShopItem} from "../types.ts";

const BASE_URL = "http://localhost:8080";

export const useGetAllShopItems = () => {
    return useQuery<ShopItem[]>({
        queryKey: ['shopItems'],
        queryFn: () =>
            fetch(`${BASE_URL}/api/items`).then(res => res.json()),
    });
}