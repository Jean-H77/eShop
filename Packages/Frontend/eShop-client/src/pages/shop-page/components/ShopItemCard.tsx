import type { ShopItem } from "../types.ts";
import {Card, CardActions, CardContent, CardMedia, IconButton, TextField, Typography} from "@mui/material";
import {AddShoppingCart, RemoveShoppingCart} from "@mui/icons-material";

interface ShopItemCardProps {
    shopItem: ShopItem;
}

function ShopItemCard ({ shopItem }: ShopItemCardProps) {
    return (
        <Card sx={{ maxWidth: 250, boxShadow: 3 }}>
            <CardMedia
                sx={{ height: 150 }}
                image={shopItem.thumbnailUrl}
                title={shopItem.name} />
            <CardContent>
                <Typography gutterBottom variant="subtitle1" component="div">
                    {shopItem.name}
                </Typography>
                <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                    {shopItem.price}
                </Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton color="primary" aria-label="delete from shopping cart">
                    <RemoveShoppingCart />
                </IconButton>
                <TextField
                    label="Quantity"
                    id="standard-size-small"
                    size="small"
                    variant="standard"
                    type="text"
                    inputProps={{
                        style: { textAlign: 'center' },
                        inputMode: 'numeric',
                        pattern: '[0-9]*',
                        maxLength: 3,
                    }}
                    onKeyDown={(e) => {
                        if (!/^\d$/.test(e.key) && !['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete'].includes(e.key)) {
                            e.preventDefault();
                        }
                    }}
                />
                <IconButton color="primary" aria-label="add to shopping cart">
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default ShopItemCard;