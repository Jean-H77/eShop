import {useContext} from "react";

import {CategoryContext} from "./CategoryContext.tsx";

export function useCategoryContext() {
    const context = useContext(CategoryContext);
    if (!context) {
        throw new Error('usePageContext must be used within a PageContext.Provider');
    }
    return context;
}