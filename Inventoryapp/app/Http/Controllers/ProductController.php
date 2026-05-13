<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::latest()->get();
        return Inertia::render('Products/Index',['products' => $products]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render('Products/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'name' => 'required',
            'sku' => 'required|unique:products',
            'price' => 'required',
            'quantity' => 'required',
            'image' => 'required|image|mimes:jpg,jpeg,png|max:2048',
        ]);
        $imageName = null;

        if ($request->hasFile('image')) {
            $imageName = time() . '.' . $request->image->extension();
            $request->image->storeAs(
                'products',
                $imageName,
                'public'
            );
        }

        Product::create([
            'name' => $request->name,
            'sku' => $request->sku,
            'price' => $request->price,
            'quantity' => $request->quantity,
            'description' => $request->description,
            'image' => $imageName,
        ]);

        return redirect()->route('products.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
        return Inertia::render('Products/Edit', [
            'product' => $product
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, product $product)
    {
        //
        $request->validate([
            'name' => 'required',
            'sku' => 'required',
            'price' => 'required',
            'quantity' => 'required',
            'description' => 'required',
            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        $imageName = $product->image;

        if ($request->hasFile('image')) {

            // delete old image
            if ($product->image) {
                Storage::disk('public')
                    ->delete('products/' . $product->image);
            }

            $imageName = time() . '.' .
                $request->image->extension();

            $request->image->storeAs(
                'products',
                $imageName,
                'public'
            );
        }

        $product->update([
            'name' => $request->name,
            'sku' => $request->sku,
            'price' => $request->price,
            'quantity' => $request->quantity,
            'description' => $request->description,
            'image' => $imageName,
        ]);

        return redirect()
            ->route('products.index')
            ->with('success', 'Product Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
