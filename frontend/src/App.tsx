import React from 'react';

function App() {
  return (
    <div style={{ 
      fontFamily: 'Inter, system-ui, sans-serif',
      padding: '20px',
      backgroundColor: '#f0fdf4',
      minHeight: '100vh'
    }}>
      <h1 style={{ color: '#059669', textAlign: 'center' }}>
        footballLOG
      </h1>
      <p style={{ textAlign: 'center', color: '#6b7280' }}>
        アプリが正常に動作しています ⚽
      </p>
      
      <div style={{
        maxWidth: '400px',
        margin: '20px auto',
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ color: '#111827', marginBottom: '16px' }}>
          主な機能
        </h2>
        <ul style={{ color: '#6b7280', lineHeight: '1.6' }}>
          <li>📊 選手統計管理</li>
          <li>📅 カレンダー & ノート</li>
          <li>⚽ 試合データ分析</li>
          <li>🤖 AI アシスタント</li>
          <li>⚙️ サポート</li>
        </ul>
      </div>
    </div>
  );
}

export default App;