
import { Hotel } from '@/types/hotel';

export const margaritaville: Hotel = {
  id: 'margaritaville',
  name: 'Margaritaville',
  tagline: 'Resort',
  address: '195 Beach Blvd',
  city: 'Biloxi',
  state: 'MS',
  zipCode: '39530',
  rate: '$209-229',
  cutoffDate: 'May 8, 2025',
  phone: 'Raven: (228) 271-6338 or Kay: (228)2716348',
  groupCode: 'MS Assn. of Sups.',
  hasOnlineBooking: false,
  images: [
    { 
      src: 'https://files.constantcontact.com/d78fca3d801/27615234-ffd2-48f9-88ee-d6a1838da7cc.jpg?rdr=true', 
      alt: 'Margaritaville Resort' 
    }
  ],
  featuredAmenities: [
    'Family-Friendly Atmosphere',
    'Water Park',
    'Multiple Dining Options',
    'Entertainment Venue',
    'Tropical-Themed Rooms'
  ]
};
