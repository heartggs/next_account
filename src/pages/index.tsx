import dynamic from 'next/dynamic'
import { useSession } from 'next-auth/react'
import Account from '@components/home/Account'
import { BannerSkeleton } from '@/components/home/EventBanners'
import { CreditScoreSkeleton } from '@/components/home/CreditScore'
import { CardListSkeleton } from '@components/home/CardList'
import Spacing from '@/components/shared/Spacing'

const EventBanners = dynamic(() => import('@/components/home/EventBanners'), {
  ssr: false,
  loading: () => <BannerSkeleton />,
})

const CreditScore = dynamic(() => import('@/components/home/CreditScore'), {
  ssr: false,
  loading: () => <CreditScoreSkeleton />,
})

const CardList = dynamic(() => import('@/components/home/CardList'), {
  ssr: false,
  loading: () => <CardListSkeleton />,
})

export default function Home() {
  const { data } = useSession()

  console.log('data', data)

  return (
    <>
      <EventBanners />
      <Account />
      <Spacing size={8} backgroundColor="gray100" />
      <CreditScore />
      <Spacing size={8} backgroundColor="gray100" />
      <CardList />
    </>
  )
}
