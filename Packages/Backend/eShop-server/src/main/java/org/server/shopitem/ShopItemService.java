package org.server.shopitem;

import lombok.RequiredArgsConstructor;
import org.server.shopitem.exception.ShopItemNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ShopItemService {

    private final ShopItemRepository shopItemRepository;

    private final ShopItemMapper shopItemMapper;

    public ShopItemDto save(ShopItemDto shopItem) {
        var toSave = shopItemMapper.fromDto(shopItem);
        shopItemRepository.save(toSave);

        return shopItemMapper.toDto(toSave);
    }

    public ShopItemDto findById(Long id) {
        return shopItemRepository.findById(id)
                .map(shopItemMapper::toDto)
                .orElseThrow(() -> new ShopItemNotFoundException(id));
    }

    public List<ShopItemDto> findAll() {
        return shopItemRepository.findAll()
                .stream()
                .map(shopItemMapper::toDto)
                .collect(Collectors.toList());
    }

    public ShopItemDto update(ShopItemDto shopItem, Long id) {
        var shopItemToUpdate = shopItemMapper.fromDto(shopItem);

        var updatedShopItem = shopItemRepository.findById(id)
                .map(shopItem1 -> {
                    shopItem1.setThumbnailUrl(shopItemToUpdate.getThumbnailUrl());
                    shopItem1.setName(shopItemToUpdate.getName());
                    return shopItemRepository.save(shopItem1);
                }).orElseGet(() -> shopItemRepository.save(shopItemToUpdate));

        return shopItemMapper.toDto(updatedShopItem);
    }

    public void delete(Long id) {
        shopItemRepository.deleteById(id);
    }
}
