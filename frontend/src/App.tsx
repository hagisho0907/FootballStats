import React, { useState } from 'react';

// Simple page components
const HomePage = () => (
  <div style={{ padding: '0', backgroundColor: '#02070D', minHeight: '100vh', color: '#FBF9FA' }}>
    {/* Player Profile Section */}
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#00385B',
          marginRight: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px'
        }}>👤</div>
        <div>
          <h2 style={{ margin: '0', fontSize: '24px', color: '#FBF9FA' }}>田中太郎</h2>
          <p style={{ margin: '4px 0 0 0', color: '#3C8DBC' }}>FC Club Forward</p>
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
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#FBF9FA' }}>25</div>
          <div style={{ fontSize: '12px', color: '#3C8DBC' }}>Matches</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#FBF9FA' }}>1920</div>
          <div style={{ fontSize: '12px', color: '#3C8DBC' }}>Mins Played</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#FBF9FA' }}>16</div>
          <div style={{ fontSize: '12px', color: '#3C8DBC' }}>Goals</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#FBF9FA' }}>7.20</div>
          <div style={{ fontSize: '12px', color: '#3C8DBC' }}>Avg Rating</div>
        </div>
      </div>
    </div>

    {/* Stats Section with Tab Navigation - matching image2.png red box */}
    <div style={{
      backgroundColor: '#031C32',
      borderRadius: '16px 16px 0 0',
      padding: '20px',
      margin: '0 20px'
    }}>
      {/* Tab Navigation */}
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        {[
          { name: 'Attack', color: '#3C8DBC', active: true },
          { name: 'Defense', color: '#FBF9FA', active: false },
          { name: 'Passing', color: '#FBF9FA', active: false },
          { name: 'Physical', color: '#FBF9FA', active: false }
        ].map((tab, index) => (
          <button key={tab.name} style={{
            padding: '8px 16px',
            backgroundColor: 'transparent',
            color: tab.color,
            border: 'none',
            borderBottom: tab.active ? `2px solid ${tab.color}` : '2px solid transparent',
            marginRight: '8px',
            fontSize: '14px',
            cursor: 'pointer',
            fontWeight: tab.active ? 'bold' : 'normal'
          }}>
            {tab.name}
          </button>
        ))}
      </div>

      {/* Attack Stats */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          <div>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#FBF9FA' }}>48</div>
            <div style={{ fontSize: '12px', color: '#3C8DBC' }}>Shots</div>
          </div>
          <div>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#FBF9FA' }}>23</div>
            <div style={{ fontSize: '12px', color: '#3C8DBC' }}>Shots on Target</div>
          </div>
          <div>
            <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#FBF9FA' }}>72.5%</div>
            <div style={{ fontSize: '12px', color: '#3C8DBC' }}>Dribble Succ.</div>
          </div>
        </div>
      </div>

      {/* Additional Stats Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '20px' }}>
        <div>
          <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#FBF9FA' }}>20</div>
          <div style={{ fontSize: '12px', color: '#3C8DBC' }}>Key Pass</div>
        </div>
        <div>
          <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#FBF9FA' }}>4</div>
          <div style={{ fontSize: '12px', color: '#3C8DBC' }}>Assists</div>
        </div>
      </div>

      {/* Passing Direction Chart */}
      <div style={{ marginTop: '20px' }}>
        <h4 style={{ color: '#FBF9FA', margin: '0 0 12px 0' }}>Passing Direction</h4>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '8px',
          textAlign: 'center'
        }}>
          <div>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#24A0FF' }}>43%</div>
            <div style={{ fontSize: '12px', color: '#3C8DBC' }}>Forward</div>
          </div>
          <div>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#026ACB' }}>37%</div>
            <div style={{ fontSize: '12px', color: '#3C8DBC' }}>Backward</div>
          </div>
          <div>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#00385B' }}>20%</div>
            <div style={{ fontSize: '12px', color: '#3C8DBC' }}>HL</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CalendarPage = () => (
  <div style={{ backgroundColor: '#02070D', minHeight: '100vh', padding: '0' }}>
    {/* Tab Navigation */}
    <div style={{
      display: 'flex',
      backgroundColor: '#02070D',
      borderBottom: '1px solid #031C32'
    }}>
      <button style={{
        flex: 1,
        padding: '16px',
        backgroundColor: 'transparent',
        border: 'none',
        borderBottom: '3px solid #3C8DBC',
        color: '#3C8DBC',
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
        color: '#FBF9FA',
        fontSize: '16px'
      }}>
        サッカーノート
      </button>
    </div>

    {/* Calendar Header */}
    <div style={{ padding: '20px', backgroundColor: '#02070D' }}>
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
          color: '#3C8DBC'
        }}>Calendar</h2>
        <button style={{
          backgroundColor: '#3C8DBC',
          color: '#FBF9FA',
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
          color: '#3C8DBC'
        }}>‹</button>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '36px', color: '#3C8DBC', fontWeight: 'bold' }}>09</div>
          <div style={{ fontSize: '18px', color: '#3C8DBC' }}>2025</div>
        </div>
        <button style={{
          background: 'none',
          border: 'none',
          fontSize: '24px',
          color: '#3C8DBC'
        }}>›</button>
      </div>
    </div>

    {/* Calendar Grid */}
    <div style={{ padding: '0 20px 20px 20px', backgroundColor: '#02070D' }}>
      {/* Day Headers */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gap: '1px',
        marginBottom: '10px',
        borderBottom: '2px solid #3C8DBC',
        paddingBottom: '10px'
      }}>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
          <div key={day} style={{
            textAlign: 'center',
            fontSize: '14px',
            color: index === 0 ? '#24A0FF' : index === 6 ? '#026ACB' : '#FBF9FA',
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
            color: '#FBF9FA',
            cursor: 'pointer',
            borderRadius: '4px'
          }}>
            {day}
          </div>
        ))}
      </div>
    </div>

    {/* Monthly Summary */}
    <div style={{ padding: '20px', backgroundColor: '#02070D' }}>
      <div style={{
        backgroundColor: '#031C32',
        borderRadius: '16px',
        padding: '20px'
      }}>
        <h3 style={{
          margin: '0 0 16px 0',
          fontSize: '24px',
          fontStyle: 'italic',
          color: '#3C8DBC'
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
      backgroundColor: '#3C8DBC',
      color: '#FBF9FA',
      border: 'none',
      fontSize: '24px',
      boxShadow: '0 4px 12px rgba(60, 141, 188, 0.4)',
      cursor: 'pointer'
    }}>
      +
    </button>
  </div>
);

const StatsPage = () => (
  <div style={{ backgroundColor: '#02070D', minHeight: '100vh', padding: '20px' }}>
    <h2 style={{ color: '#3C8DBC', marginBottom: '20px', fontSize: '24px', fontWeight: 'bold' }}>スタッツ</h2>
    
    {/* Match Cards */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      
      {/* Match 1 - Detailed */}
      <div style={{
        backgroundColor: '#031C32',
        borderRadius: '12px',
        border: '2px solid #24A0FF',
        padding: '20px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h3 style={{
            margin: '0 0 8px 0',
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#FBF9FA'
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
        backgroundColor: '#031C32',
        borderRadius: '12px',
        border: '2px solid #026ACB',
        padding: '20px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h3 style={{
            margin: '0 0 20px 0',
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#FBF9FA'
          }}>2025/9/1 VS 浅草FC</h3>
          <div style={{
            fontSize: '24px',
            color: '#3C8DBC',
            fontWeight: 'normal'
          }}>同じもの</div>
        </div>
      </div>

      {/* Match 3 - Placeholder */}
      <div style={{
        backgroundColor: '#031C32',
        borderRadius: '12px',
        border: '1px solid #00385B',
        padding: '20px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h3 style={{
            margin: '0 0 20px 0',
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#3C8DBC'
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
                backgroundColor: '#00385B',
                borderRadius: '8px',
                margin: '0 auto'
              }}></div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '60px',
                height: '45px',
                backgroundColor: '#00385B',
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
  <div style={{ backgroundColor: '#02070D', minHeight: '100vh', padding: '20px' }}>
    <h2 style={{ color: '#3C8DBC', marginBottom: '20px', fontSize: '24px', fontWeight: 'bold' }}>AIバディ</h2>
    
    {/* AI Agent Selection */}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '30px' }}>
      
      {/* Personal Highlight Agent */}
      <div style={{
        backgroundColor: '#031C32',
        borderRadius: '16px',
        padding: '20px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
        textAlign: 'center',
        cursor: 'pointer',
        border: '2px solid transparent'
      }}>
        <div style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#00385B',
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
          color: '#FBF9FA'
        }}>プレーハイライト</h3>
        <p style={{
          margin: 0,
          fontSize: '12px',
          color: '#3C8DBC'
        }}>個人プレー分析</p>
      </div>

      {/* Team Tactics Agent */}
      <div style={{
        backgroundColor: '#031C32',
        borderRadius: '16px',
        padding: '20px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
        textAlign: 'center',
        cursor: 'pointer',
        border: '2px solid transparent'
      }}>
        <div style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#026ACB',
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
          color: '#FBF9FA'
        }}>チーム戦術</h3>
        <p style={{
          margin: 0,
          fontSize: '12px',
          color: '#3C8DBC'
        }}>映像・戦術振り返り</p>
      </div>

      {/* Stats Agent */}
      <div style={{
        backgroundColor: '#031C32',
        borderRadius: '16px',
        padding: '20px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
        textAlign: 'center',
        cursor: 'pointer',
        border: '2px solid transparent'
      }}>
        <div style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#24A0FF',
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
          color: '#FBF9FA'
        }}>スタッツ分析</h3>
        <p style={{
          margin: 0,
          fontSize: '12px',
          color: '#3C8DBC'
        }}>データ振り返り</p>
      </div>

      {/* Medical/Conditioning Agent */}
      <div style={{
        backgroundColor: '#031C32',
        borderRadius: '16px',
        padding: '20px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
        textAlign: 'center',
        cursor: 'pointer',
        border: '2px solid transparent'
      }}>
        <div style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#3C8DBC',
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
          color: '#FBF9FA'
        }}>コンディション</h3>
        <p style={{
          margin: 0,
          fontSize: '12px',
          color: '#3C8DBC'
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
  <div style={{ backgroundColor: '#02070D', minHeight: '100vh', padding: '20px' }}>
    <h2 style={{ color: '#3C8DBC', marginBottom: '16px', fontSize: '24px', fontWeight: 'bold' }}>サポート</h2>
    <div style={{
      backgroundColor: '#031C32',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
      marginBottom: '16px',
      textAlign: 'center'
    }}>
      <h3 style={{ color: '#24A0FF', fontSize: '24px' }}>開発中</h3>
      <p style={{ color: '#3C8DBC' }}>このページは現在開発中です</p>
    </div>
  </div>
);

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigation = [
    { id: 'calendar', label: 'カレンダー', iconPath: '/icon3.svg' },
    { id: 'stats', label: 'スタッツ', iconPath: '/icon2.svg' },
    { id: 'home', label: 'ホーム', iconPath: '/icon1.svg' },
    { id: 'ai-buddy', label: 'AIバディ', iconPath: '/icon4.svg' },
    { id: 'support', label: 'サポート', iconPath: '/icon5.svg' }
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
      backgroundColor: '#02070D',
      minHeight: '100vh',
      paddingBottom: '80px'
    }}>
      {/* Header */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: '#02070D',
        color: '#FBF9FA',
        padding: '16px',
        textAlign: 'center',
        borderBottom: '1px solid #031C32'
      }}>
        <h1 style={{ margin: '0', fontSize: '24px', fontWeight: 'bold' }}>
          FootballLOG
        </h1>
        <p style={{ margin: '4px 0 0 0', opacity: 0.9, fontSize: '14px' }}>
          Football Stats & Analytics
        </p>
      </div>

      {/* Main Content */}
      <div style={{
        maxWidth: '448px',
        margin: '0 auto',
        backgroundColor: '#02070D',
        minHeight: 'calc(100vh - 160px)',
        paddingTop: '100px'
      }}>
        {renderPage()}
      </div>

      {/* Bottom Navigation */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#02070D',
        borderTop: '1px solid #031C32',
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
                backgroundColor: currentPage === item.id ? '#3C8DBC' : 'transparent',
                borderRadius: '8px',
                border: 'none',
                color: currentPage === item.id ? '#FBF9FA' : '#3C8DBC',
                fontSize: '12px',
                fontWeight: '600',
                cursor: 'pointer',
                minWidth: '60px',
                transition: 'all 0.2s ease'
              }}
            >
              <img 
                src={item.iconPath} 
                alt={item.label}
                width="20" 
                height="20" 
                style={{ 
                  filter: currentPage === item.id 
                    ? 'invert(1) brightness(2)' // White for selected
                    : 'invert(0.6) sepia(1) saturate(2) hue-rotate(180deg) brightness(1.2)', // #3C8DBC for unselected
                }}
              />
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;