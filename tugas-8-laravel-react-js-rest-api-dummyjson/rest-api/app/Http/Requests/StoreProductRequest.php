<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'product' => ['required', 'min:1', 'max:200'],
            'description' => ['required', 'min:1', 'max:200'],
            'category' => ['required', 'min:1', 'max:200'],
            'price' => ['required', 'min:1', 'max:200']
        ];
    }
}
