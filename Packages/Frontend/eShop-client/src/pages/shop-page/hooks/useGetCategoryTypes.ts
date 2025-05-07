import {useQuery} from "@tanstack/react-query";
import type {CategoryType} from "../types.ts";

const BASE_URL = "http://localhost:8080/api/category";

export const useGetCategoryTypes = () => {
    return useQuery<CategoryType[]>({
       queryKey: ['categoryTypes'],
       queryFn: () =>
           fetch(`${BASE_URL}`).then(res => res.json())
    });
}