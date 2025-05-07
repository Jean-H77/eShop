package org.server.category;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CategoryNameIdDto {
    @NotNull
    private String name;

    @NotNull
    private Long id;
}
