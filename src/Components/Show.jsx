import React, { useEffect, useState } from 'react'
import api from '../data/api'



const Show = () => {

    const [data, setData] = useState([]);
    useEffect(() => {

        const fetchurl = async () => {
            try {
                const response = await api.get('/api/events/events')
                console.log(response.data);
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchurl();
    }, [])
  return (
    <div>
          <ul>
              {data.map((event) => (
                  <li key={event._id} className="mb-4">
                      <h3 className="text-xl font-bold">Title: {event.title}</h3>
                      <p>Description: {event.description}</p>
                      <p>Category: {event.category}</p>
                      <p>Location: {event.location}</p>
                      <p>Date: {new Date(event.date).toLocaleDateString()}</p>
                      <p>Time: {event.time}</p>
                      <p>Ticket Price: ₹{event.ticketPricing}</p>
                      <div className="image-container flex space-x-4">
                          {event.images && event.images.length > 0 ? (
                              event.images.map((image, index) => (
                                  <img
                                      key={index}
                                      src={`https://online-event-management-backend.onrender.com/uploads/${image}`} // Replace with your server URL
                                      alt={event.title}
                                      className="w-32 h-32 object-cover"
                                  />
                              ))
                          ) : (
                              <p>No images available</p>
                          )}
                      </div>
                  </li>
              ))}
          </ul>
    </div>
  )
}

export default Show;
