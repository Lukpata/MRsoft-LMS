import React from 'react'
import AdminLayout from '../../Components/AdminLayout/AdminLayout'
import AdminPortalTop from '../../Components/AdminPortalTop/AdminPortalTop';
import StudentRegForm from '../../Components/StudentRegForm/StudentRegForm';

const RegisterStudent = () => {
  return (
    <AdminLayout pageName="registration">
      <AdminPortalTop/>
      <StudentRegForm/>
    </AdminLayout>
  )
}

export default RegisterStudent
