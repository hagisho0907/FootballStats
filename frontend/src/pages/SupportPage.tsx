import React from 'react';
import { Settings } from 'lucide-react';

export const SupportPage: React.FC = () => {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-footballGreen to-footballGreen-dark text-white p-4">
        <h1 className="text-xl font-bold flex items-center">
          <Settings className="w-6 h-6 mr-2" />
          footballLOG
        </h1>
        <p className="text-green-100 text-sm mt-1 opacity-90">
          Support
        </p>
      </div>

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="bg-white border-4 border-red-500 rounded-lg p-12">
            <h2 className="text-4xl font-bold text-red-600 mb-4">開発中</h2>
            <p className="text-red-600 text-lg">
              このページは現在開発中です
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};