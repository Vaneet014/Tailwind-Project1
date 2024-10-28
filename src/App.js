import React, { useState } from 'react';
import Card from './components/card';
import Modal from './components/modal';
import './App.css';
import car1 from './Tesla_s.jpg'
import car2 from './mustang.jpg'
import car3 from './bmw.jpg'

const cars = [
  {
    id: 1,
    name: 'Tesla Model S',
    image: car1,
    description: 'A fully electric luxury sedan with cutting-edge technology.',
  },
  {
    id: 2,
    name: 'Ford Mustang',
    image: car2,
    description: 'A legendary American muscle car with stunning performance.',
  },
  {
    id: 3,
    name: 'BMW M3',
    image: car3,
    description: 'A high-performance sports sedan with impressive handling.',
  },
];

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const openModal = (car) => {
    setSelectedCar(car);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCar(null);
  };

  return (
    <div className="bg-black min-h-screen p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map((car) => (
          <Card
            key={car.id}
            image={car.image}
            name={car.name}
            description={car.description}
            onButtonClick={() => openModal(car)}
          />
        ))}
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} carDetails={selectedCar} />
    </div>
  );
};

export default App;
