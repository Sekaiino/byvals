// Library
import gsap from 'gsap';

// CSS
import '../css/Home.css';
import {Link} from "react-router-dom";

// Images
import pres1 from "../img/pres1.png";
import pres2 from "../img/pres2.png";
import pres3 from "../img/pres3.png";
import useTranslateScaleAnimation from "../hooks/useTranslateScaleAnimation";

function Home() {

    useTranslateScaleAnimation(".entry-animation");

    document.addEventListener("click", e => {
        if(!e.target) return

        const isPres = (e.target as HTMLDivElement).matches("[data-item]");

        if (isPres) {
            (e.target as HTMLDivElement).classList.remove("not-active");
            (e.target as HTMLDivElement).classList.add("active");

            gsap.to("[data-item].active", {
                width: '40vw',
                duration: 2,
                ease: 'elastic(1, .6)'
            });
        }

        document.querySelectorAll("[data-item].active").forEach(pres => {
            if (pres !== e.target) {
                pres.classList.remove("active");
                pres.classList.add("not-active");
                gsap.to("[data-item].not-active", {
                    width: '15vw',
                    duration: 2.5,
                    ease: 'elastic(1, .3)'
                });
            }
        })
    })

    return (
        <main className="main-home" id="main-home">
            <section className="entry-animation">
                <h1>B<span style={{color: '#dd0f88'}}>y</span>vals - prothésiste ongulaire</h1>
                <p>Indépendante depuis le 01 juillet 2022, j'exerce depuis mon domicile ou le votre sur
                    Fléron et ses alentours. Prenez rendez-vous dès maintenant en
                    cliquant <Link to='/'>ici &#62;</Link></p>
            </section>

            <div className="group entry-animation" id="group">
                <div className="item not-active" style={{backgroundImage: `url(${pres1})`}} data-item=""></div>
                <div className="item not-active" style={{backgroundImage: `url(${pres2})`}} data-item=""></div>
                <div className="item not-active" style={{backgroundImage: `url(${pres3})`}} data-item=""></div>
            </div>

            <p className="entry-animation">Plus d'images en cliquant <Link to="/">ici &#62;</Link></p>
        </main>
    )
}

export default Home;