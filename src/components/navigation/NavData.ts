import { Home, Calendar, MapPin, Users, ShieldCheck, Info, Mail, Award, Presentation, Store, Hotel, Bell, MessageSquare } from 'lucide-react';

export const navLinks = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Agenda',
    path: '/agenda',
    isDropdown: true,
    dropdownItems: [
      {
        title: 'View Full Agenda',
        path: '/agenda',
      }
    ]
  },
  {
    title: 'Venue',
    path: '/venue',
  },
  {
    title: 'Hotels',
    path: '/hotels',
  },
  {
    title: 'Speakers',
    path: '/speakers',
  },
  {
    title: 'Exhibitors',
    path: '/exhibitors',
  },
  {
    title: 'Updates',
    path: '/updates',
  },
  {
    title: 'Sponsors',
    path: '/sponsors',
  },
  {
    title: 'Sponsorships',
    path: '/sponsorships',
  },
  {
    title: 'Registration',
    path: '#',
    isDropdown: true,
    dropdownItems: [
      {
        title: 'County Registration',
        path: '/registration/county',
      },
      {
        title: 'Vendor Registration',
        path: '/registration/vendor',
      }
    ]
  }
];

export const secondaryNavItems = [
  {
    name: 'About',
    path: '/about',
    icon: Info,
  },
  {
    name: 'Contact',
    path: '/contact',
    icon: Mail,
  },
  {
    name: 'Privacy Policy',
    path: '/privacy',
    icon: ShieldCheck,
  },
  {
    name: 'Terms of Service',
    path: '/terms',
    icon: ShieldCheck,
  },
];

export const adminNavItems = [
  {
    name: 'Dashboard',
    path: '/admin',
    icon: Home,
  },
  {
    name: 'Events',
    path: '/admin/events',
    icon: Calendar,
  },
  {
    name: 'Venues',
    path: '/admin/venues',
    icon: MapPin,
  },
  {
    name: 'Attendees',
    path: '/admin/attendees',
    icon: Users,
  },
];
