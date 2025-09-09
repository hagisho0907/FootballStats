import { create } from 'zustand';
import * as Types from '../types';

type TabType = Types.TabType;
type Player = Types.Player;
type PlayerStats = Types.PlayerStats;
type Note = Types.Note;
type Match = Types.Match;
type AIBuddy = Types.AIBuddy;

interface AppState {
  // Navigation
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;

  // Player data
  player: Player | null;
  playerStats: PlayerStats | null;
  setPlayer: (player: Player) => void;
  setPlayerStats: (stats: PlayerStats) => void;

  // Notes
  notes: Note[];
  addNote: (note: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateNote: (id: string, updates: Partial<Note>) => void;
  deleteNote: (id: string) => void;

  // Matches
  matches: Match[];
  setMatches: (matches: Match[]) => void;
  addMatch: (match: Match) => void;

  // AI Buddy
  selectedBuddy: AIBuddy | null;
  setSelectedBuddy: (buddy: AIBuddy | null) => void;

  // Loading states
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  // Navigation
  activeTab: 'home',
  setActiveTab: (tab) => set({ activeTab: tab }),

  // Player data
  player: null,
  playerStats: null,
  setPlayer: (player) => set({ player }),
  setPlayerStats: (stats) => set({ playerStats: stats }),

  // Notes
  notes: [],
  addNote: (noteData) => {
    const newNote: Note = {
      ...noteData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    set((state) => ({ notes: [...state.notes, newNote] }));
  },
  updateNote: (id, updates) => {
    set((state) => ({
      notes: state.notes.map((note) =>
        note.id === id
          ? { ...note, ...updates, updatedAt: new Date().toISOString() }
          : note
      ),
    }));
  },
  deleteNote: (id) => {
    set((state) => ({
      notes: state.notes.filter((note) => note.id !== id),
    }));
  },

  // Matches
  matches: [],
  setMatches: (matches) => set({ matches }),
  addMatch: (match) => {
    set((state) => ({ matches: [...state.matches, match] }));
  },

  // AI Buddy
  selectedBuddy: null,
  setSelectedBuddy: (buddy) => set({ selectedBuddy: buddy }),

  // Loading states
  isLoading: false,
  setLoading: (loading) => set({ isLoading: loading }),
}));