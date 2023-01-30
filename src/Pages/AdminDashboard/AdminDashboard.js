import React from 'react'
import AdminLayout from '../../Components/AdminLayout/AdminLayout';
import AdminDashboardBottom from '../../Components/AdminDashboardBottom/AdminDashboardBottom';

const AdminDashboard = () => {
  return (
    <AdminLayout pageName="dashboard">
      <AdminDashboardBottom/>
    </AdminLayout>
  )
}

export default AdminDashboard
