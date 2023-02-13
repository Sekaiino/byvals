import {useState} from 'react';

const time = ['09:00','10:00', '11:00', '13:00','14:00','15:00', '16:00'];

function Times(props: { date: Date }) {

    const [event, setEvent] = useState(null)
    const [info, setInfo] = useState(false)

    function displayInfo(e: any) {
        setInfo(true);
        setEvent(e.target.innerText);
    }

    return (

        <div className="times">
            <p>Voici les horaires disponibles pour la date du {props.date.toLocaleDateString("en-GB")}</p>
            {time.map(times => {
                return (
                    <div key={times}>
                        <button onClick={(e)=> displayInfo(e)}> {times} </button>
                    </div>
                )
            })}
            <div>
                {info ? `Your appointment is set to ${event} ${props.date.toDateString()}` : null}
            </div>
        </div>
    )
}

export default Times;