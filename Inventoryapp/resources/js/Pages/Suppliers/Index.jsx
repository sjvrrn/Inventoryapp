import '@/Layouts/AuthenticatedLayout';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

function suppliers(){
    return(
        <AuthenticatedLayout>
            <div>Suppliers</div>
        </AuthenticatedLayout>
        
    )
}
export default suppliers;