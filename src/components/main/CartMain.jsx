import React from 'react'
import BreadcrumbSection from '../breadcrumb/BreadcrumbSection'
import CartSection from '../cart/CartSection'

const CartMain = () => {
  return (
    <>
        <BreadcrumbSection title={"Cart Page"} currentPage={"Cart"}/>
        <CartSection/>
    </>
  )
}

export default CartMain