import React from "react";
import Bullet from "../Bullet";
import { BulletsSchema} from '../BulletType';


export const getBulletsAsTSXList = (
  bullets:BulletsSchema
)=>bullets.map((bullet:any,index)=>{

    return (<Bullet
    key={index}
    src={bullet.src}
    titleBullet={bullet.titleBullet}
    link={
      bullet.link
      ?
      bullet.link
      :
      {
      url:"",
      atrributeNofollow:false,
      atrributeTitle:"",
      opneNewTab:false,
      newTab:false
    }
  }
    />
  )})

