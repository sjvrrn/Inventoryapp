import '@/Layouts/AuthenticatedLayout'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

function Stock(){
    return (
        <AuthenticatedLayout>
             <div>Stock</div>
        </AuthenticatedLayout>
       
    )
}

export default Stock;