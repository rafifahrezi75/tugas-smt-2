<?php

use App\Http\Controllers\Api\V1\OrderDetailController;
use App\Http\Controllers\Api\V1\PelangganController;
use App\Http\Controllers\Api\V1\ProductController;
use App\Http\Controllers\Api\V1\SkillController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'v1'], function() {
    Route::apiResource('skills', SkillController::class);
    Route::apiResource('pelanggan', PelangganController::class);
    Route::apiResource('product', ProductController::class);
    Route::apiResource('orderdetail', OrderDetailController::class);
});
