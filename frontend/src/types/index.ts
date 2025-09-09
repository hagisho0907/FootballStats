// Player types
export interface Player {
  id: string;
  name: string;
  position: string;
  team: string;
  avatar?: string;
}

// Stats types
export interface PlayerStats {
  matches: number;
  minsPlayed: number;
  goals: number;
  avgRating: number;
  shots: number;
  shotsOnTarget: number;
  dribbleSuccess: number;
  keyPass: number;
  assists: number;
  passingDirection: {
    forward: number;
    backward: number;
    hl: number;
  };
}

// Performance types
export interface PerformanceData {
  sleep: number;
  weight: number;
  hrv: string;
  weeklyHours: number;
  distance: number;
  matchStats: string;
}

// Calendar/Note types
export interface Note {
  id: string;
  date: string;
  title: string;
  content: string;
  type: 'training' | 'match' | 'general';
  createdAt: string;
  updatedAt: string;
}

// Match types
export interface Match {
  id: string;
  date: string;
  opponent: string;
  result: 'win' | 'lose' | 'draw';
  score: {
    home: number;
    away: number;
  };
  stats: PlayerStats;
  videos: string[];
}

// AI Buddy types
export interface AIBuddy {
  id: string;
  name: string;
  type: 'highlight' | 'tactics' | 'stats' | 'medical' | 'conditioning';
  avatar: string;
  description: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}

// Navigation types
export type TabType = 'home' | 'calendar' | 'stats' | 'ai-buddy' | 'support';