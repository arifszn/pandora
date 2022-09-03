<?php

namespace App\Services;

use App\Models\User;
use App\Repositories\UserRepository;

class UserService
{
    /**
     * Create a new service instance.
     *
     * @param  UserRepository  $userRepository
     * @return void
     */
    public function __construct(private UserRepository $userRepository)
    {
        //
    }

    /**
     * Store a new user.
     *
     * @param  array  $data
     * @return User
     */
    public function storeUser(array $data): User
    {
        return $this->userRepository->create($data);
    }

    /**
     * Get a user by email.
     *
     * @param  string  $email
     * @return null|User
     */
    public function getByEmail(string $email): ?User
    {
        return $this->userRepository->get(['email' => $email]);
    }
}
