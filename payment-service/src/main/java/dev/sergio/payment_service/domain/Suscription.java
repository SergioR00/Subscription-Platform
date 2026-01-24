package dev.sergio.payment_service.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class Suscription {
    private String email;
    private SubscriptionLength subscriptionLength;
    private SubscriptionType subscriptionType;
}
