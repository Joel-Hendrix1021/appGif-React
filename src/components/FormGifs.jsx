
const FormGifs = ({changeKeyword}) => {
     
    const handleSubmit=(e)=>{
        e.preventDefault()
        changeKeyword(e.target.search.value)
    }
 
    return (
        < >
        <form onSubmit={(e)=>handleSubmit(e)} className="container__search">
            <input  name="search" type="text" />
             <button type="submit"><i className="fas fa-search"></i></button>
        </form>
        </>
    )
}

export default FormGifs