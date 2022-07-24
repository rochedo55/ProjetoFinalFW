import React ,{useState,useEffect} from "react"
import api from "../../services/api"
import {
  SimpleGrid,
} from "@chakra-ui/react"
import Card from "../Cards"


interface Device{
  id:Number,
  product_name:string,
  product_description:string,
  product_brand:string,
  product_image_link:string
}

export default function HomePage(){
  const [devices,setDevices]=useState<Device[]>([])
  useEffect(()=>{
    async function loadDevices(){
      const res = await api.get('/api/device/')
      setDevices(res.data)
    }
    loadDevices()
  },[])
  return(
   
    

     <SimpleGrid columns={2} spacing={10}>
      {devices.map(device=>(
         <Card key={device.product_brand} image_link={device.product_image_link} id={device.id} name={device.product_name} brand={device.product_brand} description={device.product_description}/>
      ))}
     </SimpleGrid>

     
     
  
  )
}