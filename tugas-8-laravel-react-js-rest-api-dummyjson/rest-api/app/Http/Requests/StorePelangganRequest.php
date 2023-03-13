<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePelangganRequest extends FormRequest
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
            'pelanggan' => ['required', 'min:1', 'max:50'],
            'alamat' => ['required', 'min:1', 'max:200'],
            'telp' => ['required', 'min:1' , 'max:12']
        ];
    }
}
