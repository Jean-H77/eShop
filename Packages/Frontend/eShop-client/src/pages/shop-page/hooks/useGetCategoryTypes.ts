import {useQuery} from "@tanstack/react-query";

const BASE_URL = "http://localhost:8080/api/category";

export interface CategoryType {
    id: number;
    name: string;
}

export const useGetCategoryTypes = () => {
    return useQuery<CategoryType[]>({
       queryKey: ['categoryTypes'],
       queryFn: () =>
           fetch(`${BASE_URL}`).then(res => res.json())
    });
}