import React from 'react'
import {Link} from "react-router-dom"
import "../assets/Outputs.components.css"

const Outputs = () => {
    return (
        <div className='outputs'>
            <h3>Outputs [ You can click on them ]</h3>
            <Link to="/blogs">
                <div className="move_over output">
                    Blogs
                </div>
            </Link>
            <Link to="/podcasts">
            <div className="move_over output">
                Podcasts
            </div> 
            </Link>
            <Link to="/diaries">
            <div className="move_over output">
                Diary Entries
            </div>

            </Link>
            <a href="https://github.com/student-PiyushMishra/">
            <div className="move_over output">
                GitHub Repositories
            </div></a>
        </div>
    )
}

export default Outputs
