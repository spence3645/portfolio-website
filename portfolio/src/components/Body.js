import React from 'react'

const Body = () => {
  return (
    <div>
        <div className='tab-box'>
            <button className='tab-btn'>Projects: Software Development</button>
            <button className='tab-btn'>Projects: Game Development</button>
            <button className='tab-btn'>Courses</button>
            <button className='tab-btn'>About Me</button>
        </div>

        <div>
            <div className='Projects'>
                <h2>Projects</h2>
                <p>Testing the paragraph tag for projects</p>
            </div>

            <div className='Projects'>
                <h2>Courses</h2>
                <p>Testing the paragraph tag for courses</p>
            </div>

            <div className='About'>
                <h2>About Me</h2>
                <p>Testing the paragraph tag for about me</p>
            </div>
        </div>
    </div>
  )
}

export default Body