<?php

namespace Tests\Feature;

use App\Http\Resources\LoggedInUserResource;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\Response;
use Tests\TestCase;

class AuthTest extends TestCase
{
    use WithFaker;

    /**
     * @var array
     */
    private $routes;

    /**
     * Setup the test.
     *
     * @return void
     */
    public function setUp(): void
    {
        parent::setUp();

        $this->routes = [
            'signup' => '/api/signup',
            'login' => '/api/login',
        ];
    }

    /**
     * A user can signup successfully.
     *
     * @return void
     */
    public function testAUserCanSignupSuccessfully()
    {
        $data = [
            'email' => $this->faker->safeEmail(),
            'name' => $this->faker->name(),
            'password' => '123456',
            'password_confirmation' => '123456',
        ];

        $response = $this
            ->json(
                'POST',
                $this->routes['signup'],
                $data
            )
            ->assertStatus(Response::HTTP_CREATED)
            ->assertJsonStructure([
                'user' => [
                    'id',
                    'name',
                    'email',
                    'avatar_url',
                    'created_at',
                ],
                'token' => [
                    'access_token',
                    'type',
                ],
            ])
            ->assertJson([
                'user' => [
                    'email' => $data['email'],
                    'name' => $data['name'],
                    'avatar_url' => null,
                ],

            ]);

        $this->assertInstanceOf(LoggedInUserResource::class, $response->getOriginalContent());
    }
}
