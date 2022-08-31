<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;
use OpenApi\Attributes as OAT;

#[OAT\Schema(
    schema: 'SignupRequest',
    required: ['name', 'email', 'password', 'password_confirmation'],
    properties: [
        new OAT\Property(
            property: 'name',
            type: 'string',
            example: 'John Doe'
        ),
        new OAT\Property(
            property: 'email',
            type: 'string',
            format: 'email',
            example: 'john@example.com'
        ),
        new OAT\Property(
            property: 'password',
            type: 'string',
            example: '123456'
        ),
        new OAT\Property(
            property: 'password_confirmation',
            type: 'string',
            example: '123456'
        ),
    ]
)]
class SignupRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        return [
            'name' => [
                'required',
                'string',
            ],
            'email' => [
                'required',
                'email',
                'unique:App\Models\User,email',
            ],
            'password' => [
                'required',
                'min:6',
                'string',
                'confirmed',
            ],
        ];
    }
}
