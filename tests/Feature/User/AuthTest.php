<?php

namespace Tests\Feature\User;

use App\Events\UserSignedUp;
use App\Http\Resources\LoggedInUserResource;
use App\Models\User;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\Sanctum;
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
            'logout' => '/api/logout',
        ];
    }

    /**
     * User can signup successfully.
     *
     * @return void
     */
    public function test_user_can_signup_successfully()
    {
        Event::fake();

        $request = [
            'email' => $this->faker->safeEmail(),
            'name' => $this->faker->name(),
            'password' => '123456',
            'password_confirmation' => '123456',
        ];

        $response = $this
            ->json('POST', $this->routes['signup'], $request)
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
                    'email' => $request['email'],
                    'name' => $request['name'],
                    'avatar_url' => null,
                ],

            ]);

        Event::assertDispatched(UserSignedUp::class);

        $this->assertInstanceOf(LoggedInUserResource::class, $response->getOriginalContent());
    }

    /**
     * User can not signup without required input.
     *
     * @return void
     */
    public function test_user_can_not_signup_without_required_input()
    {
        $this
            ->json('POST', $this->routes['signup'], [])
            ->assertStatus(Response::HTTP_UNPROCESSABLE_ENTITY)
            ->assertJsonValidationErrorFor('name')
            ->assertJsonValidationErrorFor('email')
            ->assertJsonValidationErrorFor('password');
    }

    /**
     * User can not signup with conflicting email.
     *
     * @return void
     */
    public function test_user_can_not_signup_with_conflicting_email()
    {
        $user = User::factory()->create();

        $request = [
            'email' => $user->email,
            'name' => $user->name,
            'password' => '123456',
            'password_password' => '123456',
        ];

        $this
            ->json('POST', $this->routes['signup'], $request)
            ->assertStatus(Response::HTTP_UNPROCESSABLE_ENTITY)
            ->assertJsonValidationErrorFor('email')
            ->assertJson([
                'errors' => [
                    'email' => [
                        'The email has already been taken.',
                    ],
                ],
            ]);
    }

    /**
     * User can login successfully.
     *
     * @return void
     */
    public function test_user_can_login_successfully()
    {
        $user = User::factory(['password' => Hash::make('123456')])->create();

        $request = [
            'email' => $user->email,
            'password' => '123456',
        ];

        $response = $this
            ->json('POST', $this->routes['login'], $request)
            ->assertStatus(Response::HTTP_OK)
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
                    'id' => $user->id,
                    'email' => $user->email,
                    'name' => $user->name,
                    'avatar_url' => null,
                ],

            ]);

        $this->assertInstanceOf(LoggedInUserResource::class, $response->getOriginalContent());
    }

    /**
     * User can not login without required input.
     *
     * @return void
     */
    public function test_user_can_not_login_without_required_input()
    {
        $this
            ->json('POST', $this->routes['login'], [])
            ->assertStatus(Response::HTTP_UNPROCESSABLE_ENTITY)
            ->assertJsonValidationErrorFor('email')
            ->assertJsonValidationErrorFor('password');
    }

    /**
     * User can not login with invalid credentials.
     *
     * @return void
     */
    public function test_user_can_not_login_with_invalid_credentials()
    {
        $user = User::factory(['password' => Hash::make('123456')])->create();

        $request = [
            'email' => $user->email,
            'password' => $this->faker->password(),
        ];

        $this
            ->json('POST', $this->routes['login'], $request)
            ->assertStatus(Response::HTTP_UNAUTHORIZED)
            ->assertJson([
                'message' => 'Invalid credentials.',
            ]);
    }

    /**
     * User can logout successfully.
     *
     * @return void
     */
    public function test_user_can_logout_successfully()
    {
        Sanctum::actingAs(User::factory()->create(), [], 'user');

        $this->json('POST', $this->routes['logout'])
            ->assertStatus(Response::HTTP_NO_CONTENT);
    }
}
