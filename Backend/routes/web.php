<?php

use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/login', function () {
    return view("login")->with("username","ozva");
});

Route::post('/register', [LoginController::class, 'store']);