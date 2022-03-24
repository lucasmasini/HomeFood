import { useState } from "react";

export const CustomButton = ({title})=>{


    const [contador,setContador] = useState(0);
    // const [usuario, setusuario] = useState({});  //Array con muchos usuarios
    // const [usuarios, setusuarios] = useState([]); //Obejto con un usuario

    const ButtonStyle = {
        width: 120,
        height: 60,
        backgroundColor: "red",
        color: "white",
        marginLeft: 50
    };

        const handlerClick= () =>{
        // setusuarios([...usuarios, {name:"Lucas"}]);
        // console.log(usuarios);
        setContador(contador + 1);
        console.log("me apretates pete");
    };

    return(
        <>
            <button style={ButtonStyle} onClick={handlerClick}>{title}</button>
            <h2>{contador}</h2>
        </>
    );
}