import React from 'react'
import { useEffect, useState } from 'react'
import FetchGif from '../FetchGif'
import ListOfGifs from './ListOfGifs'
import FormGifs from './FormGifs'

export default function Gifs() {
    const [gifs, setGifs] = useState([])
    const [loading, setLoading] = useState(false)
    const [keyword, setKeyword] = useState('panda')

    useEffect(() => {
       setLoading(true)
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
     setLoading(false)
     setGifs(gifs)
 }
const changeKeyword=(n)=>{
    setKeyword(n)
}

   if(loading){
       return(
        <img className="loading" src="https://www.coolmathgameskids.com/devgames/flying-bus-simulator/1uoA.gif" alt="loading" />
       )
   }

    return (
        <div>
        <FormGifs changeKeyword={changeKeyword}/>
        {
        gifs.map(({url, id, title})=> {
            return (
                < ListOfGifs key={id} url={url} id={id} title={title}/>
            )
        })
      }
      </div>
    )
}
