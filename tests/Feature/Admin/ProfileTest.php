<?php

namespace Tests\Feature\Admin;

use App\Http\Resources\AdminResource;
use App\Models\Admin;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\Response;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class ProfileTest extends TestCase
{
    use WithFaker;

    /**
     * @var array
     */
    private $routes;

    /**
     * @var Admin
     */
    private $admin;

    /**
     * Setup the test.
     *
     * @return void
     */
    public function setUp(): void
    {
        parent::setUp();

        $this->routes = [
            'me' => '/api/admin/profile',
        ];

        $this->admin = Admin::factory()->create();

        Sanctum::actingAs($this->admin, [], 'admin');
    }

    /**
     * An admin can get his profile.
     *
     * @return void
     */
    public function testAnAdminCanGetHisProfile()
    {
        $response = $this
            ->json('GET', $this->routes['me'])
            ->assertStatus(Response::HTTP_OK)
            ->assertJsonStructure([
                'id',
                'name',
                'email',
                'avatar_url',
                'created_at',
            ])
            ->assertJson([
                'id' => $this->admin->id,
                'email' => $this->admin->email,
                'name' => $this->admin->name,
                'avatar_url' => null,
            ]);

        $this->assertInstanceOf(AdminResource::class, $response->getOriginalContent());
    }
}
