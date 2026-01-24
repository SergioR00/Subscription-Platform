package dev.sergio.payment_service.domain;

import jakarta.persistence.Embeddable;
import lombok.*;

import java.time.LocalDateTime;

@Embeddable
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Payment {
    private LocalDateTime fecha;
    private SubscriptionType subscriptionType;
    private SubscriptionLength subscriptionLength;
    private float valor;

    public Payment(SubscriptionType type, SubscriptionLength level) {
        this.fecha = LocalDateTime.now();
        this.subscriptionType = type;
        this.subscriptionLength = level;
        this.valor = calculatePrice(level, type);
    }

    private float calculatePrice(SubscriptionLength length, SubscriptionType type) {

        float cost = switch (length) {
            case monthly -> 4.99f;
            case annual -> 49.95f;
        };

        int divisor = switch (type) {
            case student -> 2;
            case normal -> 1;
        };


        return cost/divisor;
    }
}