
import { Hotel } from '@/types/hotel';

export const doubleTree: Hotel = {
  id: 'doubletree',
  name: 'DoubleTree',
  tagline: 'by Hilton Hotel',
  address: '940 Beach Blvd',
  city: 'Biloxi',
  state: 'MS',
  zipCode: '39530',
  rate: '$159-169',
  cutoffDate: 'May 9, 2025',
  phone: '(228) 546-3100',
  groupCode: 'MS Assn. of Sups.',
  hasOnlineBooking: true,
  onlineBookingUrl: 'https://www.hilton.com/en/book/reservation/rooms/?ctyhocn=BIXDTDT&arrivalDate=2025-06-08&departureDate=2025-06-13&groupCode=CDTMSP&room1NumAdults=1&cid=OM%2CWW%2CHILTONLINK%2CEN%2CDirectLink',
  images: [
    { 
      src: 'https://files.constantcontact.com/d78fca3d801/e66403d6-b5ce-4374-9836-1981444c6786.jpg?rdr=true', 
      alt: 'DoubleTree by Hilton Hotel Biloxi exterior view' 
    }
  ],
  featuredAmenities: [
    'Free WiFi',
    'Outdoor Pool',
    'Fitness Center',
    'On-Site Restaurant',
    'Business Center'
  ]
};
