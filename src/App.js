import { useEffect, useState} from 'react'
import './App.css';
import Form from './components/Form';

// API_KEY=fN8MEkT7XYCyvrBxosHzU5p2qaXzNJj0

function App() {
   const [gifs, setGifs] = useState([])

   useEffect(() => {
      const getApiGif=async()=>{
        const data = await fetch('https://api.giphy.com/v1/gifs/search?api_key=8D9K3y5paFV3Ub5Hmgsl0fhHUijoLpGb&q=bleach&limit=25&offset=0&rating=g&lang=en')
        const gif = await data.json()
        console.log(gif)
        saveGifs(gif.data)
      }
      getApiGif()
   }, [])

const saveGifs=(n)=>{
    n.forEach(el => {
      let data = {
        id: el.id,
        url: el.images.downsized_medium.url
      }
      setGifs(gif=> [...gif, data])
    });
}



  return (
    <div className="App">
       <h1>Hola</h1>
       <Form/>
        {
         gifs.map(gif=>{
           return(
            <div key={gif.id}>
               <img  src={gif.url} alt="" />
            </div>
            
           )
         })
       } 
    </div>
  );
}

export default App;
