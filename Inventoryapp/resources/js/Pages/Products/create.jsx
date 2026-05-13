import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useForm } from '@inertiajs/react';

export default function Create() {

    const { data, setData, post, processing, errors } = useForm({

        name: '',
        sku: '',
        price: '',
        quantity: '',
        description: '',

    });

    const submit = (e) => {

        e.preventDefault();

        post(route('products.store'));

    };

    return (

        <AuthenticatedLayout>

            <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">

                <h1 className="text-2xl font-bold mb-6">
                    Create Product
                </h1>

                <form onSubmit={submit} enctype="multipart/form-data">

                    {/* Name */}
                    <div className="mb-4">

                        <label className="block mb-1">
                            Product Name
                        </label>

                        <input
                            type="text"
                            value={data.name}
                            onChange={(e) =>
                                setData('name', e.target.value)
                            }
                            className="w-full border rounded px-3 py-2"
                        />

                        {errors.name && (
                            <div className="text-red-500 text-sm">
                                {errors.name}
                            </div>
                        )}

                    </div>

                    {/* SKU */}
                    <div className="mb-4">

                        <label className="block mb-1">
                            SKU
                        </label>

                        <input
                            type="text"
                            value={data.sku}
                            onChange={(e) =>
                                setData('sku', e.target.value)
                            }
                            className="w-full border rounded px-3 py-2"
                        />

                        {errors.sku && (
                            <div className="text-red-500 text-sm">
                                {errors.sku}
                            </div>
                        )}

                    </div>

                    {/* Price */}
                    <div className="mb-4">

                        <label className="block mb-1">
                            Price
                        </label>

                        <input
                            type="number"
                            value={data.price}
                            onChange={(e) =>
                                setData('price', e.target.value)
                            }
                            className="w-full border rounded px-3 py-2"
                        />

                    </div>

                    {/* Quantity */}
                    <div className="mb-4">

                        <label className="block mb-1">
                            Quantity
                        </label>

                        <input
                            type="number"
                            value={data.quantity}
                            onChange={(e) =>
                                setData('quantity', e.target.value)
                            }
                            className="w-full border rounded px-3 py-2"
                        />

                    </div>
                    {/* Image*/}
                    <div className="mb-3">
                        <label>Image</label>
                        <input
                            type="file"
                            className="form-control"
                            onChange={(e) =>
                                setData('image', e.target.files[0])
                            }
                        />
                        {errors.image && (
                            <div className="text-danger">
                                {errors.image}
                            </div>
                        )}
                    </div>

                    {/* Description */}
                    <div className="mb-4">

                        <label className="block mb-1">
                            Description
                        </label>

                        <textarea
                            value={data.description}
                            onChange={(e) =>
                                setData('description', e.target.value)
                            }
                            className="w-full border rounded px-3 py-2"
                        />

                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className="border border-blue-500 bd-red-500 text-blue-500 px-4 py-2 rounded"
                    >
                        Save Product
                    </button>

                </form>

            </div>

        </AuthenticatedLayout>

    );
}