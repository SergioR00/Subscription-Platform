package dev.sergio.subscription_service.services;

import dev.sergio.subscription_service.domain.Suscription;
import dev.sergio.subscription_service.repositories.SubscriptionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SubscriptionServices implements SubscriptionServicesI {

    private final SubscriptionRepository suscriptionRepositroy;

    public Suscription createSuscription(Suscription suscription){
        return suscriptionRepositroy.save(suscription);
    }
    public Suscription getSuscriptionByEmail(String email){
        return suscriptionRepositroy.findById(email).orElse(null);
    }
    public Suscription updateSuscription(Suscription newSuscription){
        suscriptionRepositroy.deleteById(newSuscription.getEmail());
        return suscriptionRepositroy.save(newSuscription);
    }
    public boolean removeSuscriprion(String email){
        suscriptionRepositroy.deleteById(email);
        return !suscriptionRepositroy.existsById(email);
    }
}
