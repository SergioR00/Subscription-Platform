package dev.sergio.user_service.services;

import dev.sergio.user_service.domain.User;
import dev.sergio.user_service.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServices implements UserServicesI{
    private final UserRepository userRepository;


    public User getUserByEmail(String email){
        return userRepository.findById(email).orElse(null);
    }

    public User createUser(User user){
        return userRepository.save(user);
    }

    public boolean deleteUserByEmail(String email){
        userRepository.deleteById(email);
        return !userRepository.existsById(email);
    }
}
