package org.server.eshopserver.shopitem;

import lombok.RequiredArgsConstructor;
import org.server.eshopserver.shopitem.exception.ShopItemNotFoundException;
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
        System.out.println("Got thumbnail: " + toSave.getThumbnailUrl());

        shopItemRepository.save(toSave);
        return shopItemMapper.toDto(toSave);
    }

    public ShopItemDto findById(Long id) {
        var shopItem = shopItemRepository.findById(id)
                .orElseThrow(() -> new ShopItemNotFoundException(id));

        return shopItemMapper.toDto(shopItem);
    }

    public List<ShopItemDto> findAll() {
        return shopItemRepository.findAll()
                .stream()
                .map(shopItemMapper::toDto)
                .collect(Collectors.toList());
    }

    public ShopItemDto update(ShopItemDto shopItem) {
        sh
    }
    public void delete(Long id) {
        shopItemRepository.deleteById(id);
    }
}
