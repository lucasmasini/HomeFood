import AppDescription from './AppDescription/AppDescription';
import Testimonials from './Testimonials/Testimonials';
import './MainPage.scss';
import Welcome from './Welcome/Welcome';


const MainPage = ()=>{
    return(
        <>
        <section>
            <article>
                <Welcome/>
            </article>
            <article>
                <AppDescription/>
            </article>
            <article>
                <Testimonials/>
            </article>
        </section>
            
        </>
    )
}

export default MainPage;