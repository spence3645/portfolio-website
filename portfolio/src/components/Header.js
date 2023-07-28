import React from 'react'
import '../index.css'

const Header = ({name, title}) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <div className='bg-gray-200'>
      <div class="container pt-4 w-60 h-60 mx-auto">
        <img class="rounded-full shadow-xl border-4 border-zinc-900 object-fill h-46 w-46" src={require('../images/headshot.jpg')} alt='' />
      </div>
      <h1 class="pt-5 pb-2 font-bold text-center text-2xl">{name}</h1>
      <h2 class="pb-5 text-center text-xl">{title}</h2>
    </div>
  )
}

export default Header