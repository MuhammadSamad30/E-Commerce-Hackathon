import FourthSecShop from '@/components/FourthSecShop'
import ShopBanner from '@/components/Shop.ban'
import ShopCard from '@/components/ShopCard'
import ShopMenu from '@/components/ShopMenu'
import React from 'react'

const shop = () => {

  return (
    <div>
        <ShopBanner/>
        <ShopMenu/>
        <ShopCard/>
        <FourthSecShop/>
    </div>
  )
}

export default shop