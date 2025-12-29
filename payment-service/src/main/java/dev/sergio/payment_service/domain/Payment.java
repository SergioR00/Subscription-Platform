package dev.sergio.payment_service.domain;

import jakarta.persistence.Embeddable;
import lombok.*;

import java.time.LocalDateTime;

@Embeddable
@Builder
@Getter
@Setter
@NoArgsConstructor // Necesario para JPA
@AllArgsConstructor // Necesario para el @Builder de Lombok
public class Payment {
    private LocalDateTime fecha;
    private SubscriptionType subscriptionType;
    private SubscriptionLevel subscriptionLevel;
    private int valor;

    // CONSTRUCTOR PERSONALIZADO
    public Payment(SubscriptionType type, SubscriptionLevel level) {
        this.fecha = LocalDateTime.now();
        this.subscriptionType = type;
        this.subscriptionLevel = level;
        this.valor = calculatePrice(level, type);
    }

    private int calculatePrice(SubscriptionLevel level, SubscriptionType type) {
        int base = switch (level) {
            case basic -> 10;
            case medium -> 30;
            case pro -> 100;
        };

        int multiplicador = switch (type) {
            case mensual -> 1;
            case anual -> 12;
            case premium -> 30;
        };

        return base * multiplicador;
    }
}