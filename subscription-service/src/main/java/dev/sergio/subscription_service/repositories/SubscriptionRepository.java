package dev.sergio.subscription_service.repositories;

import dev.sergio.subscription_service.domain.Suscription;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubscriptionRepository extends JpaRepository<Suscription, String> {
}
