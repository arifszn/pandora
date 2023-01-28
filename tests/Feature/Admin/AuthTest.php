<?php

namespace Tests\Feature\Admin;

use App\Http\Resources\LoggedInAdminResource;
use App\Models\Admin;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\Response;
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
            'adminLogin' => '/api/admin/login',
            'adminLogout' => '/api/admin/logout',
        ];
    }

    /**
     * Admin can login successfully.
     *
     * @return void
     */
    public function test_admin_can_login_successfully()
    {
        $admin = Admin::factory(['password' => Hash::make('123456')])->create();

        $request = [
            'email' => $admin->email,
            'password' => '123456',
        ];

        $response = $this
            ->json('POST', $this->routes['adminLogin'], $request)
            ->assertStatus(Response::HTTP_OK)
            ->assertJsonStructure([
                'admin' => [
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
                'admin' => [
                    'id' => $admin->id,
                    'email' => $admin->email,
                    'name' => $admin->name,
                    'avatar_url' => null,
                ],

            ]);

        $this->assertInstanceOf(LoggedInAdminResource::class, $response->getOriginalContent());
    }

    /**
     * Admin can not login without required input.
     *
     * @return void
     */
    public function test_admin_can_not_login_without_required_input()
    {
        $this
            ->json('POST', $this->routes['adminLogin'], [])
            ->assertStatus(Response::HTTP_UNPROCESSABLE_ENTITY)
            ->assertJsonValidationErrorFor('email')
            ->assertJsonValidationErrorFor('password');
    }

    /**
     * Admin can not login with invalid credentials.
     *
     * @return void
     */
    public function test_admin_can_not_login_with_invalid_credentials()
    {
        $admin = Admin::factory(['password' => Hash::make('123456')])->create();

        $request = [
            'email' => $admin->email,
            'password' => $this->faker->password(),
        ];

        $this
            ->json('POST', $this->routes['adminLogin'], $request)
            ->assertStatus(Response::HTTP_UNAUTHORIZED)
            ->assertJson([
                'message' => 'Invalid credentials.',
            ]);
    }

    /**
     * Admin can logout successfully.
     *
     * @return void
     */
    public function test_admin_can_logout_successfully()
    {
        Sanctum::actingAs(Admin::factory()->create(), [], 'admin');

        $this->json('POST', $this->routes['adminLogout'])
            ->assertStatus(Response::HTTP_NO_CONTENT);
    }
}
