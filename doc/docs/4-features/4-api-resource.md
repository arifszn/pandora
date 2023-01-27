---
title: API Resource
---

API resource classes allow you to expressively and easily transform your models and model collections into JSON. For more details, visit the [Laravel website](https://laravel.com/docs/9.x/eloquent-resources).

Pandora uses API resources to return response.

```php
class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|Arrayable|JsonSerializable
     */
    public function toArray($request): array|Arrayable|JsonSerializable
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'avatar_url' => $this->avatar_url,
            'created_at' => $this->created_at,
        ];
    }
}
```

## Generating Resources

To generate a resource class, you may use the make:resource Artisan command.

```shell
php artisan make:resource UserResource
```
