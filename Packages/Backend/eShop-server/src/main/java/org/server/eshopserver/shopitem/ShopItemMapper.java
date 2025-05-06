package org.server.eshopserver.shopitem;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface ShopItemMapper {
    ShopItemDto toDto(ShopItem shopItem);

    @Mapping(source = "thumbnailUrl", target = "thumbnailUrl") // needed even though they're the same name
    ShopItem fromDto(ShopItemDto shopItemDto);
}
