package org.server.category;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import org.server.shopitem.ShopItemDto;

import java.util.List;

@Data
public class CategoryDto {
    private Long id;

    @NotBlank
    private String name;

    @NotNull
    private List<ShopItemDto> items;
}
