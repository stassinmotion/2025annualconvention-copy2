
import { Hotel } from '@/types/hotel';
import { beauRivage } from './beauRivage';
import { doubleTree } from './doubleTree';
import { goldenNugget } from './goldenNugget';
import { hardRock } from './hardRock';
import { hotelLegends } from './hotelLegends';
import { ipCasino } from './ipCasino';
import { margaritaville } from './margaritaville';
import { southbeach } from './southbeach';

// Export all hotel data as an array
export const hotelData: Hotel[] = [
  beauRivage,
  doubleTree,
  goldenNugget,
  hardRock,
  hotelLegends,
  ipCasino,
  margaritaville,
  southbeach
];

// Export individual hotels for direct access
export {
  beauRivage,
  doubleTree,
  goldenNugget,
  hardRock,
  hotelLegends,
  ipCasino,
  margaritaville,
  southbeach
};
