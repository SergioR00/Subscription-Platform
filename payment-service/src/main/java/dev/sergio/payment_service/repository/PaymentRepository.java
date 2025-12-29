package dev.sergio.payment_service.repository;

import dev.sergio.payment_service.domain.UserPayment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentRepository extends JpaRepository<UserPayment, String> {
}
