<?php

namespace App\Services;

use App\Http\Requests\Auth\SignupRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthService
{
    /**
     * Create a new service instance.
     *
     * @param  UserService  $userService
     * @return void
     */
    public function __construct(private UserService $userService)
    {
        //
    }

    /**
     * Signup a user.
     *
     * @param  SignupRequest  $request
     * @return User
     */
    public function signupUser(SignupRequest $request): User
    {
        $user = $this->userService->storeUser([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return $user;
    }
}
