
const BuyForm = ({formData,setformData,finishItemsBuy})=>{

    const handleInputChange = (event)=>{
        setformData({
            ...formData,
            [event.target.name]: event.target.value
        }
        )
    }

    const handleSumbit = (event)=>{
        event.preventDefault();
        finishItemsBuy();
    }
    return(
        <>
        <h1>Holaaa</h1>
        <form onSubmit={handleSumbit} >
            <input placeholder="Nombre" type="text" name="name" onChange={handleInputChange}/>
            <input placeholder="Apellido"type="text" name="surname" onChange={handleInputChange}/>
            <input placeholder="Mail" type="email" name="email" onChange={handleInputChange}/>
            <button type="sumbit">Enviar</button>
        </form>
        </>
    )
}

export default BuyForm;