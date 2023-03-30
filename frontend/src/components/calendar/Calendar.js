import React, {useState, useRef} from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import AddEventModal from '../calendar/AddEventModal'
import {Button, Container} from 'react-bootstrap';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import "../../components/calendar/Calendar.css"
import axios from "axios"
import moment from 'moment'
import Footer from "../footer/Footer";
import Sidebar from "../Sidebar";

export default function() {

    const [modalOpen, setModalOpen] = useState(false);
    const [events, setEvents] = useState([])
    const calendarRef= useRef(null)

    const onEventAdded = (event) => {
        let calendarApi = calendarRef.current.getApi()
        calendarApi.addEvent( {
            start: moment(event.start).toDate(),
            end: moment(event.end).toDate(),
            title: event.title
        });
    };


async function handleEventAdd(data) {
    await axios.post("http://localhost:5000/api/calendar/create-event", data.event);
};

async function  handleDateSet(data) {
    const response = await axios.get("http://localhost:5000/api/calendar/get-events?start="+
    moment(data.start).toISOString()+"&end="+moment(data.end).toISOString())
        setEvents(response.data);
};

    return (
        <>
            <div className="min-vh-100 d-flex p-0" >
                <Container className="  mt-2 mb-3">
                    <div className="bg-white">
                    <Container className="cal-container w-75 h-25 mt-5 p-0 ">
                        <Button className="cal-btn mt-3 mb-4" onClick={()=> setModalOpen(true)}>Add Event</Button>

                        <div style= {{position: "relative", zIndex: 0}} >
                            <FullCalendar
                            ref={calendarRef}
                            events={events}
                            plugins = {[dayGridPlugin]}
                            initialView='dayGridMonth'
                            eventAdd={(event) => handleEventAdd(event)}
                            datesSet = {(date) => handleDateSet(date)}   
                            />
                        </div>
                        <AddEventModal isOpen={modalOpen} 
                        onClose={() => setModalOpen(false)} 
                        onEventAdded={event => onEventAdded(event)} />
                    </Container> <br/><br/>
                    </div>
                </Container>
                
            </div>
            <Footer /> 
        </>
    )
}
