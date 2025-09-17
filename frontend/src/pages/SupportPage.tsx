import React from 'react';

export const SupportPage: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#02070D', padding: '20px' }}>
      <h2 style={{ color: '#3C8DBC', marginBottom: '16px', fontSize: '24px', fontWeight: 'bold' }}>サポート</h2>
      <div style={{
        backgroundColor: '#FFFFFF',
        padding: '24px',
        borderRadius: '12px',
        border: '4px solid #ef4444',
        marginBottom: '16px',
        textAlign: 'center'
      }}>
        <h3 style={{ color: '#dc2626', fontSize: '40px', fontWeight: 'bold', marginBottom: '16px' }}>開発中</h3>
        <p style={{ color: '#dc2626', fontSize: '18px' }}>このページは現在開発中です</p>
      </div>
    </div>
  );
};