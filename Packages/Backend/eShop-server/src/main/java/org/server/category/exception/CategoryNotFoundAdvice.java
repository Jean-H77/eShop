package org.server.category.exception;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class CategoryNotFoundAdvice {

    @ExceptionHandler(CategoryNotFoundException.class)
    @ResponseStatus
    String categoryNotFoundHandler(CategoryNotFoundException ex) {
        return ex.getMessage();
    }
}
