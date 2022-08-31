<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\SignupRequest;
use App\Http\Resources\LoggedInUserResource;
use App\Services\AuthService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response as HttpResponse;
use Illuminate\Support\Facades\Response;

class AuthController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @param  AuthService  $authService
     * @return void
     */
    public function __construct(private AuthService $authService)
    {
        //
    }

    /**
     * Signup a user.
     *
     * @param  SignupRequest  $request
     * @return JsonResponse
     */
    public function signup(SignupRequest $request): JsonResponse
    {
        $user = $this->authService->signupUser($request);

        return Response::json(new LoggedInUserResource($user), HttpResponse::HTTP_CREATED);
    }
}
