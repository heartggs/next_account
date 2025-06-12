import {useQuery} from 'react-query'

import { getEventBanners } from '@/remote/banner'

function useEventBanners(){
  //TOOD:user가 계좌를 보유하고 있는가?
  return useQuery(['event-banners'], () => getEventBanners({hasAccount:true}),
  {
    suspense:true
  })

}

export default useEventBanners