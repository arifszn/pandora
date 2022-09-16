<?php

namespace App\Services;

use App\Models\Admin;
use App\Repositories\AdminRepository;

class AdminService
{
    /**
     * Create a new service instance.
     *
     * @param  AdminRepository  $adminRepository
     * @return void
     */
    public function __construct(private AdminRepository $adminRepository)
    {
        //
    }

    /**
     * Get an admin by email.
     *
     * @param  string  $email
     * @return null|Admin
     */
    public function getByEmail(string $email): ?Admin
    {
        return $this->adminRepository->get(['email' => $email]);
    }
}
