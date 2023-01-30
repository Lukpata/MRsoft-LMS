import React from 'react'
import AdminLayout from '../../Components/AdminLayout/AdminLayout'
import RegistrationForm from '../../Components/RegistrationForm/RegistrationForm';
import AdminPortalTop from '../../Components/AdminPortalTop/AdminPortalTop';

const RegisterStudent = () => {
  return (
    <AdminLayout pageName="registration">
      <AdminPortalTop/>
      <RegistrationForm/>
    </AdminLayout>
  )
}

export default RegisterStudent
