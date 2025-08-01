import React from 'react'
import BreadcrumbSection from '../breadcrumb/BreadcrumbSection'
import WishlistSection from '../wishlist/WishlistSection'

const WishListMain = () => {
  return (
    <>
        <BreadcrumbSection title={"Wishlist Page"} currentPage={"Wishlist"}/>
        <WishlistSection/>
    </>
  )
}

export default WishListMain