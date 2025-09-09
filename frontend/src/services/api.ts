import * as Types from '../types';

type ApiResponse<T> = Types.ApiResponse<T>;
type PaginatedResponse<T> = Types.PaginatedResponse<T>;
type Player = Types.Player;
type PlayerStats = Types.PlayerStats;
type Note = Types.Note;
type Match = Types.Match;

// Base API configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

class ApiClient {
  private async request<T>(endpoint: string, options?: RequestInit): Promise<ApiResponse<T>> {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Player endpoints
  async getPlayer(id: string): Promise<ApiResponse<Player>> {
    return this.request(`/players/${id}`);
  }

  async getPlayerStats(playerId: string): Promise<ApiResponse<PlayerStats>> {
    return this.request(`/players/${playerId}/stats`);
  }

  async updatePlayer(id: string, data: Partial<Player>): Promise<ApiResponse<Player>> {
    return this.request(`/players/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  // Notes endpoints
  async getNotes(playerId: string): Promise<ApiResponse<PaginatedResponse<Note>>> {
    return this.request(`/players/${playerId}/notes`);
  }

  async createNote(playerId: string, note: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>): Promise<ApiResponse<Note>> {
    return this.request(`/players/${playerId}/notes`, {
      method: 'POST',
      body: JSON.stringify(note),
    });
  }

  async updateNote(playerId: string, noteId: string, updates: Partial<Note>): Promise<ApiResponse<Note>> {
    return this.request(`/players/${playerId}/notes/${noteId}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    });
  }

  async deleteNote(playerId: string, noteId: string): Promise<ApiResponse<void>> {
    return this.request(`/players/${playerId}/notes/${noteId}`, {
      method: 'DELETE',
    });
  }

  // Match endpoints
  async getMatches(playerId: string): Promise<ApiResponse<PaginatedResponse<Match>>> {
    return this.request(`/players/${playerId}/matches`);
  }

  async createMatch(playerId: string, match: Omit<Match, 'id'>): Promise<ApiResponse<Match>> {
    return this.request(`/players/${playerId}/matches`, {
      method: 'POST',
      body: JSON.stringify(match),
    });
  }

  async getMatchStats(playerId: string, matchId: string): Promise<ApiResponse<PlayerStats>> {
    return this.request(`/players/${playerId}/matches/${matchId}/stats`);
  }

  // Statistics endpoints
  async getSeasonStats(playerId: string, season?: string): Promise<ApiResponse<PlayerStats>> {
    const seasonParam = season ? `?season=${season}` : '';
    return this.request(`/players/${playerId}/season-stats${seasonParam}`);
  }
}

// Export singleton instance
export const apiClient = new ApiClient();

// Utility functions for mock data (development only)
export const mockApiDelay = (ms: number = 500) => 
  new Promise(resolve => setTimeout(resolve, ms));