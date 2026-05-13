<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class StockController extends Controller
{
    //
    public function index(){
        return Inertia::render("Stock/Index");
    }
}
