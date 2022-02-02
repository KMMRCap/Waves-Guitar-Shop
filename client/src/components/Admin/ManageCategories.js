import React from 'react';
import UserLayout from '../../hoc/UserLayout'
import ManageBrands from './ManageBrands'
import ManageWoods from './ManageWoods'

const ManageCategories = () => {
    return (
        <UserLayout>
            <ManageBrands />
            <ManageWoods />
        </UserLayout>
    );
}

export default ManageCategories;