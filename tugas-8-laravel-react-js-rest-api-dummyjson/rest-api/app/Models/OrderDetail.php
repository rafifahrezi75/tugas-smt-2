<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderDetail extends Model
{
    use HasFactory;

    protected $fillable = ['idpelanggan', 'pelanggan', 'alamat', 'idproduct', 'product', 'price', 'amount'];
}