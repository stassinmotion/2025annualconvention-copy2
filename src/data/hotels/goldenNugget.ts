
import { Hotel } from '@/types/hotel';

export const goldenNugget: Hotel = {
  id: 'golden-nugget',
  name: 'Golden Nugget',
  tagline: 'Hotel & Casino',
  address: '151 Beach Blvd',
  city: 'Biloxi',
  state: 'MS',
  zipCode: '39530',
  rate: '$139',
  cutoffDate: 'May 12, 2025',
  phone: '(800) 777-7568',
  groupCode: 'SC25370',
  hasOnlineBooking: true,
  onlineBookingUrl: 'https://biloxi-reservations.goldennugget.com/classic/en/special_offer?action=show&controller=landings&locale=en&param=SC25370&rate_code[]=SC25370&rate_code[]=SC25370&starting_page=special_offer',
  images: [
    { 
      src: 'https://files.constantcontact.com/d78fca3d801/635532f4-6c97-4b66-a956-164cde794ad5.jpg?rdr=true', 
      alt: 'Golden Nugget Hotel & Casino entrance with illuminated signage' 
    }
  ],
  featuredAmenities: [
    'Casino Gaming',
    'Multiple Restaurants',
    'Pool Deck',
    'Luxury Rooms',
    'Entertainment Venue'
  ]
};
