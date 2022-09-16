<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Services\UserService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response as HttpResponse;
use Illuminate\Support\Facades\Response;
use OpenApi\Attributes as OAT;

class ProfileController extends Controller
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
     * Get the authenticated user.
     *
     * @param  Request  $request
     * @return JsonResponse
     */
    #[OAT\Get(
        tags: ['profile'],
        path: '/api/profile',
        summary: 'me',
        operationId: 'ProfileController.me',
        security: [['BearerToken' => []]],
        responses: [
            new OAT\Response(
                response: HttpResponse::HTTP_OK,
                description: 'Ok',
                content: new OAT\JsonContent(ref: '#/components/schemas/UserResource')
            ),
        ]
    )]
    public function me(Request $request): JsonResponse
    {
        return Response::json(new UserResource($request->user()));
    }
}
