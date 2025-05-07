package org.server.shopitem;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class ShopItemController {

    private final ShopItemService shopItemService;

    @GetMapping("/items")
    ResponseEntity<List<ShopItemDto>> getAllShopItems() {
        var allShopItems = shopItemService.findAll();
        return ResponseEntity.ok(allShopItems);
    }

    @PostMapping("/items")
    ResponseEntity<ShopItemDto> newShopItem(@RequestBody @Valid ShopItemDto shopItem) {
        var createdShopItem = shopItemService.save(shopItem);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdShopItem);
    }

    @GetMapping("/items/{id}")
    ResponseEntity<ShopItemDto> getShopItem(@PathVariable Long id) {
        return ResponseEntity.ok(shopItemService.findById(id));
    }

    @PutMapping("/items/{id}")
    ResponseEntity<ShopItemDto> updateShopItem(@RequestBody @Valid ShopItemDto shopItem, Long id) {
        return ResponseEntity.ok(shopItemService.update(shopItem, id));
    }

    @DeleteMapping("/items/{id}")
    ResponseEntity<Void> deleteShopItem(@PathVariable Long id) {
        shopItemService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
