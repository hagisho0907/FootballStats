import React from 'react';
import { Settings } from 'lucide-react';

export const SupportPage: React.FC = () => {

  return (
    <div style="min-h-screen bg-gray-50">
      {/* Header */}
      <div style="bg-gradient-to-r from-footballGreen to-footballGreen-dark text-white p-4">
        <h1 style="text-xl font-bold flex items-center">
          <Settings style="w-6 h-6 mr-2" />
          footballLOG
        </h1>
        <p style="text-green-100 text-sm mt-1 opacity-90">
          Support
        </p>
      </div>

      <div style="flex-1 flex items-center justify-center p-4">
        <div style="text-center">
          <div style="bg-yellow-50 border border-yellow-200 rounded-lg p-12">
            <h2 style="text-4xl font-bold text-yellow-800 mb-4">開発中</h2>
            <p style="text-yellow-700 text-lg">
              このページは現在開発中です
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};