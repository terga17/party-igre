<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GameSessionController;
use App\Http\Controllers\FriendRequestController;

Route::get('/', function () {
    return view('welcome');
});

// Route::get('/login/user/{username}', [LoginController::class, 'userExists']);


Route::get('/login', function () {
    return view("login")->with("username","ozva");
});


Route::post('/registerUser', [LoginController::class, 'registerUser']);
Route::post('/loginUser', [LoginController::class, 'loginUser']);


Route::resource('/gameSession', GameSessionController::class);


Route::get('/user',[UserController::class, 'index']);
Route::get('/user/{username}',[UserController::class, 'show']);
Route::get('/user/{id}/hostedSession',[UserController::class, 'showHostSession']);
Route::get('/user/{id}/friends',[UserController::class, 'showFriends']);
Route::get('/user/{userId}/add-friend/{friendId}', [UserController::class, 'addUserFriend']);
Route::get('/user/{userId}/remove-friend/{friendId}', [UserController::class, 'removeUserFriend']);
Route::get('/friend-requests/{senderId}/{receiverId}', [FriendRequestController::class, 'sendRequest']);
Route::get('/friend-requests/{receiverId}/{requestId}/accept', [FriendRequestController::class, 'acceptRequest']);


// Route::resource('user', UserController::class);
