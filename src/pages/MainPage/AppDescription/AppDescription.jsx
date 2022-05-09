import './AppDescription.scss';
import allDay from '../../../assets/24hs.png';
import reloj from '../../../assets/reloj.png';
import Delivery from '../../../assets/bandejaComida.png';

const AppDescription = ()=>{

    return(
        <>
            <section className="mainDescription">
                <article className="mainDescriptionTitle">
                    <h2>PEDI TU COMIDA FAVORITA EN UN SOLO LUGAR</h2>
                    <h3>¡Deja todo en nuestas manos!</h3>
                </article>
                <article className="mainDescriptionContent">
                    <div className='mainDescriptionContent-1'>
                        <div className='iconContainer'>
                            <img src={reloj} alt='Reloj'/>
                        </div>
                        <h3>¡No pierdas tiempo!</h3>
                        <p>Te llevamos tu comida y platos favoritos a donde estes en solo minutos! Si no cumplimos, el pedido es GRATIS</p>
                    </div>
                    <div className='mainDescriptionContent-2'>
                    <div className='iconContainer'>
                        <img src={allDay} alt='24hs logo'/>
                    </div>
                        <h3>Trabajamos las 24 horas</h3>
                        <p>No importa el horario, trabajamos las 24hs para que nunca pases hambre, ni siquiera a esas horas de bajon</p>
                    </div>
                    <div className='mainDescriptionContent-3'>
                    <div className='iconContainer'>
                        <img src={Delivery} alt='Delivery'/>
                    </div>
                        <h3>¡Las mejores comidas!</h3>
                        <p>Tenes la mayor variedad de platos, para safisfacer desde los amantes de la comida rapida, hasta los palarades mas exigentes</p>
                    </div>                    
                </article>
            </section>
        </>
    );
}

export default AppDescription;