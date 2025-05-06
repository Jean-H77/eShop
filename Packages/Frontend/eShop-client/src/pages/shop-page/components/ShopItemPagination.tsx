import React from "react";
import {Pagination} from "@mui/material";

const ShopItemPagination: React.FC = () => {
    return (
        <Pagination count={10} variant="outlined" size="large" />
    );
};

export default ShopItemPagination;