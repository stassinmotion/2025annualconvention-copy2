
import { Update } from '../types';

// Sample updates data - in a real app, this would come from an API or database
export const sampleUpdates: Update[] = [
  {
    id: 1,
    title: "Registration Opens Monday, March 31",
    date: "March 28, 2025",
    content: "We are excited to announce that registration for the MAS 96th Annual Convention, scheduled for June 9-12, 2025, at the Mississippi Coast Convention Center in Harrison County, Biloxi MS, will officially open on Monday, March 31, 2025, at 9:00 AM. This annual event brings together county officials from across the state to share knowledge and experiences as we Race Toward Excellence in County Government.",
    additionalInfo: [
      "Secure Your REGISTRATION FIRST, Then YOUR HOTEL! To access the room block information you must FIRST REGISTER for the convention.",
      "Shift into savings with our online-exclusive Early Bird Rate beginning 3/31. Register through our member portal in just a few clicks!",
      "Please note that the early bird registration rate will ONLY be available through our online member portal. A direct link for registration will be emailed to you on March 31st."
    ],
    type: "important",
    audience: "County",
    hasDownload: true,
    downloadUrl: "https://myemail.constantcontact.com/-Counties--Start-Your-Engines--Registration-Opens-Monday--March-31.html?soid=1137422694525&aid=wupiYjPb-h8"
  },
  {
    id: 2,
    title: "Registration Now Open",
    date: "March 28, 2025",
    content: "Our conference hotel block is now open for reservations. Book early to secure the conference rate!",
    audience: "All",
    type: "announcement",
    hasDownload: true,
    downloadUrl: "#"
  },
  {
    id: 3,
    title: "How to Login to Your Member Portal",
    date: "March 28, 2025",
    content: "Follow these instructions to access your MAS member portal where you can register for the convention and access exclusive resources.",
    additionalInfo: [
      "Visit the MAS website at www.massup.org and click on the 'Member Login' button in the top right corner.",
      "Enter your email address and password. If this is your first time logging in, use the 'Forgot Password' link to set up your account.",
      "Once logged in, navigate to the 'Convention Registration' section to register for the upcoming event.",
      "If you encounter any issues accessing the portal, please contact our support team at support@massup.org."
    ],
    audience: "County",
    hasDownload: true,
    downloadUrl: "#"
  }
];
