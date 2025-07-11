import React from 'react'
import "../assets/Outputs.components.css"

const Outputs = () => {
    return (
        <div className='outputs'>
            <h3>Outputs</h3>
            <a href="/blogs">
                <div className="output">
                    Blogs
                </div>
            </a>
            <a href="/podcasts">
            <div className="output">
                Podcasts
            </div> 
            </a>
            <a href="/diaries">
            <div className="output">
                Diary Entries
            </div>

            </a>
            <a href="https://github.com/student-PiyushMishra/">
            <div className="output">
                GitHub Repositories
            </div></a>
        </div>
    )
}

export default Outputs
