const flightsContainer = document.getElementById('flightsContainer');

const flights = [
  {
    id: 1,
    city: 'New York',
    image: 'new-york.jpg',
    airline: 'Delta',
    departure: '2023-06-30 08:00 AM',
    price: '$300'
  },
  {
    id: 2,
    city: 'London',
    image: 'london.jpg',
    airline: 'British Airways',
    departure: '2023-07-05 11:30 AM',
    price: '$500'
  },
  {
    id: 3,
    city: 'Tokyo',
    image: 'tokyo.jpg',
    airline: 'Japan Airlines',
    departure: '2023-07-10 10:00 PM',
    price: '$800'
  },
  {
    id: 4,
    city: 'Paris',
    image: 'paris.jpg',
    airline: 'Air France',
    departure: '2023-07-15 09:00 AM',
    price: '$600'
  },
  {
    id: 5,
    city: 'Sydney',
    image: 'sydney.jpg',
    airline: 'Qantas',
    departure: '2023-07-20 02:00 PM',
    price: '$900'
  },
  {
    id: 6,
    city: 'Dubai',
    image: 'dubai.jpg',
    airline: 'Emirates',
    departure: '2023-07-25 08:30 AM',
    price: '$700'
  }
];

function generateFlightCard(flight) {
  const flightCard = document.createElement('div');
  flightCard.classList.add('flight-card');

  const image = document.createElement('img');
  image.src = `https://i.travelapi.com/lodging/18000000/17310000/17307900/17307848/ba281e6a_z.jpg`;
  flightCard.appendChild(image);

  const title = document.createElement('h2');
  title.textContent = flight.city;
  flightCard.appendChild(title);

  const airline = document.createElement('p');
  airline.textContent = `Airline: ${flight.airline}`;
  flightCard.appendChild(airline);

  const departure = document.createElement('p');
  departure.textContent = `Departure: ${flight.departure}`;
  flightCard.appendChild(departure);

  const price = document.createElement('p');
  price.textContent = `Price: ${flight.price}`;
  flightCard.appendChild(price);

  flightsContainer.appendChild(flightCard);
}

flights.forEach(flight => {
  generateFlightCard(flight);
});
