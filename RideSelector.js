const carTypes = [

  { id: 1, name: 'UberGo', multiplier: 1, img: 'https://i.ibb.co/cyvqzpw/ubergo.png' },

  { id: 2, name: 'UberXL', multiplier: 1.5, img: 'https://i.ibb.co/68vypL8/uberxl.png' },

  { id: 3, name: 'Uber Auto', multiplier: 0.8, img: 'https://i.ibb.co/8k5JgJ9/uber-auto.png' }

];

export default function RideSelector() {

  return (

    <div className="mt-6 flex-1 overflow-y-auto">

      <p className="text-gray-500 text-sm mb-4">Choose a ride, or swipe up for more</p>

      {carTypes.map((car) => (

        <div key={car.id} className="flex items-center p-4 mb-2 hover:bg-gray-100 rounded-xl cursor-pointer border border-transparent active:border-black">

          <img src={car.img} alt={car.name} className="h-14 w-14 mr-4" />

          <div className="flex-1">

            <h3 className="font-bold text-lg">{car.name}</h3>

            <p className="text-blue-600 text-sm">4 min away</p>

          </div>

          <p className="font-semibold">₹{(100 * car.multiplier).toFixed(2)}</p>

        </div>

      ))}

    </div>

  )

}

