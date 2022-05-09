import './Testimonials.scss'
import person1 from '../../../assets/persona1.jpg';
import person2 from '../../../assets/persona2.jpg';
import person3 from '../../../assets/persona3.jpg';

const Testimonials = ()=>{
    
    return(
        <>
        <section className='testimonialsContainer'>
            <h2>TESTIMONIOS</h2>
            <article className='testimonialsGroup'>
                <div className='testimonial'>
                    <div className='testimonialImg'>
                        <img src={person1} alt='adasd'/>
                    </div>
                    <div className='testimonialText'>
                        <p>HomeFood me salvo mas de una vez, cuando falle en mis intentos de cocinar, pedi mi plato favorito y llego en minutos.</p>
                        <h5>Estefania</h5>
                    </div>
                </div>
                <div className='testimonial'>
                <div className='testimonialImg'>
                        <img src={person2} alt='adasd'/>
                    </div>
                    <div className='testimonialText'>
                        <p>Estaba en el trabajo y cuando el hambre me ataco, no podia salir por que estaba en una reunion. Pedi por HomeFood y todo solucionado.</p>
                        <h5>Romina</h5>
                    </div>
                </div>
                <div className='testimonial'>
                <div className='testimonialImg'>
                        <img src={person3} alt='adasd'/>
                    </div>
                    <div className='testimonialText'>
                        <p>Estaba mirando una seria con mi pareja y nos entro un antajo enorme de unas hamburguesas. Las pedimos por HomeFood y nos llego en 30 minutos nada mas.</p>
                        <h5>Esteban</h5>
                    </div>
                </div>
            </article>
        </section>
        </>
    );
}

export default Testimonials;