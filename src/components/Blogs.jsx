import React, {useState, useEffect} from "react"
import "../assets/Blogs.css"
import axios from "axios"

const BlogsArchive = ()=>{
  const [blogsData, setBlogsData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  
  useEffect(() => {
    const getBlogsData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_CONNECTION_STRING}blogs/archive`)
        setBlogsData(response.data)
      } catch (err) {
        console.error("Failed to fetch:", err)
        setError(true)
      } finally {
        setLoading(false)
        console.log(Array.isArray(blogsData))
      }
    }
    getBlogsData()
  }, [])
  
  return (
    <div className="blogsArchive">
        <div className="strip heading">
          <h1>Blogs Archive</h1>
        </div>
        {loading && <p className="loader">Loading Archive...</p>}

        {!loading && error && <div className="blogs"><p className="error">Something went wrong. Please try again later.</p></div>}

        {!loading && !error && blogsData.length === 0 && (
          <p className="no-blogs">No Data Available Currently...</p>
        )}
        {!loading && !error && blogsData.length > 0 && (
            <div className="blogs">
            {
              blogsData.map((blog)=>(
                <div className="blog" key={blog.id}>
                  <span id="title">{blog.title}</span>
                  <span id="date">{blog.date}</span>
                  <span id="intro">{blog.intro}</span>
                  <span id="read_more">Read More...</span>
                </div>
              ))
            } 
            </div>

        )}
        
    </div>
  )
}

export default BlogsArchive
