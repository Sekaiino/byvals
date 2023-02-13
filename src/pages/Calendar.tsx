// Library
import Calendar from 'react-calendar';
import {useState, useRef, useEffect} from "react";
import useTranslateScaleAnimation from '../hooks/useTranslateScaleAnimation';
import {Link} from "react-router-dom";
import Time from "../components/Time";

// CSS
import '../css/Calendar.css'
export default function CalendarPage() {
    const [date, setDate] = useState(new Date());
    const [showTime, setShowTime] = useState(false)

    let calendarRef = useRef<any>(null);

    useTranslateScaleAnimation(".to-animate");

    useEffect(() => {
        let handler = (event: MouseEvent) => {
            if(calendarRef === null || !calendarRef.current.contains(event.target)) {
                setShowTime(false);
            }
        }
        document.addEventListener("mousedown", handler);

        return() => {document.removeEventListener("mousedown", handler)}
    }, [])

    return(
        <main className="calendar-main">
            <h1 className="to-animate">Calendrier et prise de rendez-vous</h1>
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
            <section id="calendar">
                <h2 className="to-animate">Calendrier</h2>
                <p className="to-animate">
                    Veuillez cliquer sur les dates qui vous intéresse afin de vérifier si un rendez-vous est disponible.<br/>
                    Veuillez noter que je ne prends pas de rendez-vous les dimanches et jours fériés.
                </p>
                <hr className="to-animate"/>
                <Calendar inputRef={calendarRef} className="to-animate" onChange={setDate} value={date} onClickDay={() => setShowTime(true)} />
                <Time showTime={showTime} date={date}/>
                <p className="to-animate">
                    Pour me contacter et/ou prendre tout renseignement supplémentaire, cliquez <Link to="/">ici &#62;</Link>
                </p>
            </section>
        </main>
    )
}