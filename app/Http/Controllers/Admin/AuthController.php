<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\AdminLoginRequest;
use App\Http\Resources\LoggedInAdminResource;
use App\Services\AuthService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response as HttpResponse;
use Illuminate\Support\Facades\Response;
use OpenApi\Attributes as OAT;

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
     * Login an admin.
     *
     * @param  AdminLoginRequest  $request
     * @return JsonResponse
     *
     * @throws HttpException
     * @throws NotFoundHttpException
     */
    #[OAT\Post(
        tags: ['adminAuth'],
        path: '/api/admin/login',
        summary: 'Login an admin',
        operationId: 'Admin.AuthController.login',
        requestBody: new OAT\RequestBody(
            required: true,
            content: new OAT\JsonContent(ref: '#/components/schemas/AdminLoginRequest')

        ),
        responses: [
            new OAT\Response(
                response: HttpResponse::HTTP_OK,
                description: 'Ok',
                content: new OAT\JsonContent(ref: '#/components/schemas/LoggedInAdminResource')
            ),
            new OAT\Response(
                response: HttpResponse::HTTP_UNPROCESSABLE_ENTITY,
                description: 'Unprocessable entity',
                content: new OAT\JsonContent(ref: '#/components/schemas/ValidationError')
            ),
            new OAT\Response(
                response: HttpResponse::HTTP_UNAUTHORIZED,
                description: 'Unauthorized',
                content: new OAT\JsonContent(
                    properties: [
                        new OAT\Property(
                            property: 'message',
                            type: 'string',
                            example: 'Invalid credentials.'
                        ),
                    ]
                )
            ),
        ]
    )]
    public function login(AdminLoginRequest $request): JsonResponse
    {
        $admin = $this->authService->loginAdmin($request);

        return Response::json(new LoggedInAdminResource($admin));
    }

    /**
     * Logout an admin.
     *
     * @param  Request  $request
     * @return JsonResponse
     */
    #[OAT\Post(
        tags: ['adminAuth'],
        path: '/api/admin/logout',
        summary: 'Logout an admin',
        operationId: 'Admin.AuthController.logout',
        security: [['BearerToken' => []]],
        responses: [
            new OAT\Response(
                response: HttpResponse::HTTP_NO_CONTENT,
                description: 'No content'
            ),
        ]
    )]
    public function logout(Request $request): JsonResponse
    {
        $this->authService->logoutAdmin($request->user());

        return Response::json(null, HttpResponse::HTTP_NO_CONTENT);
    }
}
