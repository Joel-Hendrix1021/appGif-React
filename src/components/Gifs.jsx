import React from 'react'
import { useEffect, useState } from 'react'
import FetchGif from '../FetchGif'
import ListOfGifs from './ListOfGifs'

export default function Gifs({keyword}) {
    const [gifs, setGifs] = useState([])

    useEffect(() => {
      const getGif=async ()=>{
         const res = await FetchGif(keyword)
         saveGifs(res)
      }
       getGif()
    }, [keyword])
 
 const saveGifs=(n)=>{
     const gifs = n.map((el)=>{
        const {images, id , title} = el
        const {downsized_medium} = images
        const {url} = downsized_medium
        return {id, title, url}
     })
     console.log(gifs)
     setGifs(gifs)
 }

    return (
        gifs.map(({url, id, title})=> {
            return (
                < ListOfGifs key={id} url={url} id={id} title={title}/>
            )
        })
      
    )
}
