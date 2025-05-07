package org.server.category;

import lombok.RequiredArgsConstructor;
import org.server.shopitem.ShopItemDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryService categoryService;

    @GetMapping("/category")
    ResponseEntity<List<CategoryNameIdDto>> GetCategoryNames() {
        var categoryNames = categoryService.getAllCategoryNameId();
        return ResponseEntity.ok(categoryNames);
    }

    @GetMapping("/category/{id}")
    ResponseEntity<CategoryDto> getCategory(@PathVariable Long id) {
        var category = categoryService.findById(id);
        return ResponseEntity.ok(category);
    }

    @GetMapping("/category/{id}/items")
    ResponseEntity<List<ShopItemDto>> GetShopItemsByCategoryId(@PathVariable Long id) {
        var shopItems = categoryService.getShopItemsByCategoryId(id);
        return ResponseEntity.ok(shopItems);
    }

    @PostMapping("/category")
    ResponseEntity<CategoryDto> createCategory(@RequestBody CategoryDto category) {
        var createdCategory = categoryService.save(category);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdCategory);
    }
}
