package dev.sergio.user_service.controllers;

import dev.sergio.user_service.domain.User;
import dev.sergio.user_service.services.UserServicesI;
import jakarta.validation.constraints.NotBlank;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserServicesI userServicesI;

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody LoginRequest request){
        if(request.email()==null || request.email().equals("") || request.password()==null || request.password().equals("")){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        User requestedUser = userServicesI.getUserByEmail(request.email());
        if(requestedUser==null || !requestedUser.getPassword().equals(request.password())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        else return ResponseEntity.ok(requestedUser);
    }

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody RegisterRequest request){
        if(request.email()==null || request.email().equals("") || request.password()==null || request.password().equals("") || request.username()==null || request.username().equals("")){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        User user = User.builder()
                .email(request.email())
                .password(request.password())
                .username(request.username())
                .build();
        // Hacer post al servicio de suscripción
        return ResponseEntity.ok(userServicesI.createUser(user));
    }

    @GetMapping("/existUser/{email}")
    public boolean existUser(@PathVariable String email){
        if(userServicesI.getUserByEmail(email) == null) {
            return false;
        }
        return true;
    }
}

record LoginRequest(String email, String password) {}
record RegisterRequest(
        @NotBlank String email,
        @NotBlank String username,
        @NotBlank String password
) {}