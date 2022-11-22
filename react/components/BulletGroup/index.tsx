import React, { PropsWithChildren } from 'react'
import { BulletsSchema } from './BulletType'
import { useDevice } from 'vtex.device-detector'
import { getBulletsAsTSXList } from './modules/bulletsAsList'
import {useListContext} from 'vtex.list-context'



export interface BulletGroupProps {
  bullets: BulletsSchema
}
const BulletGroup = ({
  bullets,
  children,
}: PropsWithChildren<BulletGroupProps>) => {
  const { isMobile } = useDevice()
  const {list} = useListContext() || []

 console.log(list)

  const bulletContent= getBulletsAsTSXList(bullets);


  if (false) {
    children
  }
  return (
   isMobile
   ?
    <div> Estamos en mobile</div>
   :
    <div>{bulletContent}</div>
  )
}

export default BulletGroup
