package dev.sergio.payment_service.domain;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Builder
@Getter
@Setter
public class UserPayment {
    @Id
    @Column(nullable = false, unique = true)
    private String email;

    @ElementCollection
    @CollectionTable(name = "user_payments_list", joinColumns = @JoinColumn(name = "user_email"))
    private List<Payment> payments;
}

