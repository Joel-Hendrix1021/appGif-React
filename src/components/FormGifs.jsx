
const FormGifs = () => {
 
    const handleChange=(n)=>{
        console.log(n.target.value)
    }

    return (
        <>
        <form >
            <label htmlFor="search"></label>
            <input onChange={(e)=> handleChange(e)} name="search" type="text" />
             <button>Search</button>
        </form>
        </>
    )
}

export default FormGifs