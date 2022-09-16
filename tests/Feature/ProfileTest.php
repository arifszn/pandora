<?php

namespace Tests\Feature;

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
     * A user can get his profile.
     *
     * @return void
     */
    public function testAUserCanGetHisProfile()
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
