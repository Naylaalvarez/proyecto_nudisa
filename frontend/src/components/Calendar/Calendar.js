import React, { useEffect, useState } from 'react';
import { gapi } from 'gapi-script';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Usuario ID
const CLIENT_ID = '1003321246058-skeg7t69cgdipio280d5nplt1ja2v8kq.apps.googleusercontent.com';
// Claves de API
const API_KEY = 'AIzaSyBCqgUZTrj-8LxPOhopXrHvErTf-6TG7bI';
// valor fijo de la api
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
// permisos de lectura y escritura
const SCOPES = "https://www.googleapis.com/auth/calendar.events";
//"Ver y editar eventos en todos sus calendarios"

// Configurar el localizador para el calendario
const localizer = momentLocalizer(moment);

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState(''); // Para almacenar el titulo
  const [range, setRange] = useState(null); // Para almacenar el rango seleccionado

  useEffect(() => {
    function start() {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      }).then(() => {
        const authInstance = gapi.auth2.getAuthInstance();
        authInstance.isSignedIn.listen(updateSigninStatus);
        updateSigninStatus(authInstance.isSignedIn.get());
    }).catch(error => {
        console.error("Error en la inicialización de gapi api", error);
            
  });
  }
    gapi.load('client:auth2', start);
  }, []);

  const updateSigninStatus = (isSignedIn) => {
   // setLoading(false);
    if (isSignedIn) {
      listUpcomingEvents();
    } else {
      handleAuthClick();
    }
  };

  const handleAuthClick = () => {
    //setLoading(true); // del inicio de sesion 
    //(si se registra o inicia sesion te da autorizacion para tocar el calendario y poner eventos)
    gapi.auth2.getAuthInstance().signIn().catch(error => {
      console.error("Error en inicio de sesion", error);
      // setLoading(false); 
    });
  };

  const listUpcomingEvents = () => {
    gapi.client.calendar.events.list({
      calendarId: 'primary',
      timeMin: (new Date()).toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime',
    }).then((response) => {
      const events = response.result.items.map(event => ({
        id: event.id,
        title: event.summary,
        start: new Date(event.start.dateTime || event.start.date),
        end: new Date(event.end.dateTime || event.end.date),
      }));
      setEvents(events);
    }).catch(error => {
      console.error("Error al obtener evento", error);
      alert ('no se pudieron obtener los eventos ')
    });
  };

   const createEvent = () => {
    if (!range || !title) {
      console.error("rango o titulo no estan definidos");
      return; // esto evita crear un evento vacio
    }
    const event = {
      summary: title,
      start: {
        dateTime: range.start.toISOString(),
        timeZone: 'America/Argentina/Buenos_Aires',
      },
      end: {
        dateTime: range.end.toISOString(),
        timeZone: 'America/Argentina/Buenos_Aires',
      },
    };
      gapi.client.calendar.events.insert({
          calendarId: 'primary',
          resource: event,
      }).then((response) => {
          console.log('Evento creado: ', response);
          listUpcomingEvents(); // Actualiza la lista de eventos
      }).catch((error) => {
          console.error("Error al crear evento", error);
          alert('No se pudo crear el evento');
      });
    
  };
    
 const handleSelectSlot = (slotInfo) => {
    setRange(slotInfo);
    setTitle(''); // Limpiar el título anterior
  };
 

  return (
    <div>
    <div style={{ height: '500px', margin: '50px' }}>
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable
        // onSelectSlot={handleSelectSlot}
        onSelectSlot={slotInfo => setRange(slotInfo)}
      />
    </div>
    {range && (
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título del evento"
        />
        <button onClick={createEvent}>Crear Evento</button>
      </div>
    )}
  </div>
);
};

export default Calendar;