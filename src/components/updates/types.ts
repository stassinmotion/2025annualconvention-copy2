
// Define the Update type for reuse throughout the updates components
export type AudienceType = 'All' | 'County' | 'Vendor';
export type SortOption = 'newest' | 'oldest';

export interface Update {
  id: number;
  title: string;
  date: string;
  content: string;
  additionalInfo?: string[];
  type?: "important" | "announcement";
  audience: AudienceType | AudienceType[];
  hasDownload: boolean;
  downloadUrl?: string;
}
