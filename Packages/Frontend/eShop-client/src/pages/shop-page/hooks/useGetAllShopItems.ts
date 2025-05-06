import {useQuery} from "@tanstack/react-query";
import type {ShopItem} from "../types.ts";

export const useGetAllShopItems = () => {
    return useQuery<ShopItem[]>({
        queryKey: ['shopItems'],
        queryFn: () =>
            fetch('http://localhost:8080/api/items').then(res => res.json()),
    });
}