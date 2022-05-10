<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    public function getAllProducts()
    {
        $products = Product::all();
        return response()->json($products,200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function createProduct(Request $request)
    {
        $validator = Validator::make($request->only('sphere', 'name', 'delivery_cost'), [
            'sphere' => 'required|string',
            'name' => 'required|string',
            'delivery_cost' => 'integer'
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->messages()], 200);
        }
        if($validator['delivery_cost'] == null){
            $validator['delivery_cost'] == 0;
        }
        $product = Product::create([
            'sphere' => $validator['sphere'],
            'name' => $validator['name'],
            'delivery_cost' => $validator['delivery_cost'],
        ]);
        return response()->json($product,200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function changeProduct(Request $request, $id)
    {
        $validator = Validator::make($request->only('sphere', 'name', 'delivery_cost'), [
            'sphere' => 'string',
            'name' => 'string',
            'delivery_cost' => 'integer'
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->messages()], 200);
        }
        $product = Product::where('id', $id)->first();
        $product->update($validator);
        return response()->json($product,200);
       
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //
    }
}
