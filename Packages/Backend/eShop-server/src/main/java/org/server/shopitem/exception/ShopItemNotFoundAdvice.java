package org.server.shopitem.exception;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ShopItemNotFoundAdvice {

    @ExceptionHandler(ShopItemNotFoundException.class)
    @ResponseStatus
    String shopItemNotFoundHandler(ShopItemNotFoundException ex) {
        return ex.getMessage();
    }
}
