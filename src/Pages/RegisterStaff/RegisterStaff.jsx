import React from 'react'
import AdminLayout from '../../Components/AdminLayout/AdminLayout'
import AdminPortalTop from '../../Components/AdminPortalTop/AdminPortalTop';
import StaffRegForm from '../../Components/StaffRegForm/StaffRegForm';


const RegisterStaff = () => {
  return (
    <AdminLayout pageName="registration">
      <AdminPortalTop/>
      <StaffRegForm/>
    </AdminLayout>
  )
}

export default RegisterStaff
