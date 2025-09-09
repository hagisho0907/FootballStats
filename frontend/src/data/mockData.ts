import * as Types from '../types';

type Player = Types.Player;
type PlayerStats = Types.PlayerStats;
type PerformanceData = Types.PerformanceData;
type Note = Types.Note;
type Match = Types.Match;
type AIBuddy = Types.AIBuddy;
type ChatMessage = Types.ChatMessage;

export const mockPlayer: Player = {
  id: '1',
  name: 'Alex Morgan',
  position: 'FC Club Forward',
  team: 'FC Club',
  avatar: '/images/player-avatar.jpg'
};

export const mockPlayerStats: PlayerStats = {
  matches: 25,
  minsPlayed: 1920,
  goals: 16,
  avgRating: 7.20,
  shots: 48,
  shotsOnTarget: 23,
  dribbleSuccess: 72.5,
  keyPass: 20,
  assists: 4,
  passingDirection: {
    forward: 43,
    backward: 37,
    hl: 20
  }
};

export const mockPerformanceData: PerformanceData = {
  sleep: 7.2,
  weight: 65.4,
  hrv: '良好',
  weeklyHours: 12,
  distance: 35.2,
  matchStats: '2G / 1A'
};

export const mockNotes: Note[] = [
  {
    id: '1',
    date: '2025-09-09',
    title: '練習ノート',
    content: 'シュート練習を重点的に行った。フリーキックの精度が向上している。',
    type: 'training',
    createdAt: '2025-09-09T10:00:00Z',
    updatedAt: '2025-09-09T10:00:00Z'
  },
  {
    id: '2',
    date: '2025-09-08',
    title: '試合振り返り',
    content: '前半は良い動きができていたが、後半にスタミナ切れを感じた。',
    type: 'match',
    createdAt: '2025-09-08T18:00:00Z',
    updatedAt: '2025-09-08T18:00:00Z'
  }
];

export const mockMatches: Match[] = [
  {
    id: '1',
    date: '2025-09-08',
    opponent: '○○高校',
    result: 'win',
    score: { home: 2, away: 1 },
    stats: mockPlayerStats,
    videos: ['/videos/match1.mp4']
  },
  {
    id: '2',
    date: '2025-09-01',
    opponent: '△△FC',
    result: 'draw',
    score: { home: 1, away: 1 },
    stats: mockPlayerStats,
    videos: ['/videos/match2.mp4']
  }
];

export const mockAIBuddies: AIBuddy[] = [
  {
    id: '1',
    name: 'プレーアナリスト',
    type: 'highlight',
    avatar: '/images/ai-analyst.png',
    description: '個人プレーのハイライトを分析し、改善点を提案します'
  },
  {
    id: '2',
    name: '戦術コーチ',
    type: 'tactics',
    avatar: '/images/ai-tactics.png',
    description: 'チーム戦術や映像を振り返り、戦術理解を深めます'
  },
  {
    id: '3',
    name: 'スタッツアドバイザー',
    type: 'stats',
    avatar: '/images/ai-stats.png',
    description: 'スタッツデータを分析し、パフォーマンス向上をサポートします'
  },
  {
    id: '4',
    name: 'フィジカルコーチ',
    type: 'conditioning',
    avatar: '/images/ai-physical.png',
    description: 'コンディションをチェックし、最適なトレーニングを提案します'
  }
];

export const mockChatMessages: ChatMessage[] = [
  {
    id: '1',
    role: 'assistant',
    content: 'こんにちは！今日の調子はいかがですか？何かお手伝いできることがあれば教えてください。',
    timestamp: '2025-09-09T10:00:00Z'
  }
];