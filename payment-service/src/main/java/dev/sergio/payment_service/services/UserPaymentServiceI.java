package dev.sergio.payment_service.services;

import dev.sergio.payment_service.domain.Payment;
import dev.sergio.payment_service.domain.UserPayment;

import java.util.List;

public interface UserPaymentServiceI {
    public List<Payment> getPaymentsFromUser(String email);
    public UserPayment addPaymentToUser(String email, Payment Payment);
}
