import React from 'react';
import { Settings } from 'lucide-react';

export const SupportPage: React.FC = () => {

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(to right, #10b981, #059669)', color: 'white', padding: '1rem' }}>
        <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
          <Settings style={{ width: '1.5rem', height: '1.5rem', marginRight: '0.5rem' }} />
          footballLOG
        </h1>
        <p style={{ color: '#d1fae5', fontSize: '0.875rem', marginTop: '0.25rem', opacity: 0.9 }}>
          Support
        </p>
      </div>

      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', minHeight: 'calc(100vh - 80px)' }}>
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