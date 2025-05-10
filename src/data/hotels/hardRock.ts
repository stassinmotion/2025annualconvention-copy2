
import { Hotel } from '@/types/hotel';

export const hardRock: Hotel = {
  id: 'hard-rock',
  name: 'Hard Rock',
  tagline: 'Hotel & Casino',
  address: '777 Beach Blvd',
  city: 'Biloxi',
  state: 'MS',
  zipCode: '39530',
  rate: '$169-209',
  cutoffDate: 'May 8, 2025',
  phone: '(877) 877-6256',
  groupCode: 'MAS2025',
  hasOnlineBooking: true,
  onlineBookingUrl: '#',
  images: [
    { 
      src: 'https://files.constantcontact.com/d78fca3d801/dabd4422-d081-410e-8b5c-d54f2bffb6cb.jpg?rdr=true', 
      alt: 'Hard Rock Hotel & Casino' 
    }
  ],
  featuredAmenities: [
    'Rock Memorabilia',
    'Casino Gaming',
    'Live Music Venue',
    'Multiple Dining Options',
    'Gulf View Rooms'
  ]
};
