import FeaturedCollection from '@/app/(site)/components/FeaturedCollection'
import Hero from '@/app/(site)/components/Hero'
import ShopToLook from '@/app/(site)/components/ShopToLook';
import CustomerSection from '@/app/(site)/components/CustomerSection';
import InstaShop from '@/app/(site)/components/InstaShop';
import Trending from './components/Trending';
import Sale from './components/Sale';

export default function Home() {

  return (
        <>
          <Hero/>
          <FeaturedCollection />
          <Trending />
          <ShopToLook />
          <Sale />
          <CustomerSection />
          <InstaShop />
        </>
  )
}
