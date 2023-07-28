import React from 'react'

const Body = () => {
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <div>
            <ul class="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
                <li class="w-full">
                    <button class={"inline-block w-full p-4 text-gray-900 bg-gray-250 hover:bg-gray-400 border-hidden" + (openTab === 1 ? "text-white bg-gray-300" : "")} onClick={() => { setOpenTab(1) }}>Projects: Software Development</button>
                </li>
                <li class="w-full">
                    <button class={"inline-block w-full p-4 text-gray-900 bg-gray-250 hover:bg-gray-400 border-hidden" + (openTab === 2 ? "text-white bg-gray-300" : "")} id="profile2-tab" onClick={() => { setOpenTab(2) }}>Projects: Game Development</button>
                </li>
            </ul>

            <div class="bg-gray-300 h-screen">
                <div class={(openTab === 1 ? "" : "hidden ") + "grid grid-rows-3 grid-flow-col h-72 pr-5 pl-5 pt-10"}>
                    <div class="row-span-3 flex">
                        <img class="mx-auto object-fill h-46 w-46" src={require('../images/headshot.jpg')} alt='' />
                    </div>
                    <div class="col-span-2 flex items-center justify-center">
                        <h1 class="text-sm text-gray-900 font-bold text-center text-2xl">Project 1</h1>
                    </div>
                    <div class="row-span-2 col-span-2 flex items-center justify-center">
                        <p class="text-sm text-gray-900 text-center pr-5 pl-5">This is some placeholder content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. Just saying things to have it move over</p>
                    </div>
                    <div class="row-span-3 flex flex items-center justify-center">
                        <button class="text-sm text-gray-900 text-center pr-36 pl-36 font-bold">View</button>
                    </div>
                </div>
                <div class={(openTab === 1 ? "" : "hidden ") + "grid grid-rows-3 grid-flow-col h-72 pr-5 pl-5 pt-10"}>
                    <div class="row-span-3 flex">
                        <img class="mx-auto object-fill h-46 w-46" src={require('../images/headshot.jpg')} alt='' />
                    </div>
                    <div class="col-span-2 flex items-center justify-center">
                        <h1 class="text-sm text-gray-900 font-bold text-center text-2xl">Project 2</h1>
                    </div>
                    <div class="row-span-2 col-span-2 flex items-center justify-center">
                        <p class="text-sm text-gray-900 text-center pr-5 pl-5">This is some placeholder content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. Just saying things to have it move over.</p>
                    </div>
                    <div class="row-span-3 flex flex items-center justify-center">
                        <button class="text-sm text-gray-900 text-center pr-36 pl-36 font-bold">View</button>
                    </div>
                </div>
                <div class={(openTab === 2 ? "" : "hidden ") + "grid grid-rows-3 grid-flow-col h-72 pr-5 pl-5 pt-10"}>
                    <div class="row-span-3 flex">
                        <img class="mx-auto object-fill h-46 w-46" src={require('../images/headshot.jpg')} alt='' />
                    </div>
                    <div class="col-span-2 flex items-center justify-center">
                        <h1 class="text-sm text-gray-900 font-bold text-center text-2xl">Candy Cutter</h1>
                    </div>
                    <div class="row-span-2 col-span-2 flex items-center justify-center">
                        <p class="text-sm text-gray-900 text-center pr-5 pl-5">This is some placeholder content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. Just saying things to have it move over</p>
                    </div>
                    <div class="row-span-3 flex flex items-center justify-center">
                        <button class="text-sm text-gray-900 text-center pr-36 pl-36 font-bold">View</button>
                    </div>
                </div>
                <div class={(openTab === 2 ? "" : "hidden ") + "grid grid-rows-3 grid-flow-col h-72 pr-5 pl-5 pt-10"}>
                    <div class="row-span-3 flex">
                        <img class="mx-auto object-fill h-46 w-46" src={require('../images/headshot.jpg')} alt='' />
                    </div>
                    <div class="col-span-2 flex items-center justify-center">
                        <h1 class="text-sm text-gray-900 font-bold text-center text-2xl">Project 2</h1>
                    </div>
                    <div class="row-span-2 col-span-2 flex items-center justify-center">
                        <p class="text-sm text-gray-900 text-center pr-5 pl-5">This is some placeholder content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. Just saying things to have it move over</p>
                    </div>
                    <div class="row-span-3 flex flex items-center justify-center">
                        <button class="text-sm text-gray-900 text-center pr-36 pl-36 font-bold">View</button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Body