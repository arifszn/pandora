<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Services\UserService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class UserController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @param  UserService  $authService
     * @return void
     */
    public function __construct(private UserService $userService)
    {
        //
    }

    /**
     * Provides current authenticated user's data
     *
     * @param  Request  $request
     */
    public function index(Request $request)
    {
        return Response::json(new UserResource($request->user()));
    }
}
