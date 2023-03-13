<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePelangganRequest;
use App\Http\Resources\V1\PelangganCollection;
use App\Http\Resources\V1\PelangganResource;
use App\Models\Pelanggan;
use Illuminate\Http\Request;

class PelangganController extends Controller
{
    public function index()
    {
        return new PelangganCollection(Pelanggan::all());
    }

    public function show(Pelanggan $pelanggan)
    {
        return new PelangganResource($pelanggan);
    }

    public function store(StorePelangganRequest $request)
    {
        Pelanggan::create($request->validated());
        return response()->json("pelanggan created");
    }

    public function update(StorePelangganRequest $request, Pelanggan $pelanggan)
    {
        $pelanggan->update($request->validated());
        return response()->json("pelanggan updated");
    }

    public function destroy(Pelanggan $pelanggan)
    {
        $pelanggan->delete();
        return response()->json("pelanggan deleted");
    }
}
