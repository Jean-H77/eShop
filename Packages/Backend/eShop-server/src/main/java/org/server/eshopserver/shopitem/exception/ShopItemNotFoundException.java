package org.server.eshopserver.shopitem.exception;

public class ShopItemNotFoundException extends RuntimeException {

    public ShopItemNotFoundException(Long id) {
        super("Could not find shop item with id " + id);
    }
}
