// Library
import useTranslateScaleAnimation from '../hooks/useTranslateScaleAnimation';

export default function CalendarPage() {

    useTranslateScaleAnimation(".to-animate");

    return(
        <main className="calendar-main" id="calendar-main">
            <h1 className="to-animate">Calendrier</h1>
            <section className="schedule" id="schedule">
                <h2 className="to-animate">Horaire</h2>
                <aside className="to-animate">
                    <div>
                        <p>Lundi</p><p>Mardi</p><p>Mercredi</p><p>Jeudi</p><p>Vendredi</p><p>Samedi</p><p>Dimanche</p>
                    </div>
                    <div>
                        <p>9h-17h</p><p>9h-17h</p><p>9h-17h</p><p>9h-17h</p><p>9h-17h</p><p>9h-17h</p><p>Fermé</p>
                    </div>
                </aside>
                <hr className="to-animate" />
            </section>
        </main>
    )
}