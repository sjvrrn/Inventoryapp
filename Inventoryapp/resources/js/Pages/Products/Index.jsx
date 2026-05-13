import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';

export default function Index({ products }) {

    return (

        <AuthenticatedLayout>

            <div className="flex justify-between items-center mb-6">

                <h1 className="text-2xl font-bold">
                    Products
                </h1>

                <Link
                    href={route('products.create')}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Add Product
                </Link>

            </div>

            <div className="bg-white shadow rounded overflow-hidden">

                <table className="w-full">

                    <thead className="bg-gray-200">

                        <tr>

                            <th className="text-left p-3">
                                ID
                            </th>

                            <th className="text-left p-3">
                                Name
                            </th>

                            <th className="text-left p-3">
                                SKU
                            </th>

                            <th className="text-left p-3">
                                Price
                            </th>

                            <th className="text-left p-3">
                                Quantity
                            </th>

                            <th className="text-left p-3">
                                Image
                            </th>
                            <th className="text-left p-3">
                                Description
                            </th>
                            <th>
                                Edit
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {products.length > 0 ? (

                            products.map((product) => (

                                <tr
                                    key={product.id}
                                    className="border-b"
                                >

                                    <td className="p-3">
                                        {product.id}
                                    </td>

                                    <td className="p-3">
                                        {product.name}
                                    </td>

                                    <td className="p-3">
                                        {product.sku}
                                    </td>

                                    <td className="p-3">
                                        {product.price}
                                    </td>

                                    <td className="p-3">
                                        {product.quantity}
                                    </td>

                                    <td>
                                        <img
                                            src={`/storage/products/${product.image}`}
                                            width="80"
                                        />
                                    </td>
                                    
                                    <td className="p-3">
                                        {product.description}
                                    </td>
                                    <td>
                                        <Link href={`/products/${product.id}/edit`}
    className="btn btn-warning"> Edit </Link>
                                    </td>
                                </tr>

                            ))

                        ) : (

                            <tr>

                                <td
                                    colSpan="6"
                                    className="text-center p-4"
                                >
                                    No Products Found
                                </td>

                            </tr>

                        )}

                    </tbody>

                </table>

            </div>

        </AuthenticatedLayout>

    );
}