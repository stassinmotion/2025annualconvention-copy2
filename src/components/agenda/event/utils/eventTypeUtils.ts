
export const getEventTypeColor = (type: string) => {
  switch (type) {
    case 'general':
      return 'bg-racing-blue text-white';
    case 'education':
      return 'bg-racing-black text-white';
    case 'special':
      return 'bg-racing-red text-white';
    case 'affiliate':
      return 'bg-racing-gray text-white';
    default:
      return 'bg-gray-200 text-gray-800';
  }
};
