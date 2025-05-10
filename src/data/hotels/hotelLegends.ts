
import { Hotel } from '@/types/hotel';

export const hotelLegends: Hotel = {
  id: 'hotel-legends',
  name: 'Hotel Legends',
  tagline: '',
  address: '674 Beach Blvd',
  city: 'Biloxi',
  state: 'MS',
  zipCode: '39530',
  rate: '$199',
  cutoffDate: 'May 8, 2025',
  phone: '(228) 400-4001',
  phoneExt: '7102',
  groupCode: 'MASS25',
  hasOnlineBooking: false,
  images: [
    { 
      src: 'https://files.constantcontact.com/d78fca3d801/6a94474c-815c-498b-9ef9-b3284e7fafdc.jpg?rdr=true', 
      alt: 'Hotel Legends' 
    }
  ],
  featuredAmenities: [
    'Premium Accommodations',
    'Convenient Location',
    'Historic Property',
    'Unique Rooms',
    'Southern Hospitality'
  ]
};
