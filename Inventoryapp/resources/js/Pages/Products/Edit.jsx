import '@/Layouts/AuthenticatedLayout'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useForm } from '@inertiajs/react';

function Edit({product}){

    const { data, setData, post, processing, errors } = useForm({
        name: product.name || '',
        sku: product.sku || '',
        price: product.price || '',
        quantity: product.quantity || '',
        description: product.description || '',
        image: null,
        _method: 'PUT',
    });

    const submit = (e) => {
        e.preventDefault();

        post(`/products/${product.id}`);
    };
    return (
        <AuthenticatedLayout>
              <div className="container mt-4">

            <h2>Edit Product</h2>

            <form onSubmit={submit} encType="multipart/form-data">

                <div className="mb-3">
                    <label>Name</label>

                    <input
                        type="text"
                        className="form-control"
                        value={data.name}
                        onChange={(e) =>
                            setData('name', e.target.value)
                        }
                    />

                    {errors.name &&
                        <div className="text-danger">
                            {errors.name}
                        </div>
                    }
                </div>

                <div className="mb-3">
                    <label>SKU</label>

                    <input
                        type="text"
                        className="form-control"
                        value={data.sku}
                        onChange={(e) =>
                            setData('sku', e.target.value)
                        }
                    />
                </div>

                <div className="mb-3">
                    <label>Price</label>

                    <input
                        type="text"
                        className="form-control"
                        value={data.price}
                        onChange={(e) =>
                            setData('price', e.target.value)
                        }
                    />
                </div>

                <div className="mb-3">
                    <label>Quantity</label>

                    <input
                        type="number"
                        className="form-control"
                        value={data.quantity}
                        onChange={(e) =>
                            setData('quantity', e.target.value)
                        }
                    />
                </div>

                <div className="mb-3">
                    <label>Description</label>

                    <textarea
                        className="form-control"
                        value={data.description}
                        onChange={(e) =>
                            setData('description', e.target.value)
                        }
                    />
                </div>

                <div className="mb-3">
                    <label>Current Image</label>

                    <br />

                    {product.image && (
                        <img
                            src={`/storage/products/${product.image}`}
                            width="120"
                        />
                    )}
                </div>

                <div className="mb-3">
                    <label>New Image</label>

                    <input
                        type="file"
                        className="form-control"
                        onChange={(e) =>
                            setData('image', e.target.files[0])
                        }
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={processing}
                >
                    Update Product
                </button>

            </form>
        </div>
        </AuthenticatedLayout>
       
    )
}

export default Edit;