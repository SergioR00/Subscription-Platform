package dev.sergio.user_service.services;

import dev.sergio.user_service.domain.User;

public interface UserServicesI{

    public User getUserByEmail(String email);

    public User createUser(User user);

    public boolean deleteUserByEmail(String email);
}
