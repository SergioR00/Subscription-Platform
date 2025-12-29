package dev.sergio.subscription_service.controllers;

import dev.sergio.subscription_service.domain.Suscription;
import dev.sergio.subscription_service.services.SubscriptionServicesI;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

@RestController
@RequiredArgsConstructor
public class SubscriptionController {

    private final SubscriptionServicesI suscriptionServicesI;

    @GetMapping("/suscriptionEndDate/{email}")
    public ResponseEntity<LocalDate> getSuscriptionEndDate(@PathVariable String email){
        if(email==null || email.equals("")){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        Suscription suscription = suscriptionServicesI.getSuscriptionByEmail(email);
        if(suscription == null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        return ResponseEntity.ok(suscription.getEndDate());
    }

    @PostMapping("/addSuscription")
    public ResponseEntity<Suscription> addSuscription(@RequestBody SubscriptionRequest request){
        if(request.email()==null || request.email().equals("")){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        Suscription newSuscription = Suscription.builder()
                .email(request.email())
                .subscriptionType(request.subscriptionType())
                .subscriptionLevel(request.subscriptionLevel())
                .endDate(request.subscriptionType().calculateRenewalDate(LocalDate.now()))
                .build();
        return ResponseEntity.ok(suscriptionServicesI.createSuscription(newSuscription));
    }

    @PostMapping("/renovate")
    public ResponseEntity<Suscription> renovateSuscription(@RequestBody SubscriptionRequest request){
        if(request.email()==null || request.email().equals("")){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        Suscription suscriptionToUpdate = suscriptionServicesI.getSuscriptionByEmail(request.email());

        if(request.subscriptionType()!=suscriptionToUpdate.getSubscriptionType()){
            suscriptionToUpdate.setSubscriptionType(request.subscriptionType());
        }
        if(request.subscriptionLevel()!=suscriptionToUpdate.getSubscriptionLevel()){
            suscriptionToUpdate.setSubscriptionLevel(request.subscriptionLevel());
        }
        suscriptionToUpdate.getSubscriptionType().calculateRenewalDate(suscriptionToUpdate.getEndDate());

        return ResponseEntity.ok(suscriptionServicesI.updateSuscription(suscriptionToUpdate));
    }

    @DeleteMapping("/delete/{email}")
    public ResponseEntity deleteSuscription(@PathVariable String email){
        if(email==null || email.equals("")){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        if(suscriptionServicesI.removeSuscriprion(email)) {
            return ResponseEntity.status(HttpStatus.OK).build();
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }
}

record SubscriptionRequest(
        String email,
        Suscription.SubscriptionType subscriptionType,
        Suscription.SubscriptionLevel subscriptionLevel
) {}