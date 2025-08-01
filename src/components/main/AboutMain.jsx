import React from 'react'
import BreadcrumbSection from '../breadcrumb/BreadcrumbSection'
import StorySection from '../story/StorySection'
import StoreSection from '../store/StoreSection'


const AboutMain = () => (
    <>
        <BreadcrumbSection title={"About Us"} currentPage={"About"} />
        <StorySection/>
        <StoreSection/>
    </>
)

export default AboutMain