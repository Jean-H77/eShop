package org.server.shopitem;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface ShopItemMapper {
    @Mapping(target = "name", source = "name")
    @Mapping(target = "price", source = "price")
    @Mapping(target = "thumbnailUrl", source = "thumbnailUrl")
    ShopItemDto toDto(ShopItem shopItem);

    ShopItem fromDto(ShopItemDto shopItemDto);
}
