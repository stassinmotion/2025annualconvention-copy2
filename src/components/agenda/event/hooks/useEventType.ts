
export const useEventType = (type: string, title: string) => {
  const isEducationSession = type === 'education' || title.toUpperCase().includes('GENERAL ASSEMBLY');

  return {
    isEducationSession
  };
};
