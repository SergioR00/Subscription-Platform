package dev.sergio.subscription_service.domain;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Suscription {
    @Id
    @Column(nullable = false, unique = true)
    private String email;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private SubscriptionType subscriptionType;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private SubscriptionLevel subscriptionLevel;

    @Builder.Default
    @Column(nullable = false)
    private boolean autoRenew = true;

    @Column(nullable = false)
    private LocalDate endDate;

    public enum SubscriptionType {
        mensual {
            @Override
            public LocalDate calculateRenewalDate(LocalDate currentEndDate) {
                return currentEndDate.plusMonths(1);
            }
        },
        anual {
            @Override
            public LocalDate calculateRenewalDate(LocalDate currentEndDate) {
                return currentEndDate.plusYears(1);
            }
        },
        premium {
            @Override
            public LocalDate calculateRenewalDate(LocalDate currentEndDate) {
                return LocalDate.MAX;
            }
        };
        public abstract LocalDate calculateRenewalDate(LocalDate currentEndDate);
    }

    public enum SubscriptionLevel {
        basic, medium, pro
    }
}
