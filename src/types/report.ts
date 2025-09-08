export interface Report {
  id: string;
  title: string;
  description: string;
  category: ReportCategory;
  status: ReportStatus;
  priority: Priority;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  images: string[];
  submittedBy: string;
  submittedAt: Date;
  updatedAt: Date;
  assignedTo?: string;
  estimatedResolution?: Date;
}

export type ReportCategory = 
  | 'pothole'
  | 'streetlight'
  | 'trash'
  | 'graffiti'
  | 'water_leak'
  | 'broken_sidewalk'
  | 'traffic_signal'
  | 'other';

export type ReportStatus = 
  | 'submitted'
  | 'acknowledged'
  | 'in_progress' 
  | 'resolved'
  | 'closed';

export type Priority = 'low' | 'medium' | 'high' | 'urgent';

export const CATEGORY_LABELS: Record<ReportCategory, string> = {
  pothole: 'Pothole',
  streetlight: 'Street Light',
  trash: 'Trash/Sanitation',
  graffiti: 'Graffiti',
  water_leak: 'Water Leak',
  broken_sidewalk: 'Broken Sidewalk',
  traffic_signal: 'Traffic Signal',
  other: 'Other'
};

export const STATUS_LABELS: Record<ReportStatus, string> = {
  submitted: 'Submitted',
  acknowledged: 'Acknowledged',
  in_progress: 'In Progress',
  resolved: 'Resolved',
  closed: 'Closed'
};