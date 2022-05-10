<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductImageController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/products/get', [ProductController::class, 'getAllProducts'] );
Route::post('/product/create', [ProductController::class, 'createProduct'] );
Route::put('/product/update/{id}', [ProductController::class, 'changeProduct'] );
Route::post('/product/image/upload/{id}', [ProductImageController::class, 'upload'] );
Route::get('/product/get/image/{id}', [ProductImageController::class, 'getImage'] );

