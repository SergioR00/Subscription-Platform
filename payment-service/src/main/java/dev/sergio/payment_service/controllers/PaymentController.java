package dev.sergio.payment_service.controllers;

import dev.sergio.payment_service.domain.*;
import dev.sergio.payment_service.services.UserPaymentServiceI;
import lombok.RequiredArgsConstructor;
import org.jetbrains.annotations.NotNull;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.reactive.function.client.WebClient;

import java.time.LocalDateTime;
import java.util.List;

@Controller
@RequiredArgsConstructor
public class PaymentController {

    private final WebClient webClient;
    private final UserPaymentServiceI userPaymentServiceI;

    @GetMapping("/payments/{email}")
    public ResponseEntity<List<Payment>> getPaymentsFromUser(@PathVariable String email){
        List<Payment> payments = userPaymentServiceI.getPaymentsFromUser(email);
        if (payments == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        return ResponseEntity.ok(payments);
    }
    @PutMapping("/addpayment")
    public ResponseEntity<UserPayment> addPaymentFromUser(@RequestBody @NotNull AddPaymentRequest request){
        boolean exist = webClient.get().uri("http://user-service:8080/existUser/" + request.email()).retrieve().bodyToMono(Boolean.class).defaultIfEmpty(false).block();
        if(!exist){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        UserPayment userPayment = userPaymentServiceI.addPaymentToUser(request.email(),new Payment(request.subscriptionType(),request.subscriptionLevel()));
        webClient.post()
                .uri("http://subscription-service:8080/addSuscription")
                .bodyValue(request)
                .retrieve()
                .toBodilessEntity()
                .map(response -> response.getStatusCode().is2xxSuccessful())
                .subscribe(isOk -> {
                    if (isOk) {
                        System.out.println("Suscripción añadida con éxito");
                    }
                });
        return ResponseEntity.ok(userPayment);
    }
}

record AddPaymentRequest(
        String email,
        SubscriptionType subscriptionType,
        SubscriptionLevel subscriptionLevel
) {}
