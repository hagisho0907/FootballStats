import React, { useState, useEffect } from 'react';
import { useAppStore } from '../stores/useAppStore';
import { mockMatches } from '../data/mockData';
import { Play, BarChart3, X, Calendar } from 'lucide-react';
import { Card } from '../components/ui/Card';
import * as Types from '../types';

type Match = Types.Match;

export const StatsPage: React.FC = () => {
  const { matches, setMatches } = useAppStore();
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);
  const [showStatsModal, setShowStatsModal] = useState(false);

  useEffect(() => {
    // Load mock matches data
    setMatches(mockMatches);
  }, [setMatches]);

  const getResultColor = (result: string) => {
    switch (result) {
      case 'win': return 'bg-green-100 text-green-800';
      case 'lose': return 'bg-red-100 text-red-800';
      case 'draw': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getResultText = (result: string) => {
    switch (result) {
      case 'win': return '勝利';
      case 'lose': return '敗北';
      case 'draw': return '引き分け';
      default: return '不明';
    }
  };

  const handleMatchClick = (match: Match) => {
    setSelectedMatch(match);
  };

  const handleStatsClick = (match: Match) => {
    setSelectedMatch(match);
    setShowStatsModal(true);
  };

  const closeModal = () => {
    setShowStatsModal(false);
    setSelectedMatch(null);
  };

  return (
    <div style="min-h-screen bg-gray-50">
      {/* Header */}
      <div style="bg-gradient-to-r from-footballGreen to-footballGreen-dark text-white p-4">
        <h1 style="text-xl font-bold flex items-center">
          <BarChart3 style="w-6 h-6 mr-2" />
          footballLOG
        </h1>
        <p style="text-green-100 text-sm opacity-90">Stats & Plays</p>
      </div>

      {/* Matches List */}
      <div style="p-4 space-y-4">
        {matches.length === 0 ? (
          <Card style="text-center py-8">
            <p style="text-gray-500">試合データがありません</p>
          </Card>
        ) : (
          matches.map((match) => (
            <Card
              key={match.id}
              style="p-4 cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => handleMatchClick(match)}
            >
              {/* Match Header */}
              <div style="flex justify-between items-start mb-3">
                <div style="flex-1">
                  <div style="flex items-center space-x-2 mb-1">
                    <Calendar style="w-4 h-4 text-gray-400" />
                    <span style="text-sm text-gray-600">
                      {new Date(match.date).toLocaleDateString('ja-JP')}
                    </span>
                  </div>
                  <h3 style="font-semibold text-lg text-gray-900">
                    vs {match.opponent}
                  </h3>
                </div>
                <span style={`px-3 py-1 rounded-full text-sm font-medium ${getResultColor(match.result)}`}>
                  {getResultText(match.result)}
                </span>
              </div>

              {/* Score */}
              <div style="text-center mb-4">
                <div style="text-3xl font-bold text-gray-900">
                  {match.score.home} - {match.score.away}
                </div>
              </div>

              {/* Quick Stats */}
              <div style="grid grid-cols-3 gap-4 mb-4">
                <div style="text-center">
                  <div style="text-xl font-semibold text-footballGreen">
                    {match.stats.goals}
                  </div>
                  <div style="text-xs text-gray-500">ゴール</div>
                </div>
                <div style="text-center">
                  <div style="text-xl font-semibold text-footballGreen">
                    {match.stats.assists}
                  </div>
                  <div style="text-xs text-gray-500">アシスト</div>
                </div>
                <div style="text-center">
                  <div style="text-xl font-semibold text-footballGreen">
                    {match.stats.shots}
                  </div>
                  <div style="text-xs text-gray-500">シュート</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style="flex space-x-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    // Video player would open here
                    alert('動画プレイヤー機能は開発中です');
                  }}
                  style="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700"
                >
                  <Play style="w-4 h-4" />
                  <span style="text-sm">動画</span>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleStatsClick(match);
                  }}
                  style="flex-1 bg-footballGreen text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-footballGreen-dark"
                >
                  <BarChart3 style="w-4 h-4" />
                  <span style="text-sm">詳細スタッツ</span>
                </button>
              </div>
            </Card>
          ))
        )}
      </div>

      {/* Stats Modal */}
      {showStatsModal && selectedMatch && (
        <div style="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div style="bg-white rounded-lg w-full max-w-md max-h-screen overflow-y-auto">
            {/* Modal Header */}
            <div style="flex justify-between items-center p-4 border-b">
              <h2 style="text-lg font-semibold text-gray-900">
                詳細スタッツ
              </h2>
              <button
                onClick={closeModal}
                style="p-1 hover:bg-gray-100 rounded"
              >
                <X style="w-6 h-6 text-gray-500" />
              </button>
            </div>

            {/* Modal Content */}
            <div style="p-4 space-y-4">
              {/* Match Info */}
              <div style="text-center border-b pb-4">
                <h3 style="font-semibold text-lg mb-1">
                  vs {selectedMatch.opponent}
                </h3>
                <div style="text-2xl font-bold text-gray-900 mb-2">
                  {selectedMatch.score.home} - {selectedMatch.score.away}
                </div>
                <span style={`px-3 py-1 rounded-full text-sm font-medium ${getResultColor(selectedMatch.result)}`}>
                  {getResultText(selectedMatch.result)}
                </span>
              </div>

              {/* Basic Stats */}
              <div>
                <h4 style="font-medium text-gray-900 mb-3">基本スタッツ</h4>
                <div style="grid grid-cols-2 gap-4">
                  <div style="bg-gray-50 p-3 rounded-lg text-center">
                    <div style="text-2xl font-bold text-primary-600">
                      {selectedMatch.stats.matches}
                    </div>
                    <div style="text-sm text-gray-600">出場時間</div>
                    <div style="text-xs text-gray-500">
                      {selectedMatch.stats.minsPlayed}分
                    </div>
                  </div>
                  <div style="bg-gray-50 p-3 rounded-lg text-center">
                    <div style="text-2xl font-bold text-primary-600">
                      {selectedMatch.stats.avgRating}
                    </div>
                    <div style="text-sm text-gray-600">平均評価</div>
                  </div>
                </div>
              </div>

              {/* Attack Stats */}
              <div>
                <h4 style="font-medium text-gray-900 mb-3">攻撃スタッツ</h4>
                <div style="space-y-3">
                  <div style="flex justify-between items-center">
                    <span style="text-gray-600">ゴール</span>
                    <span style="font-semibold">{selectedMatch.stats.goals}</span>
                  </div>
                  <div style="flex justify-between items-center">
                    <span style="text-gray-600">アシスト</span>
                    <span style="font-semibold">{selectedMatch.stats.assists}</span>
                  </div>
                  <div style="flex justify-between items-center">
                    <span style="text-gray-600">シュート</span>
                    <span style="font-semibold">{selectedMatch.stats.shots}</span>
                  </div>
                  <div style="flex justify-between items-center">
                    <span style="text-gray-600">枠内シュート</span>
                    <span style="font-semibold">{selectedMatch.stats.shotsOnTarget}</span>
                  </div>
                  <div style="flex justify-between items-center">
                    <span style="text-gray-600">ドリブル成功率</span>
                    <span style="font-semibold">{selectedMatch.stats.dribbleSuccess}%</span>
                  </div>
                </div>
              </div>

              {/* Passing Stats */}
              <div>
                <h4 style="font-medium text-gray-900 mb-3">パススタッツ</h4>
                <div style="space-y-3">
                  <div style="flex justify-between items-center">
                    <span style="text-gray-600">キーパス</span>
                    <span style="font-semibold">{selectedMatch.stats.keyPass}</span>
                  </div>
                  <div>
                    <div style="flex justify-between items-center mb-2">
                      <span style="text-gray-600">パス方向</span>
                    </div>
                    <div style="space-y-1">
                      <div style="flex justify-between text-sm">
                        <span style="text-gray-500">前方</span>
                        <span>{selectedMatch.stats.passingDirection.forward}%</span>
                      </div>
                      <div style="flex justify-between text-sm">
                        <span style="text-gray-500">後方</span>
                        <span>{selectedMatch.stats.passingDirection.backward}%</span>
                      </div>
                      <div style="flex justify-between text-sm">
                        <span style="text-gray-500">横</span>
                        <span>{selectedMatch.stats.passingDirection.hl}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div style="p-4 border-t">
              <button
                onClick={closeModal}
                style="w-full bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
              >
                閉じる
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};