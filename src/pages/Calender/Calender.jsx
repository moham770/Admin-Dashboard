import FullCalendar from "@fullcalendar/react"
import { Paper, Stack, Typography } from "@mui/material"
import { useState } from "react"
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { formatDate } from "@fullcalendar/core"
// @ts-ignore
import styled from './Calender.module.css'
import Header from './../../components/Header/Header';




function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}

function renderSidebarEvent(event) {
  return (
    <li key={event.id}>
      <b>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
      <i>{event.title}</i>
    </li>
  )
}


const Calender = () => {

const [weekendsVisible,setWeekendsVisible] = useState(true)
const [currentEvents,serCurrentEvents] = useState([])
let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

// const INITIAL_EVENTS = [
//   {
//     id: createEventId(),
//     title: 'All-day event',
//     start: todayStr
//   },
//   {
//     id: createEventId(),
//     title: 'Timed event',
//     start: todayStr + 'T12:00:00'
//   }
// ]

function createEventId() {
  return String(eventGuid++)
}

const  handleWeekendsToggle = () => {

  setWeekendsVisible(!weekendsVisible)


}

const  handleDateSelect = (selectInfo) => {
  let title = prompt('Please enter a new title for your event')
  let calendarApi = selectInfo.view.calendar

  calendarApi.unselect() // clear date selection

  if (title) {
    calendarApi.addEvent({
      id: createEventId(),
      title,
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      allDay: selectInfo.allDay
    })
  }
}

const handleEventClick = (clickInfo) => {
  if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
    clickInfo.event.remove()
  }
}

const  handleEvents = (events) => {

  serCurrentEvents(events)

}


  return (
    <>
      <Stack direction="row">
  
        <Paper className={styled.demoAppSidebar}>
          <Typography   align="center" fontWeight="bold" sx={{fontSize:{xs:'14px',sm:'16px',md:'18px'}}} component="h2">All Events ({currentEvents.length})</Typography>
          <ul>
            {currentEvents.map(renderSidebarEvent)}
          </ul>
        </Paper>








      <div className={styled.demoAppMain}>
    <Header Title={"Calender"} subTitle={""}/>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={weekendsVisible}
            // initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
            select={handleDateSelect}
            eventContent={renderEventContent} // custom render function
            eventClick={handleEventClick}
            eventsSet={handleEvents} // called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
          />
        </div>



      </Stack>
      </>
  )
}

export default Calender
