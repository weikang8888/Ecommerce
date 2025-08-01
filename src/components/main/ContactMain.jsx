import React from 'react'
import BreadcrumbSection from '../breadcrumb/BreadcrumbSection'
import ContactSection from '../contact/ContactSection'
import LocationSection from '../map/LocationSection'

const ContactMain = () => {
  return (
    <>
        <BreadcrumbSection title={"Contact Page"} currentPage={"Contact"}/>
        <ContactSection/>
        <LocationSection/>
    </>
  )
}

export default ContactMain