import React, { useEffect, useState } from 'react'
import "../assets/News.components.css"
import axios from "axios"

const News = () => {
  const [activitiesData, setActivitiesData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const getActivitiesData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_CONNECTION_STRING}activity`)
        setActivitiesData(response.data)
      } catch (err) {
        console.error("Failed to fetch:", err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    getActivitiesData()
  }, [])

  return (
    <div className="news">
      <h3>News [ Activities Archive ]</h3>

      {loading && <p className="loader">Loading activities...</p>}

      {!loading && error && <p className="error">Something went wrong. Please try again later.</p>}

      {!loading && !error && activitiesData.length === 0 && (
        <p className="no-news">No recent news available</p>
      )}

      {!loading && !error && activitiesData.length > 0 && (
        <div className="activities">
          {activitiesData.map((activity) => (
            <div className="activity" key={activity.uid}>
              <div className="date">{activity.date.split("T")[0]}</div>
              <div className="job">
                <span className="keyword">{activity.keyword}&nbsp;<a href={activity.href}>{activity.hyperlink}</a></span> 
              </div>
            </div>
          ))}        
        </div>
      )}
    </div>
  )
}

export default News

