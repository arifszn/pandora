<?php

namespace App\Services;

use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\SignupRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

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

    /**
     * Login a user.
     *
     * @param  LoginRequest  $request
     * @return User
     *
     * @throws HttpException
     * @throws NotFoundHttpException
     */
    public function loginUser(LoginRequest $request): User
    {
        $user = $this->userService->getByEmail($request->email);

        if (!$user || !Hash::check($request->password, $user->password)) {
            return abort(401, 'Invalid credentials.');
        }

        return $user;
    }

    /**
     * Logout a user.
     * 
     * @param User $user 
     * @return bool 
     */
    public function logoutUser(User $user): bool
    {
        return $user->currentAccessToken()->delete();
    }
}
