import { useForm } from "react-hook-form"
import Swal from "sweetalert2";

const BuyForm = ({ finishItemsBuy, cartItems }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        if(cartItems){
            finishItemsBuy(data);
            Swal.fire({
                icon: 'success',
                title: 'Compra Finalizada',
                confirmButtonText: '<a href="/products" style="text-decoration: none; color: white">Aceptar</a>',
                confirmButtonColor: "#c94c2a",
                background: "antiquewhite",
            })
        }
        else{
            cartItems <= 0 && Swal.fire('Su carrito esta vacio');
        };
    }
    return (
        <>
            <h1>Holaaa</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder="Nombre"
                    type="text"
                    {...register("name", { required: true, maxLength: 30 })} />
                <span>
                    {errors.name && "El campo nombre es obligatorio"}
                </span>
                <input
                    placeholder="Apellido"
                    type="text"
                    {...register("lastname", { required: true, maxLength: 30 })} />
                <span>
                    {errors.lastname && "El campo apellido es obligatorio"}
                </span>
                <input
                    placeholder="Mail"
                    type="email"
                    {...register("email", { required: true, maxLength: 50 })} />
                <span>
                    {errors.email && "El campo mail es obligatorio"}
                </span>
                <button type="sumbit">Enviar</button>
            </form>
        </>
    )
}

export default BuyForm;