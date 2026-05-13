import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
function Customers({customers}){
    return(
        <AuthenticatedLayout>
            <div className="container mt-4">
                <h2>Customers List</h2>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer) => (
                            <tr key={customer.id}>
                                <td>{customer.id}</td>
                                <td>{customer.name}</td>
                                <td>{customer.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
                
        </AuthenticatedLayout>
    )
}

export default Customers;