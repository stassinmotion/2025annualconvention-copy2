
import { Hotel } from '@/types/hotel';

export const ipCasino: Hotel = {
  id: 'ip-casino',
  name: 'IP Casino',
  tagline: 'Resort Spa',
  address: '850 Bayview Ave',
  city: 'Biloxi',
  state: 'MS',
  zipCode: '39530',
  rate: '$79',
  cutoffDate: 'May 17, 2025',
  phone: '(888) 946-2847',
  phoneExt: '1',
  groupCode: 'MASF24C',
  hasOnlineBooking: true,
  onlineBookingUrl: 'https://ipbiloxicasino.boyd.pegsbe.com/promo?accessCode=MASF24C',
  images: [
    { 
      src: 'https://files.constantcontact.com/d78fca3d801/fbcd1bd4-20f0-41e2-a5b2-4921771cdfab.jpg?rdr=true', 
      alt: 'IP Casino Resort Spa' 
    }
  ],
  featuredAmenities: [
    'Spa Services',
    'Casino Gaming',
    'Multiple Restaurants',
    'Live Entertainment',
    'Pool Area'
  ]
};
