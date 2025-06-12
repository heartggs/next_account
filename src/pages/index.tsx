import dynamic from 'next/dynamic'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Skeleton from '@/components/shared/Skeleton'
import Account from '@components/home/account'
import { BannerSkeleton } from '@/components/home/EventBanners'


const EventBanners = dynamic(() => import('@/components/home/EventBanners'),{
  ssr:false,
  loading :()=> (
    <BannerSkeleton/>
  )
}) 

export default function Home() {
  return (
    <>
      <EventBanners/>
      <Account/>
    </>
  )
}