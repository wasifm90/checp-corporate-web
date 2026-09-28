import { LocationOffice } from '../models';

export const LOCATIONS_DATA: LocationOffice[] = [
  {
    id: 'loc-riyadh',
    city: 'Riyadh',
    region: 'CENTRAL REGION',
    title: 'Riyadh Head Office',
    address: 'King Abdullah Financial District (KAFD), Al Aqiq, Riyadh 13519, Kingdom of Saudi Arabia',
    phone: '+966 11 450 8900',
    email: 'riyadh@checp.com',
    isHQ: true,
    description: 'Corporate headquarters, preconstruction center of excellence, executive leadership, and central commercial operations.'
  },
  {
    id: 'loc-jeddah',
    city: 'Jeddah',
    region: 'WESTERN REGION',
    title: 'Jeddah Western Region Office',
    address: 'King Abdulaziz Road, Al Shati District, Jeddah 23414, Kingdom of Saudi Arabia',
    phone: '+966 12 620 4400',
    email: 'jeddah@checp.com',
    isHQ: false,
    description: 'Directing coastal infrastructure, luxury hospitality destinations, and Red Sea regional developments.'
  },
  {
    id: 'loc-dammam',
    city: 'Dammam',
    region: 'EASTERN REGION',
    title: 'Dammam Eastern Region Office',
    address: 'King Fahd Road, Al Hussam, Khobar / Dammam Metropolitan, Eastern Province 34433, Kingdom of Saudi Arabia',
    phone: '+966 13 830 5500',
    email: 'dammam@checp.com',
    isHQ: false,
    description: 'Overseeing heavy civil engineering, industrial logistics parks, and specialized energy sector infrastructure.'
  }
];
