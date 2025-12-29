package dev.sergio.subscription_service.services;

import dev.sergio.subscription_service.domain.Suscription;

public interface SubscriptionServicesI {
    public Suscription createSuscription(Suscription suscription);
    public Suscription getSuscriptionByEmail(String email);
    public Suscription updateSuscription(Suscription suscription);
    public boolean removeSuscriprion(String email);
}
