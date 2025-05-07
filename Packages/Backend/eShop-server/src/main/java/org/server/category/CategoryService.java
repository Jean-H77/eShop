package org.server.category;

import lombok.RequiredArgsConstructor;
import org.server.category.exception.CategoryNotFoundException;
import org.server.shopitem.ShopItemDto;
import org.server.shopitem.ShopItemMapper;
import org.server.shopitem.exception.ShopItemNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryService {

    private final CategoryRepository categoryRepository;

    private final ShopItemMapper shopItemMapper;
    private final CategoryMapper categoryMapper;

    public List<CategoryNameIdDto> getAllCategoryNameId() {
        return categoryRepository.findAllCategoryNameId();
    }

    public CategoryDto findById(Long id) {
        return categoryRepository.findById(id)
                .map(categoryMapper::toDto)
                .orElseThrow(() -> new CategoryNotFoundException(id));
    }

    public List<ShopItemDto> getShopItemsByCategoryId(Long id) {
        return categoryRepository.findItemsByCategoryId(id)
                .stream()
                .map(shopItemMapper::toDto)
                .toList();
    }

    public CategoryDto save(CategoryDto categoryDto) {
        var toSave = categoryMapper.toCategory(categoryDto);
        categoryRepository.save(toSave);

        return categoryMapper.toDto(toSave);
    }
}
