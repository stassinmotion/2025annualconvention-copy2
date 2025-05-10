
import { Hotel } from '@/types/hotel';

export const beauRivage: Hotel = {
  id: 'beau-rivage',
  name: 'Beau Rivage',
  tagline: 'Resort & Casino',
  address: '875 Beach Blvd',
  city: 'Biloxi',
  state: 'MS',
  zipCode: '39530',
  rate: '$179-199',
  cutoffDate: 'May 8, 2025',
  phone: '(888) 567-6667',
  groupCode: 'MS Assn. of Sups.',
  hasOnlineBooking: true,
  onlineBookingUrl: 'https://book.passkey.com/event/50657744/owner/22426/home',
  images: [
    { 
      src: 'https://files.constantcontact.com/d78fca3d801/c00455ac-a4c0-436c-9a1e-fa52c101de47.jpg?rdr=true', 
      alt: 'Beau Rivage Resort & Casino illuminated at night with its distinctive golden facade' 
    }
  ],
  featuredAmenities: [
    'Luxury Accommodations',
    'Casino Gaming',
    'Multiple Dining Options',
    'Spa Services',
    'Gulf View Rooms Available'
  ]
};
