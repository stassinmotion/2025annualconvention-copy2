
export type EventType = 'all' | 'general' | 'education' | 'special';

export interface EventItem {
  id: string;
  time: string;
  title: string;
  description: string;
  location: string;
  type: 'general' | 'education' | 'special';
  speaker?: string;
}

export interface DaySchedule {
  date: string;
  dayOfWeek: string;
  label?: string;
  events: EventItem[];
}

export const agendaDays: DaySchedule[] = [
  {
    date: "June 9, 2025",
    dayOfWeek: "Monday",
    events: [
      {
        id: "mon-1",
        time: "9:00 AM - 4:00 PM",
        title: "EXHIBITOR SETUP",
        description: "Exhibitors arrive and set up their booths for the convention.",
        location: "Exhibition Hall",
        type: "general"
      },
      {
        id: "mon-2",
        time: "1:00 PM - 4:00 PM",
        title: "REGISTRATION DESK OPEN",
        description: "Check-in and registration for all attendees.",
        location: "Main Lobby",
        type: "general"
      },
      {
        id: "mon-3",
        time: "1:15 PM - 1:45 PM",
        title: "AFTERNOON REFRESHMENTS",
        description: "Light refreshments available for registered attendees.",
        location: "Conference Center",
        type: "general"
      },
      {
        id: "mon-4",
        time: "2:00 PM - 3:00 PM",
        title: "EDUCATION SESSIONS",
        description: "First round of education sessions covering various county topics.",
        location: "Conference Rooms",
        type: "education"
      },
      {
        id: "mon-5",
        time: "3:00 PM - 4:00 PM",
        title: "EDUCATION SESSIONS",
        description: "Second round of education sessions with different topics.",
        location: "Conference Rooms",
        type: "education"
      },
      {
        id: "mon-6",
        time: "5:00 PM - 7:30 PM",
        title: "EARLY BIRD RECEPTION",
        description: "Welcome reception for all attendees with networking opportunities.",
        location: "Grand Ballroom",
        type: "special"
      }
    ]
  },
  {
    date: "June 10, 2025",
    dayOfWeek: "Tuesday",
    events: [
      {
        id: "tue-1",
        time: "8:30 AM - 1:00 PM",
        title: "REGISTRATION DESK OPEN",
        description: "Continued registration and check-in for attendees.",
        location: "Main Lobby",
        type: "general"
      },
      {
        id: "tue-2",
        time: "8:30 AM - 3:00 PM",
        title: "EXHIBIT HALL OPEN",
        description: "Exhibitors showcase products and services for county officials.",
        location: "Exhibition Hall",
        type: "general"
      },
      {
        id: "tue-3",
        time: "8:30 AM - 3:00 PM",
        title: "KIDS ZONE OPEN",
        description: "Supervised activities for children of attendees.",
        location: "Kids Area",
        type: "general"
      },
      {
        id: "tue-4",
        time: "9:30 AM - 10:00 AM",
        title: "MORNING REFRESHMENTS",
        description: "Coffee, tea and light breakfast items available.",
        location: "Conference Center",
        type: "general"
      },
      {
        id: "tue-5",
        time: "10:30 AM - 11:15 AM",
        title: "MAS/MASIT ANNUAL MEMBERSHIP MEETINGS & ELECTIONS",
        description: "Annual membership meetings and elections for MAS and MASIT.",
        location: "Grand Ballroom",
        type: "special"
      },
      {
        id: "tue-6",
        time: "11:15 AM - 1:00 PM",
        title: "LUNCH WITH EXHIBITORS",
        description: "Networking lunch with exhibitors.",
        location: "Exhibition Hall",
        type: "general"
      },
      {
        id: "tue-7",
        time: "1:00 PM - 3:00 PM",
        title: "GUEST ACTIVITY: CANVAS PAINTING CLASS",
        description: "Special activity for guests of attendees.",
        location: "Activity Room",
        type: "special"
      },
      {
        id: "tue-8",
        time: "1:00 PM - 3:00 PM",
        title: "CONCURRENT EDUCATION SESSIONS",
        description: "Multiple education sessions running in parallel.",
        location: "Conference Rooms",
        type: "education"
      },
      {
        id: "tue-9",
        time: "2:45 PM",
        title: "ICE CREAM SOCIAL WITH EXHIBITORS",
        description: "Networking opportunity with exhibitors featuring ice cream.",
        location: "Exhibition Hall",
        type: "special"
      }
    ]
  },
  {
    date: "June 11, 2025",
    dayOfWeek: "Wednesday",
    events: [
      {
        id: "wed-1",
        time: "7:30 AM - 8:45 AM",
        title: "BREAKFAST",
        description: "Breakfast for all registered attendees.",
        location: "Dining Hall",
        type: "general"
      },
      {
        id: "wed-2",
        time: "7:30 AM - 11:00 AM",
        title: "REGISTRATION DESK OPEN",
        description: "Final day for registration and check-in.",
        location: "Main Lobby",
        type: "general"
      },
      {
        id: "wed-3",
        time: "7:30 AM - 1:00 PM",
        title: "EXHIBIT HALL OPEN",
        description: "Final day for exhibitor showcases.",
        location: "Exhibition Hall",
        type: "general"
      },
      {
        id: "wed-4",
        time: "7:30 AM - 1:00 PM",
        title: "KIDS ZONE OPEN",
        description: "Supervised activities for children of attendees.",
        location: "Kids Area",
        type: "general"
      },
      {
        id: "wed-5",
        time: "8:45 AM - 10:30 AM",
        title: "NETWORKING WITH EXHIBITORS - GRAND EXHIBITOR DRAWING/DEMO/PRESENTATIONS",
        description: "Special exhibitor showcases, demonstrations and prize drawings.",
        location: "Exhibition Hall",
        type: "general"
      },
      {
        id: "wed-6",
        time: "10:45 AM - 11:45 AM",
        title: "GENERAL ASSEMBLY - STEVE'S LEGISLATIVE UPDATE",
        description: "Update on legislative issues affecting counties.",
        location: "Grand Ballroom",
        type: "general",
        speaker: "Steve Williams, Legislative Director"
      },
      {
        id: "wed-7",
        time: "11:45 AM - 1:00 PM",
        title: "LUNCH WITH EXHIBITORS",
        description: "Final networking lunch with exhibitors.",
        location: "Exhibition Hall",
        type: "general"
      },
      {
        id: "wed-8",
        time: "1:00 PM - 5:00 PM",
        title: "EXHIBITOR BREAKDOWN",
        description: "Exhibitors dismantle their booths.",
        location: "Exhibition Hall",
        type: "general"
      },
      {
        id: "wed-9",
        time: "1:00 PM - 3:00 PM",
        title: "CONCURRENT EDUCATION SESSIONS",
        description: "Final round of education sessions running in parallel.",
        location: "Conference Rooms",
        type: "education"
      },
      {
        id: "wed-10",
        time: "6:00 PM - 8:00 PM",
        title: "MAS ANNUAL COOKOUT",
        description: "Annual cookout at the Hardrock Hotel Pool.",
        location: "Hardrock Hotel Pool",
        type: "special"
      }
    ]
  },
  {
    date: "June 12, 2025",
    dayOfWeek: "Thursday",
    events: [
      {
        id: "thu-1",
        time: "8:30 AM - 12:00 PM",
        title: "CLOSING BREAKFAST/HONORS CEREMONY",
        description: "Closing event featuring breakfast, honors ceremony, memorial ceremony, transition of officers, and supervisor graduation ceremony.",
        location: "Beau Rivage Hotel – Camelia Room",
        type: "special"
      },
      {
        id: "thu-2",
        time: "1:30 PM - 4:00 PM",
        title: "LOCAL INTEREST TOUR",
        description: "Optional tour of local points of interest. Location to be determined.",
        location: "TBD",
        type: "special"
      }
    ]
  }
];

