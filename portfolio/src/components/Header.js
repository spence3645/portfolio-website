import React from 'react'
import '../index.css'

const Header = ({name, title}) => {
  return (
    <div className='header'>
        <img className='portrait' src={require('../images/headshot.jpg')} />
        <h1 style={{textAlign:'center', margin:10}}>{name}</h1>
        <h2 style={{textAlign:'center', margin:10}}>{title}</h2>
    </div>
  )
}

export default Header