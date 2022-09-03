<?php

namespace Tests\Feature;

use App\Events\UserSignedUp;
use App\Http\Resources\LoggedInUserResource;
use App\Models\User;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Hash;
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
     * A user can not signup without required input.
     *
     * @return void
     */
    public function testAUserCanNotSignupWithoutRequiredInput()
    {
        $this
            ->json('POST', $this->routes['signup'], [])
            ->assertStatus(Response::HTTP_UNPROCESSABLE_ENTITY)
            ->assertJsonValidationErrorFor('name')
            ->assertJsonValidationErrorFor('email')
            ->assertJsonValidationErrorFor('password');
    }

    /**
     * A user can not signup with conflicting email.
     *
     * @return void
     */
    public function testAUserCanNotSignupWithConflictingEmail()
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
     * A user can login successfully.
     *
     * @return void
     */
    public function testAUserCanLoginSuccessfully()
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
     * A user can not login without required input.
     *
     * @return void
     */
    public function testAUserCanNotLoginWithoutRequiredInput()
    {
        $this
            ->json('POST', $this->routes['login'], [])
            ->assertStatus(Response::HTTP_UNPROCESSABLE_ENTITY)
            ->assertJsonValidationErrorFor('email')
            ->assertJsonValidationErrorFor('password');
    }

    /**
     * A user can not login with invalid credentials.
     *
     * @return void
     */
    public function testAUserCanNotLoginWithInvalidCredentials()
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
}
