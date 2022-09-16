<?php

namespace App\Repositories;

use App\Models\Admin;

class AdminRepository extends BaseRepository
{
    /**
     * Create a new repository instance.
     *
     * @param  Admin  $admin
     * @return void
     */
    public function __construct(Admin $admin)
    {
        $this->model = $admin;
    }
}
