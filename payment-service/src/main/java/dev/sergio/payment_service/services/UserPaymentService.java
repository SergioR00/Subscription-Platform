package dev.sergio.payment_service.services;

import dev.sergio.payment_service.domain.Payment;
import dev.sergio.payment_service.domain.UserPayment;
import dev.sergio.payment_service.repository.PaymentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserPaymentService implements UserPaymentServiceI{
    private final PaymentRepository paymentRepository;

    public List<Payment> getPaymentsFromUser(String email){
        if(paymentRepository.existsById(email)) {
            return paymentRepository.getReferenceById(email).getPayments();
        }
        return null;
    }

    public UserPayment addPaymentToUser(String email, Payment Payment){
        if(paymentRepository.existsById(email)) {
            UserPayment userPayment = paymentRepository.getReferenceById(email);
            paymentRepository.deleteById(email);

            userPayment.getPayments().add(Payment);
            return paymentRepository.save(userPayment);
        }
        return null;
    }

}
