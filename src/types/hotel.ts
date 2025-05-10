
export interface HotelImage {
  src: string;
  alt: string;
}

export interface RoomType {
  name: string;
  description: string;
  amenities: string[];
  images: HotelImage[];
}

export interface Hotel {
  id: string;
  name: string;
  tagline?: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  rate: string;
  cutoffDate: string;
  phone: string;
  phoneExt?: string;
  groupCode: string;
  hasOnlineBooking: boolean;
  onlineBookingUrl?: string;
  images: HotelImage[];
  roomTypes?: RoomType[];
  description?: string;
  featuredAmenities?: string[];
}
