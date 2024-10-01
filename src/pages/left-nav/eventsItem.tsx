import { EventsTsx } from '../../types/events/events';
import { EventsInfo } from '../../types/events/events';

type EventsProps = {
    // tutaj mo�na doda� co� jeszcze:
    // np. liczba:number
    events: EventsTsx
}
export const EventsItem = (props: EventsProps) => {
    // dodalismy to, poniewaz w propsie mo�emy mie� kilka innych rzeczy, a potrzebujemy tylko wydarzenia
    const { events } = props; // z propsa pobieramy samo wydarzenia
    return (
        <tr>
            <td>{events.date}</td>
            <td>{events.time}</td>
            <td>{events.events}</td>
            <td>{events.address}</td>
            <td>{events.category}</td>
        </tr>
    )
}

type EventsInfoProps = {
    eventsInfo: EventsInfo
}

export const EventsInfoMonthItem = (props: EventsInfoProps) => {
    const { eventsInfo } = props;
    return (
        <tr>
            <td>{eventsInfo.month}</td>
            <td>{eventsInfo.quantityOfEvents}</td>
        </tr>
    )
}

export const EventsInfoVoivodeshipItem = (props: EventsInfoProps) => {
    const { eventsInfo } = props;
    return (
        <tr>
            <td>{eventsInfo.province}</td>
            <td>{eventsInfo.quantityOfEvents}</td>
        </tr>
    )
}

export const UpcomingEventsInfoItem = (props: EventsInfoProps) => {
    const { eventsInfo } = props;
    return (
        <tr>
            <td>{eventsInfo.name}</td>
            <td>{eventsInfo.quantityOfTicketsPurchased}</td>
        </tr>
    )
}

export const InterestInTheEventsItem = (props: EventsInfoProps) => {
    const { eventsInfo } = props;
    return (
        <tr>
            <td>{eventsInfo.name}</td>
            <td>{eventsInfo.numberOfQueries}</td>
        </tr>
    )
}