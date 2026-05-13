<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class SuppliersController extends Controller
{
    //
    public function index(){
       return  Inertia::render('Suppliers/Index');
    }
}
