
export interface Exhibitor {
  id: number;
  name: string;
  logo: string;
  description: string;
  boothNumber: string;
  category: string;
  website: string;
}

export const exhibitorsData: Exhibitor[] = [
  {
    id: 1,
    name: "County Solutions Inc.",
    logo: "/placeholder.svg",
    description: "Providing comprehensive software solutions for county government administration and record keeping.",
    boothNumber: "101",
    category: "Technology",
    website: "#"
  },
  {
    id: 2,
    name: "Mississippi Infrastructure Partners",
    logo: "/placeholder.svg",
    description: "Engineering and construction services specializing in county infrastructure projects.",
    boothNumber: "102",
    category: "Infrastructure",
    website: "#"
  },
  {
    id: 3,
    name: "Rural Healthcare Systems",
    logo: "/placeholder.svg",
    description: "Healthcare management solutions designed specifically for rural and county medical facilities.",
    boothNumber: "103",
    category: "Healthcare",
    website: "#"
  },
  {
    id: 4,
    name: "County Emergency Services",
    logo: "/placeholder.svg",
    description: "Equipment and training for county emergency response teams and first responders.",
    boothNumber: "104",
    category: "Emergency Services",
    website: "#"
  },
  {
    id: 5,
    name: "Local Government Financial Advisors",
    logo: "/placeholder.svg",
    description: "Financial planning and investment services for county governments.",
    boothNumber: "105",
    category: "Finance",
    website: "#"
  },
  {
    id: 6,
    name: "MS County Legal Consultants",
    logo: "/placeholder.svg",
    description: "Legal advisory services specialized in county government regulations and compliance.",
    boothNumber: "106",
    category: "Legal",
    website: "#"
  },
  {
    id: 7,
    name: "Green County Solutions",
    logo: "/placeholder.svg",
    description: "Sustainable and eco-friendly solutions for county operations and facilities.",
    boothNumber: "107",
    category: "Sustainability",
    website: "#"
  },
  {
    id: 8,
    name: "Public Works Equipment Co.",
    logo: "/placeholder.svg",
    description: "Specialized equipment for county road maintenance, waste management, and public works projects.",
    boothNumber: "108",
    category: "Equipment",
    website: "#"
  },
  {
    id: 9,
    name: "County Records Digitization",
    logo: "/placeholder.svg",
    description: "Digital archiving and records management solutions for county governments.",
    boothNumber: "109",
    category: "Technology",
    website: "#"
  }
];

export const getCategories = (): string[] => {
  return Array.from(new Set(exhibitorsData.map(item => item.category)));
};
