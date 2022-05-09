import { useForm } from "react-hook-form"
import Swal from "sweetalert2";
import { Modal } from "@mui/material";
import { Button } from "@mui/material";
import { useState,useContext} from 'react';
import TextField from '@mui/material/TextField';
import { context } from '../../../Context/CartContext.jsx';
import './BuyForm.scss';

const BuyForm = ({ finishItemsBuy, cartItems,BuyAlert}) => {
    const {clear} = useContext(context);
    const { register, handleSubmit} = useForm();

    const [open, setOpen] = useState(false);
    const handleClose = (event) => {
        event.preventDefault();
        setOpen(!open)
    }
    const onSubmit = (data) => {
        if (cartItems) {
            finishItemsBuy(data);
            setOpen(!open)
            clear();
            BuyAlert();
        }
        else {
            cartItems <= 0 && Swal.fire('Su carrito esta vacio');
        };
    }

    const handleFinishBuy = () => {
        setOpen(!open);
    }

    return (
        <>
            <Button className='deleteButton' onClick={() => handleFinishBuy()}>
                Finalizar compra
            </Button>
            <Modal
                className='buyModal'
                open={open}
                onClose={handleClose}
                aria-labelledby='simple-modal-title'
                aria-describedby='simple-modal-description'
            >
                <div className='buyFormContainer'>
                    <h3>Datos Personales</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            margin="normal"
                            fullWidth
                            required
                            id="standard-required"
                            label="Nombre"
                            type='text'
                            color='warning'
                            {...register("name", { required: true, maxLength: 30 })}
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            required
                            id="standard-required"
                            label="Apellido"
                            type='text'
                            color='warning'
                            {...register("lastname", { required: true, maxLength: 30 })}
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            required
                            id="standard-required"
                            label="Mail"
                            type='email'
                            color='warning'
                            {...register("email", { required: true, maxLength: 30 })}
                        />
                        <div className="sumbitButton">
                            <Button type="sumbit">Enviar</Button>
                        </div>
                    </form>
                </div>
            </Modal>
        </>
    )
}

export default BuyForm;