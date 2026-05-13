<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\ProductController;
use App\Http\Controllers\SuppliersController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\StockController;
use App\Http\Controllers\OrdersController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\CartController;

Route::get('/', [HomeController::class, 'index']);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    
    //Route::get('/products', [ProductController::class, 'index'])->name('products.index');
    //Route::get('/customers', [CustomerController::class, 'index'])->name('customers.index');
    Route::resource('products', ProductController::class);
    Route::resource('customers',CustomerController::class);
    Route::get('/suppliers', [SuppliersController::class, 'index'])->name('suppliers.index');
    Route::get('/stock', [StockController::class, 'index'])->name('stock.index');
    Route::get('/Order', [OrdersController::class, 'index'])->name('orders.index');
    Route::post('/cart/add/{productId}', [CartController::class, 'addToCart'])->name('cart.add');
});

require __DIR__.'/auth.php';
