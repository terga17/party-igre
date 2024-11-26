<?php

use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/user/{username}', [LoginController::class, 'userExists']);


Route::get('/login', function () {
    return view("login")->with("username","ozva");
});


Route::post('/registerUser', [LoginController::class, 'registerUser']);
Route::post('/loginUser', [LoginController::class, 'loginUser']);
