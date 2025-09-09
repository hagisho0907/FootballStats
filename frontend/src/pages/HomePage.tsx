import React, { useEffect } from 'react';
import { useAppStore } from '../stores/useAppStore';
import { mockPlayer, mockPlayerStats, mockPerformanceData } from '../data/mockData';
import { Card } from '../components/ui/Card';
import { StatCard } from '../components/ui/StatCard';
import { Moon, Scale, Heart, Clock, MapPin, Trophy } from 'lucide-react';

export const HomePage: React.FC = () => {
  const { player, playerStats, setPlayer, setPlayerStats } = useAppStore();

  useEffect(() => {
    // Load mock data
    setPlayer(mockPlayer);
    setPlayerStats(mockPlayerStats);
  }, [setPlayer, setPlayerStats]);

  if (!player || !playerStats) {
    return (
      <div style="p-4">
        <div style="animate-pulse space-y-4">
          <div style="h-20 bg-gray-200 rounded-lg"></div>
          <div style="h-32 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    );
  }

  return (
    <div style="min-h-screen bg-dark-900 text-white">
      {/* Header Section */}
      <div style="p-6 pb-4">
        <div style="flex items-center space-x-4 mb-6">
          <div style="w-16 h-16 bg-gradient-to-br from-footballGreen to-footballGreen-dark rounded-full flex items-center justify-center">
            <span style="text-xl font-bold text-white">
              {player.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div>
            <h1 style="text-2xl font-bold text-white">{player.name}</h1>
            <p style="text-gray-300">{player.position}</p>
          </div>
        </div>

        {/* Stats Overview */}
        <div style="grid grid-cols-4 gap-4 mb-6">
          <div style="text-center">
            <div style="text-2xl font-bold text-white">{playerStats.matches}</div>
            <div style="text-sm text-gray-400">Matches</div>
          </div>
          <div style="text-center">
            <div style="text-2xl font-bold text-white">{playerStats.minsPlayed}</div>
            <div style="text-sm text-gray-400">Mins Played</div>
          </div>
          <div style="text-center">
            <div style="text-2xl font-bold text-white">{playerStats.goals}</div>
            <div style="text-sm text-gray-400">Goals</div>
          </div>
          <div style="text-center">
            <div style="text-2xl font-bold text-white">{playerStats.avgRating}</div>
            <div style="text-sm text-gray-400">Avg Rating</div>
          </div>
        </div>
      </div>

      {/* Stats Section - Red Border Area */}
      <div style="px-6">
        <div style="border-2 border-red-500 rounded-lg p-4 mb-6">
          {/* Attack Tab Content */}
          <div style="mb-6">
            <div style="flex space-x-8 mb-4">
              <button style="text-footballGreen border-b-2 border-footballGreen pb-1">Attack</button>
              <button style="text-gray-400">Defense</button>
              <button style="text-gray-400">Passing</button>
              <button style="text-gray-400">Physical</button>
            </div>

            {/* Stats Grid */}
            <div style="space-y-4">
              {/* Shots */}
              <div>
                <div style="flex justify-between items-center mb-2">
                  <span style="text-white text-lg font-semibold">{playerStats.shots}</span>
                  <div style="flex-1 mx-4">
                    <div style="h-8 bg-gray-800 rounded">
                      {/* Blue chart line simulation */}
                      <div style="h-full flex items-center px-2">
                        <div style="w-full h-px bg-footballGreen relative">
                          <div style="absolute right-0 w-2 h-2 bg-footballGreen rounded-full transform translate-y-[-3px]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style="text-gray-400 text-sm">Shots</div>
              </div>

              {/* Shots on Target */}
              <div>
                <div style="text-white text-lg font-semibold">{playerStats.shotsOnTarget}</div>
                <div style="text-gray-400 text-sm">Shots on Target</div>
              </div>

              {/* Stats Row */}
              <div style="grid grid-cols-3 gap-4">
                <div>
                  <div style="text-white text-lg font-semibold">{playerStats.dribbleSuccess}%</div>
                  <div style="text-gray-400 text-sm">Dribble Succ.</div>
                </div>
                <div>
                  <div style="text-white text-lg font-semibold">{playerStats.keyPass}</div>
                  <div style="text-gray-400 text-sm">Key Pass</div>
                </div>
                <div>
                  <div style="text-white text-lg font-semibold">{playerStats.assists}</div>
                  <div style="text-gray-400 text-sm">Assists</div>
                </div>
              </div>

              {/* Passing Direction */}
              <div>
                <div style="text-gray-400 text-sm mb-2">Passing Direction</div>
                <div style="flex items-center space-x-4">
                  {/* Pie Chart Simulation */}
                  <div style="w-20 h-20 rounded-full bg-gradient-to-br from-footballGreen via-footballGreen-light to-footballGreen-dark flex items-center justify-center relative">
                    <div style="text-white text-sm font-semibold">
                      {playerStats.passingDirection.forward}%
                    </div>
                    <div style="absolute -bottom-6 text-xs text-gray-400">Forward</div>
                  </div>
                  <div style="flex-1 space-y-2">
                    <div style="flex justify-between text-sm">
                      <span style="text-gray-400">Backward</span>
                      <span style="text-white">{playerStats.passingDirection.backward}%</span>
                    </div>
                    <div style="flex justify-between text-sm">
                      <span style="text-gray-400">HL</span>
                      <span style="text-white">{playerStats.passingDirection.hl}%</span>
                    </div>
                  </div>
                  {/* Heat map simulation */}
                  <div style="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded opacity-80"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Cards */}
      <div style="px-6 space-y-3">
        <Card style="bg-white p-4">
          <h3 style="text-gray-900 font-semibold mb-3">今日のコンディション</h3>
          <div style="space-y-3">
            <StatCard
              icon={Moon}
              label="睡眠"
              value={mockPerformanceData.sleep}
              unit="時間"
              iconColor="text-blue-500"
            />
            <StatCard
              icon={Scale}
              label="体重"
              value={mockPerformanceData.weight}
              unit="kg"
              iconColor="text-green-500"
            />
            <StatCard
              icon={Heart}
              label="HRV"
              value={mockPerformanceData.hrv}
              iconColor="text-red-500"
            />
          </div>
        </Card>

        <Card style="bg-white p-4">
          <h3 style="text-gray-900 font-semibold mb-3">パフォーマンスハイライト</h3>
          <div style="space-y-3">
            <StatCard
              icon={Clock}
              label="週間"
              value={mockPerformanceData.weeklyHours}
              unit="h"
              iconColor="text-purple-500"
            />
            <StatCard
              icon={MapPin}
              label="信行サアト"
              value={mockPerformanceData.distance}
              unit="km"
              iconColor="text-orange-500"
            />
            <StatCard
              icon={Trophy}
              label="試合スタッツ"
              value={mockPerformanceData.matchStats}
              iconColor="text-yellow-500"
            />
          </div>
        </Card>
      </div>
    </div>
  );
};