import React from 'react'
import BreadcrumbSection from '../breadcrumb/BreadcrumbSection'
import AuthenticationSection from '../authentication/AuthenticationSection'

const AccountMain = () => {
  return (
    <>
        <BreadcrumbSection title={"My Account"} currentPage={"My Account"}/>
        <AuthenticationSection/>
    </>
  )
}

export default AccountMain