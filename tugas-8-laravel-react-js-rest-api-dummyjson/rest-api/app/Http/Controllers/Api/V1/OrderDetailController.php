<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreOrderDetailRequest;
use App\Http\Resources\V1\OrderDetailResource;
use App\Models\OrderDetail;
use Illuminate\Http\Request;

class OrderDetailController extends Controller
{
    public function index() {
        return new OrderDetailResource(OrderDetail::all());
    }

    public function store(StoreOrderDetailRequest $request) {
        OrderDetail::create($request->validated());
        return response()->json("Product Created");
    }
}
