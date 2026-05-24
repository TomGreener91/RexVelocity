export interface Location {
  id: number;
  name: string;
  address: string;
  distance: string;
  lat: number;
  lng: number;
  status: string;
  phone: string;
  hours: string;
  type: string;
  stock: string[];
}

export const locations: Location[] = [
  {
    "id": 1,
    "name": "Apex Fitness Center",
    "address": "123 Performance Way, Soho, London",
    "distance": "0.8 miles",
    "lat": 51.5145,
    "lng": -0.1340,
    "status": "Open",
    "phone": "+44 20 7123 4567",
    "hours": "06:00 - 22:00",
    "type": "Gym & Fitness",
    "stock": ["Original Velocity", "Arctic Surge", "Volcanic Blood Mix"]
  },
  {
    "id": 2,
    "name": "Velocity Supplements",
    "address": "45 High Street, Camden, London",
    "distance": "2.4 miles",
    "lat": 51.5400,
    "lng": -0.1426,
    "status": "Open",
    "phone": "+44 20 8987 6543",
    "hours": "09:00 - 20:00",
    "type": "Retail Specialist",
    "stock": ["Full Arsenal Range"]
  },
  {
    "id": 3,
    "name": "Primal Gym & Spa",
    "address": "88 Riverside, Greenwich, London",
    "distance": "4.1 miles",
    "lat": 51.4826,
    "lng": -0.0077,
    "status": "Closed",
    "phone": "+44 20 3456 7890",
    "hours": "05:00 - 23:00",
    "type": "Elite Training Facility",
    "stock": ["Arctic Surge", "Velocity Bars"]
  },
  {
    "id": 4,
    "name": "Ironworks Barbell Club",
    "address": "22 Iron Lane, Hackney, London",
    "distance": "5.5 miles",
    "lat": 51.5450,
    "lng": -0.0553,
    "status": "Open",
    "phone": "+44 20 7654 3210",
    "hours": "24 Hours",
    "type": "Powerlifting Gym",
    "stock": ["Volcanic Blood Mix", "Original Velocity"]
  },
  {
    "id": 5,
    "name": "Pure Muscle Nutrition",
    "address": "10 Upper Street, Islington, London",
    "distance": "1.2 miles",
    "lat": 51.5362,
    "lng": -0.1030,
    "status": "Open",
    "phone": "+44 20 7333 4444",
    "hours": "10:00 - 19:00",
    "type": "Retail Specialist",
    "stock": ["Full Arsenal Range"]
  },
  {
    "id": 6,
    "name": "The Core Health Hub",
    "address": "5 Borough High St, Southwark, London",
    "distance": "1.8 miles",
    "lat": 51.5030,
    "lng": -0.0889,
    "status": "Open",
    "phone": "+44 20 7222 3333",
    "hours": "06:00 - 21:00",
    "type": "Wellness Center",
    "stock": ["Arctic Surge"]
  },
  {
    "id": 7,
    "name": "Elite Athletics Track",
    "address": "Olympic Park, Stratford, London",
    "distance": "6.2 miles",
    "lat": 51.5420,
    "lng": -0.0036,
    "status": "Open",
    "phone": "+44 20 7111 2222",
    "hours": "06:00 - 22:00",
    "type": "Sports Complex",
    "stock": ["Original Velocity", "Arctic Surge"]
  },
  {
    "id": 8,
    "name": "Titan Barbell Club",
    "address": "40 Wandsworth High St, Wandsworth, London",
    "distance": "4.8 miles",
    "lat": 51.4571,
    "lng": -0.1916,
    "status": "Closed",
    "phone": "+44 20 7888 9999",
    "hours": "07:00 - 21:00",
    "type": "Powerlifting Gym",
    "stock": ["Volcanic Blood Mix"]
  },
  {
    "id": 9,
    "name": "Supreme Fitness",
    "address": "150 Kensington High St, Kensington, London",
    "distance": "3.3 miles",
    "lat": 51.5010,
    "lng": -0.1930,
    "status": "Open",
    "phone": "+44 20 7999 8888",
    "hours": "05:30 - 23:00",
    "type": "Premium Gym",
    "stock": ["Full Arsenal Range"]
  },
  {
    "id": 10,
    "name": "Peak Performance Store",
    "address": "200 King's Rd, Chelsea, London",
    "distance": "2.9 miles",
    "lat": 51.4875,
    "lng": -0.1687,
    "status": "Open",
    "phone": "+44 20 7777 6666",
    "hours": "09:00 - 18:00",
    "type": "Retail Specialist",
    "stock": ["Original Velocity", "Volcanic Blood Mix"]
  }
];
