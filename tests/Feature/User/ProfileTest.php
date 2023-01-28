<?php

namespace Tests\Feature\User;

use App\Http\Resources\UserResource;
use App\Models\User;
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
     * @var User
     */
    private $user;

    /**
     * Setup the test.
     *
     * @return void
     */
    public function setUp(): void
    {
        parent::setUp();

        $this->routes = [
            'me' => '/api/profile',
        ];

        $this->user = User::factory()->create();

        Sanctum::actingAs($this->user, [], 'user');
    }

    /**
     * User can get his profile details.
     *
     * @return void
     */
    public function test_user_can_get_profile_details()
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
                'id' => $this->user->id,
                'email' => $this->user->email,
                'name' => $this->user->name,
                'avatar_url' => null,
            ]);

        $this->assertInstanceOf(UserResource::class, $response->getOriginalContent());
    }
}
