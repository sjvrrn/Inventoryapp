<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    //
    protected $fillable = [
        'name',
        'sku',
        'price',
        'quantity',
        'description',
        'image',
    ];
    /*
       public function supplier()
        {
            return $this->belongsTo(Supplier::class);
        }
    */
}
