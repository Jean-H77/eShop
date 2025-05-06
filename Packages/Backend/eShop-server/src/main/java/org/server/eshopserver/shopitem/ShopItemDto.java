package org.server.eshopserver.shopitem;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import lombok.Data;

@Data
public class ShopItemDto {
    private long id;
    @NotBlank
    private String name;
    @Positive
    private double price;
    private String thumbnailUrl;
}
