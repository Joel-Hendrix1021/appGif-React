import  { useState } from 'react'

const Form = () => {
    const [search, setSearch] = useState([])

    const handleChange=(n)=>{
        console.log(n.target.value)
    }

    return (
        <>
        <form action="">
            <label htmlFor="search"></label>
            <input onChange={(e)=> handleChange(e)} name="search" type="text" />
             <button>Search</button>
        </form>
        </>
    )
}

export default Form