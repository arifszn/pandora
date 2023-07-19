<?php

namespace App\Http\Controllers;

class FrontendController extends Controller
{
    /**
     * Display admin frontend.
     *
     * @return View|Factory
     */
    public function showAdminApp()
    {
        return view('admin.app');
    }
}
