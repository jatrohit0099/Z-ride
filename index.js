import Map from '../components/Map'

import RideSelector from '../components/RideSelector'

import { useState } from 'react'

export default function Home() {

  const [pickup, setPickup] = useState('')

  const [destination, setDestination] = useState('')

  return (

    <div className="h-screen w-screen flex flex-col overflow-hidden">

      {/* Navbar */}

      <nav className="h-16 bg-black text-white flex items-center px-6 justify-between z-10">

        <div className="text-2xl font-bold tracking-tighter">Uber</div>

        <div className="flex gap-4 items-center">

          <p>Ride</p>

          <p>Drive</p>

          <div className="w-10 h-10 bg-gray-500 rounded-full"></div>

        </div>

      </nav>

      <div className="flex flex-1 h-full">

        {/* Left Sidebar */}

        <div className="w-[400px] p-6 shadow-xl z-10 flex flex-col bg-white overflow-y-auto">

          <h1 className="text-3xl font-bold mb-6">Get a ride</h1>

          

          {/* Input Box */}

          <div className="bg-gray-100 p-4 rounded-lg relative">

            <div className="absolute left-6 top-10 h-12 border-l-2 border-black"></div>

            <input 

              className="w-full bg-white p-3 mb-2 rounded shadow-sm outline-none" 

              placeholder="Enter pickup location" 

              onChange={(e) => setPickup(e.target.value)}

            />

            <input 

              className="w-full bg-white p-3 rounded shadow-sm outline-none" 

              placeholder="Enter destination" 

              onChange={(e) => setDestination(e.target.value)}

            />

          </div>

          {/* Ride Options */}

          <RideSelector />

          <button className="bg-black text-white w-full py-4 mt-auto rounded-lg font-bold text-lg hover:bg-gray-800 transition">

            Confirm Ride

          </button>

        </div>

        {/* Right Map Section */}

        <div className="flex-1 relative">

          <Map pickup={pickup} destination={destination} />

        </div>

      </div>

    </div>

  )

}

