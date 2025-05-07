package org.server.category;

import org.server.shopitem.ShopItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    @Query("SELECT new org.server.category.CategoryNameIdDto(c.name, c.id) FROM Category c")
    List<CategoryNameIdDto> findAllCategoryNameId();

    @Query("SELECT c.items FROM Category c WHERE c.id = :id")
    List<ShopItem> findItemsByCategoryId(@Param("id") Long id);
}
