
import { Hotel } from '@/types/hotel';

export const southbeach: Hotel = {
  id: 'southbeach',
  name: 'SouthBeach',
  tagline: 'Hotel & Suites',
  address: '1735 Beach Blvd',
  city: 'Biloxi',
  state: 'MS',
  zipCode: '39530',
  rate: '$195-220',
  cutoffDate: 'May 25, 2025',
  phone: '(228) 388-2627',
  groupCode: 'MSAS 2025',
  hasOnlineBooking: true,
  onlineBookingUrl: 'https://bookings.travelclick.com/15477?groupID=4502725#/guestsandrooms',
  images: [
    { 
      src: 'https://files.constantcontact.com/d78fca3d801/5b0f6693-124f-4844-a799-eebd820019f5.png?rdr=true', 
      alt: 'SouthBeach Hotel & Suites exterior showing modern architecture' 
    }
  ],
  featuredAmenities: [
    'Beachfront Location',
    'All-Suite Accommodations',
    'Kitchenettes',
    'Outdoor Pool',
    'BBQ Area'
  ]
};
