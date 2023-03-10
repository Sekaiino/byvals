// Library
import useTranslateScaleAnimation from "../hooks/useTranslateScaleAnimation";

// CSS
import '../css/Pricing.css';

function Pricing() {
    useTranslateScaleAnimation(".services");

    return(
        <main className="pricing">
            <h1>Tarifs et services</h1>
            <ul className="main-menu">
                <li className="services" id="ongles">
                    <fieldset>
                        <legend>Ongles</legend>
                        <ul>
                            <li className="tarifs"><p>Manucure mains</p><hr/><p>10.5€</p></li>
                            <li className="tarifs"><p>Manugel mains Vernis Semi Permanent</p><hr/><p>25.5€</p></li>
                            <li className="tarifs"><p>Capsule Américaine</p><hr/><p>35€</p></li>
                            <li className="tarifs"><p>Capsule Américaine - retouche</p><hr/><p>30€</p></li>
                            <li className="tarifs"><p>Ongles en résine</p><hr/><p>35€</p></li>
                            <li className="tarifs"><p>Ongles en résine - retouche</p><hr/><p>30€</p></li>
                            <li className="tarifs"><p>Ongle cassé</p><hr/><p>2€</p></li>
                            <li className="tarifs"><p>Soins des pieds + vernis semi permanent</p><hr/><p>15+20€</p></li>
                            <li className="tarifs"><p>Vernis semi permanent pieds</p><hr/><p>20€</p></li>
                            <li className="tarifs"><p>Manucure pieds</p><hr/><p>10.5€</p></li>
                            <li className="tarifs"><p>Décoration ongle</p><hr/><p>0.5€</p></li>
                            <li className="tarifs"><p>Frenche blanche mains</p><hr/><p>30€</p></li>
                            <li className="tarifs"><p>Frenche blanche pieds</p><hr/><p>25€</p></li>
                            <li className="tarifs"><p>Pose vernis normal adulte - enfant</p><hr/><p>9.5€</p></li>
                        </ul>
                    </fieldset>
                </li>
                <li className="services" id="massages">
                    <fieldset>
                        <legend>Massage</legend>
                        <ul>
                            <li className="tarifs"><p>Massage corps – 1h</p><hr/><p>50€</p></li>
                            <li className="tarifs"><p>Massage corps bien être 30 min</p><hr/><p>25€</p></li>
                        </ul>
                    </fieldset>
                </li>
            </ul>
        </main>
    )
}

export default Pricing;