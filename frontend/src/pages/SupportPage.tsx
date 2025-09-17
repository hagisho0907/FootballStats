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

      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ 
            backgroundColor: 'white', 
            border: '4px solid #ef4444', 
            borderRadius: '0.5rem', 
            padding: '3rem' 
          }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              color: '#dc2626', 
              marginBottom: '1rem' 
            }}>開発中</h2>
            <p style={{ 
              color: '#dc2626', 
              fontSize: '1.125rem' 
            }}>
              このページは現在開発中です
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};