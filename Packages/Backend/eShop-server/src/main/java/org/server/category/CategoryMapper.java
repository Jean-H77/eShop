package org.server.category;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface CategoryMapper {

    @Mapping(target = "name", source = "name")
    @Mapping(target = "items", source = "items")
    CategoryDto toDto(Category category);

    Category toCategory(CategoryDto dto);
}
