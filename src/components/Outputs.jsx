import React from 'react'
import {Link} from "react-router-dom"
import "../assets/Outputs.components.css"

const Outputs = () => {
    return (
        <div className='outputs'>
            <h3>Outputs</h3>
            <Link to="/blogs">
                <div className="output">
                    Blogs
                </div>
            </Link>
            <Link to="/podcasts">
            <div className="output">
                Podcasts
            </div> 
            </Link>
            <Link to="/diaries">
            <div className="output">
                Diary Entries
            </div>

            </Link>
            <a href="https://github.com/student-PiyushMishra/">
            <div className="output">
                GitHub Repositories
            </div></a>
        </div>
    )
}

export default Outputs
