<?php

namespace App\Http\Resources;

use App\Models\Admin;
use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Http\Resources\Json\JsonResource;
use JsonSerializable;
use OpenApi\Attributes as OAT;

#[OAT\Schema(
    schema: 'LoggedInAdminResource',
    properties: [
        new OAT\Property(property: 'admin', type: 'object', ref: '#/components/schemas/AdminResource'),
        new OAT\Property(property: 'token', type: 'object', ref: '#/components/schemas/AccessTokenResource'),
    ]
)]
class LoggedInAdminResource extends JsonResource
{
    /**
     * Create a new Resource instance.
     *
     * @param  Admin  $admin
     * @return void
     */
    public function __construct(private Admin $admin)
    {
        parent::__construct($admin);
    }

    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|Arrayable|JsonSerializable
     */
    public function toArray($request): array|Arrayable|JsonSerializable
    {
        $token = $this->admin->createToken('admin-auth-token');

        return [
            'admin' => new AdminResource($this->admin),
            'token' => new AccessTokenResource($token),
        ];
    }
}
