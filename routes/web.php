<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('master');
});


Route::group(['prefix' => 'api'], function(){
    Route::post('test', 'UserController@test');
    Route::post('auth', 'UserController@checkAuth');
});



Route::resource('user', 'UserController');
