<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\AdminResource;
use App\Services\AdminService;
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
     * @param  AdminService  $adminService
     * @return void
     */
    public function __construct(private AdminService $adminService)
    {
        //
    }

    /**
     * Get the authenticated admin.
     *
     * @param  Request  $request
     * @return JsonResponse
     */
    #[OAT\Get(
        tags: ['adminProfile'],
        path: '/api/admin/profile',
        summary: 'me',
        operationId: 'Admin.ProfileController.me',
        security: [['BearerToken' => []]],
        responses: [
            new OAT\Response(
                response: HttpResponse::HTTP_OK,
                description: 'Ok',
                content: new OAT\JsonContent(ref: '#/components/schemas/AdminResource')
            ),
        ]
    )]
    public function me(Request $request): JsonResponse
    {
        return Response::json(new AdminResource($request->user()));
    }
}
