import React, { useState } from 'react';

// Simple page components
const HomePage = () => (
  <div style={{ padding: '0', backgroundColor: '#1a1a1a', minHeight: '100vh', color: 'white' }}>
    {/* Player Profile Section */}
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#059669',
          marginRight: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px'
        }}>👤</div>
        <div>
          <h2 style={{ margin: '0', fontSize: '24px', color: 'white' }}>田中太郎</h2>
          <p style={{ margin: '4px 0 0 0', color: '#9ca3af' }}>FC Club Forward</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '16px',
        marginBottom: '20px'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: 'white' }}>12</div>
          <div style={{ fontSize: '12px', color: '#9ca3af' }}>Matches</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: 'white' }}>950</div>
          <div style={{ fontSize: '12px', color: '#9ca3af' }}>Mins Played</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: 'white' }}>8</div>
          <div style={{ fontSize: '12px', color: '#9ca3af' }}>Goals</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: 'white' }}>7.5</div>
          <div style={{ fontSize: '12px', color: '#9ca3af' }}>Avg Rating</div>
        </div>
      </div>
    </div>

    {/* Dashboard Cards Section - matching image1.png */}
    <div style={{ padding: '0 20px 20px 20px' }}>
      {/* Today's Condition Card */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '16px',
        padding: '20px',
        marginBottom: '16px',
        color: '#1a1a1a'
      }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: 'bold' }}>今日のコンディション</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>🌙</span> 睡眠
            </span>
            <span style={{ fontWeight: 'bold' }}>7.2 時間</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>⚖️</span> 体重
            </span>
            <span style={{ fontWeight: 'bold' }}>65.4 kg</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>💚</span> HRV
            </span>
            <span style={{ fontWeight: 'bold' }}>良好</span>
          </div>
        </div>
      </div>

      {/* Performance Highlights Card */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '16px',
        padding: '20px',
        marginBottom: '16px',
        color: '#1a1a1a'
      }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: 'bold' }}>パフォーマンスハイライト</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>🏃</span> 週間
            </span>
            <span style={{ fontWeight: 'bold' }}>12 h</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>📍</span> 移行サート
            </span>
            <span style={{ fontWeight: 'bold' }}>35.2 km</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>⚽</span> 試合スタッシ
            </span>
            <span style={{ fontWeight: 'bold' }}>2G / 1A</span>
          </div>
        </div>
      </div>

      {/* Schedule Card */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '16px',
        padding: '20px',
        marginBottom: '16px',
        color: '#1a1a1a'
      }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: 'bold' }}>予定</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>📅</span>
            <span>9/10(火) 18:00 て〜</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>⏰</span>
            <span>9/12(木) vs ○○高校</span>
          </div>
        </div>
      </div>

      {/* Coaching Feed Card */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '16px',
        padding: '20px',
        color: '#1a1a1a'
      }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: 'bold' }}>コーチングフィード</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>💬</span>
          <span>フィードバックあり (新着3件)</span>
        </div>
      </div>
    </div>
  </div>
);

const CalendarPage = () => (
  <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '0' }}>
    {/* Tab Navigation */}
    <div style={{
      display: 'flex',
      backgroundColor: 'white',
      borderBottom: '1px solid #e5e7eb'
    }}>
      <button style={{
        flex: 1,
        padding: '16px',
        backgroundColor: 'transparent',
        border: 'none',
        borderBottom: '3px solid #059669',
        color: '#059669',
        fontWeight: 'bold',
        fontSize: '16px'
      }}>
        カレンダー
      </button>
      <button style={{
        flex: 1,
        padding: '16px',
        backgroundColor: 'transparent',
        border: 'none',
        borderBottom: '3px solid transparent',
        color: '#9ca3af',
        fontSize: '16px'
      }}>
        サッカーノート
      </button>
    </div>

    {/* Calendar Header */}
    <div style={{ padding: '20px', backgroundColor: 'white' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <h2 style={{
          margin: 0,
          fontSize: '36px',
          fontStyle: 'italic',
          color: '#9ca3af'
        }}>Calendar</h2>
        <button style={{
          backgroundColor: '#059669',
          color: 'white',
          border: 'none',
          borderRadius: '25px',
          padding: '12px 24px',
          fontSize: '14px',
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          + 新しいノート
        </button>
      </div>

      {/* Month Navigation */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <button style={{
          background: 'none',
          border: 'none',
          fontSize: '24px',
          color: '#059669'
        }}>‹</button>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '36px', color: '#059669', fontWeight: 'bold' }}>09</div>
          <div style={{ fontSize: '18px', color: '#059669' }}>2025</div>
        </div>
        <button style={{
          background: 'none',
          border: 'none',
          fontSize: '24px',
          color: '#059669'
        }}>›</button>
      </div>
    </div>

    {/* Calendar Grid */}
    <div style={{ padding: '0 20px 20px 20px', backgroundColor: 'white' }}>
      {/* Day Headers */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gap: '1px',
        marginBottom: '10px',
        borderBottom: '2px solid #059669',
        paddingBottom: '10px'
      }}>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
          <div key={day} style={{
            textAlign: 'center',
            fontSize: '14px',
            color: index === 0 ? '#ef4444' : index === 6 ? '#3b82f6' : '#6b7280',
            fontWeight: 'bold'
          }}>
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gap: '1px'
      }}>
        {Array.from({length: 30}, (_, i) => i + 1).map((day, index) => (
          <div key={day} style={{
            textAlign: 'center',
            padding: '12px 4px',
            fontSize: '16px',
            color: '#374151',
            cursor: 'pointer',
            borderRadius: '4px'
          }}>
            {day}
          </div>
        ))}
      </div>
    </div>

    {/* Monthly Summary */}
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '16px',
        padding: '20px'
      }}>
        <h3 style={{
          margin: '0 0 16px 0',
          fontSize: '24px',
          fontStyle: 'italic',
          color: '#9ca3af'
        }}>2025・09</h3>
      </div>
    </div>

    {/* Floating Action Button */}
    <button style={{
      position: 'fixed',
      bottom: '100px',
      right: '20px',
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      backgroundColor: '#059669',
      color: 'white',
      border: 'none',
      fontSize: '24px',
      boxShadow: '0 4px 12px rgba(5, 150, 105, 0.4)',
      cursor: 'pointer'
    }}>
      +
    </button>
  </div>
);

const StatsPage = () => (
  <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '20px' }}>
    <h2 style={{ color: '#059669', marginBottom: '20px', fontSize: '24px', fontWeight: 'bold' }}>スタッツ</h2>
    
    {/* Match Cards */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      
      {/* Match 1 - Detailed */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        border: '2px solid #ef4444',
        padding: '20px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h3 style={{
            margin: '0 0 8px 0',
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#1f2937'
          }}>2025/9/8 vs TOKYO UNITED</h3>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '20px',
          alignItems: 'center'
        }}>
          {/* Video Section */}
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '12px',
              color: '#6b7280',
              marginBottom: '8px',
              fontWeight: 'bold'
            }}>動画</div>
            <div style={{
              width: '80px',
              height: '60px',
              backgroundColor: '#4b5563',
              borderRadius: '8px',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px'
            }}>📹</div>
          </div>

          {/* Stats Section */}
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '12px',
              color: '#6b7280',
              marginBottom: '8px',
              fontWeight: 'bold'
            }}>スタッツ</div>
            <div style={{
              width: '80px',
              height: '60px',
              backgroundColor: '#e5e7eb',
              borderRadius: '8px',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}>
              {/* Mock Bar Chart */}
              <div style={{
                display: 'flex',
                alignItems: 'end',
                gap: '4px',
                height: '40px'
              }}>
                <div style={{
                  width: '8px',
                  height: '25px',
                  backgroundColor: '#22c55e',
                  borderRadius: '2px'
                }}></div>
                <div style={{
                  width: '8px',
                  height: '15px',
                  backgroundColor: '#ef4444',
                  borderRadius: '2px'
                }}></div>
                <div style={{
                  width: '8px',
                  height: '35px',
                  backgroundColor: '#3b82f6',
                  borderRadius: '2px'
                }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Match 2 - Simple */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        border: '2px solid #ef4444',
        padding: '20px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h3 style={{
            margin: '0 0 20px 0',
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#1f2937'
          }}>2025/9/1 VS 浅草FC</h3>
          <div style={{
            fontSize: '24px',
            color: '#6b7280',
            fontWeight: 'normal'
          }}>同じもの</div>
        </div>
      </div>

      {/* Match 3 - Placeholder */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        border: '1px solid #e5e7eb',
        padding: '20px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h3 style={{
            margin: '0 0 20px 0',
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#9ca3af'
          }}>2025/8/25 VS FC東京</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
            alignItems: 'center'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '60px',
                height: '45px',
                backgroundColor: '#f3f4f6',
                borderRadius: '8px',
                margin: '0 auto'
              }}></div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '60px',
                height: '45px',
                backgroundColor: '#f3f4f6',
                borderRadius: '8px',
                margin: '0 auto'
              }}></div>
            </div>
          </div>
        </div>
      </div>

    </div>

    {/* Pagination Dots */}
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '12px',
      marginTop: '30px'
    }}>
      <div style={{
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        backgroundColor: '#1f2937'
      }}></div>
      <div style={{
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        backgroundColor: '#d1d5db'
      }}></div>
      <div style={{
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        backgroundColor: '#d1d5db'
      }}></div>
    </div>
  </div>
);

const AIBuddyPage = () => (
  <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '20px' }}>
    <h2 style={{ color: '#059669', marginBottom: '20px', fontSize: '24px', fontWeight: 'bold' }}>AIバディ</h2>
    
    {/* AI Agent Selection */}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '30px' }}>
      
      {/* Personal Highlight Agent */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '16px',
        padding: '20px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        textAlign: 'center',
        cursor: 'pointer',
        border: '2px solid transparent'
      }}>
        <div style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#fef3c7',
          margin: '0 auto 12px auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '28px'
        }}>⭐</div>
        <h3 style={{
          margin: '0 0 8px 0',
          fontSize: '14px',
          fontWeight: 'bold',
          color: '#1f2937'
        }}>プレーハイライト</h3>
        <p style={{
          margin: 0,
          fontSize: '12px',
          color: '#6b7280'
        }}>個人プレー分析</p>
      </div>

      {/* Team Tactics Agent */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '16px',
        padding: '20px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        textAlign: 'center',
        cursor: 'pointer',
        border: '2px solid transparent'
      }}>
        <div style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#dbeafe',
          margin: '0 auto 12px auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '28px'
        }}>📋</div>
        <h3 style={{
          margin: '0 0 8px 0',
          fontSize: '14px',
          fontWeight: 'bold',
          color: '#1f2937'
        }}>チーム戦術</h3>
        <p style={{
          margin: 0,
          fontSize: '12px',
          color: '#6b7280'
        }}>映像・戦術振り返り</p>
      </div>

      {/* Stats Agent */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '16px',
        padding: '20px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        textAlign: 'center',
        cursor: 'pointer',
        border: '2px solid transparent'
      }}>
        <div style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#dcfce7',
          margin: '0 auto 12px auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '28px'
        }}>📊</div>
        <h3 style={{
          margin: '0 0 8px 0',
          fontSize: '14px',
          fontWeight: 'bold',
          color: '#1f2937'
        }}>スタッツ分析</h3>
        <p style={{
          margin: 0,
          fontSize: '12px',
          color: '#6b7280'
        }}>データ振り返り</p>
      </div>

      {/* Medical/Conditioning Agent */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '16px',
        padding: '20px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        textAlign: 'center',
        cursor: 'pointer',
        border: '2px solid transparent'
      }}>
        <div style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#fce7f3',
          margin: '0 auto 12px auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '28px'
        }}>💪</div>
        <h3 style={{
          margin: '0 0 8px 0',
          fontSize: '14px',
          fontWeight: 'bold',
          color: '#1f2937'
        }}>コンディション</h3>
        <p style={{
          margin: 0,
          fontSize: '12px',
          color: '#6b7280'
        }}>メディカルチェック</p>
      </div>

    </div>

    {/* Chat Interface */}
    <div style={{
      backgroundColor: 'white',
      borderRadius: '16px',
      padding: '20px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      marginBottom: '20px'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '16px'
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          backgroundColor: '#059669',
          marginRight: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px'
        }}>🤖</div>
        <div>
          <h4 style={{ margin: '0', fontSize: '16px', fontWeight: 'bold', color: '#1f2937' }}>AIコーチ</h4>
          <p style={{ margin: '2px 0 0 0', fontSize: '12px', color: '#6b7280' }}>どのバディに相談しますか？</p>
        </div>
      </div>

      {/* Sample Messages */}
      <div style={{
        backgroundColor: '#f3f4f6',
        borderRadius: '12px',
        padding: '12px',
        marginBottom: '16px'
      }}>
        <p style={{
          margin: '0',
          fontSize: '14px',
          color: '#374151'
        }}>こんにちは！今日はどんなことについて話しましょうか？</p>
      </div>
    </div>

    {/* Input Area */}
    <div style={{
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '16px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      display: 'flex',
      gap: '12px',
      alignItems: 'center'
    }}>
      <input
        placeholder="メッセージを入力..."
        style={{
          flex: 1,
          padding: '12px',
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          fontSize: '14px'
        }}
      />
      <button style={{
        backgroundColor: '#059669',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        padding: '12px 16px',
        fontSize: '14px',
        cursor: 'pointer'
      }}>
        送信
      </button>
    </div>
  </div>
);

const SupportPage = () => (
  <div style={{ padding: '20px' }}>
    <h2 style={{ color: '#059669', marginBottom: '16px' }}>サポート</h2>
    <div style={{
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      marginBottom: '16px',
      textAlign: 'center'
    }}>
      <h3 style={{ color: '#eab308', fontSize: '24px' }}>開発中</h3>
      <p style={{ color: '#6b7280' }}>このページは現在開発中です</p>
    </div>
  </div>
);

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigation = [
    { id: 'home', label: 'ホーム', icon: '🏠' },
    { id: 'calendar', label: 'カレンダー', icon: '📅' },
    { id: 'stats', label: 'スタッツ', icon: '📊' },
    { id: 'ai-buddy', label: 'AIバディ', icon: '🤖' },
    { id: 'support', label: 'サポート', icon: '⚙️' }
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage />;
      case 'calendar': return <CalendarPage />;
      case 'stats': return <StatsPage />;
      case 'ai-buddy': return <AIBuddyPage />;
      case 'support': return <SupportPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div style={{ 
      fontFamily: 'Inter, system-ui, sans-serif',
      backgroundColor: '#f9fafb',
      minHeight: '100vh',
      paddingBottom: '80px'
    }}>
      {/* Header */}
      <div style={{
        backgroundColor: '#059669',
        color: 'white',
        padding: '16px',
        textAlign: 'center'
      }}>
        <h1 style={{ margin: '0', fontSize: '24px', fontWeight: 'bold' }}>
          footballLOG
        </h1>
        <p style={{ margin: '4px 0 0 0', opacity: 0.9, fontSize: '14px' }}>
          Football Stats & Analytics
        </p>
      </div>

      {/* Main Content */}
      <div style={{
        maxWidth: '448px',
        margin: '0 auto',
        backgroundColor: 'white',
        minHeight: 'calc(100vh - 160px)'
      }}>
        {renderPage()}
      </div>

      {/* Bottom Navigation */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        borderTop: '1px solid #e5e7eb',
        paddingBottom: '8px'
      }}>
        <div style={{
          maxWidth: '448px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-around',
          padding: '8px'
        }}>
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                padding: '8px',
                backgroundColor: currentPage === item.id ? '#059669' : 'transparent',
                borderRadius: '8px',
                border: 'none',
                color: currentPage === item.id ? 'white' : '#6b7280',
                fontSize: '12px',
                fontWeight: '600',
                cursor: 'pointer',
                minWidth: '60px',
                transition: 'all 0.2s ease'
              }}
            >
              <span style={{ fontSize: '20px' }}>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;