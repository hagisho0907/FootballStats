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

    {/* Dashboard Cards Section - matching image1.png */}
    <div style={{ padding: '0 16px 20px 16px' }}>
      {/* Today's Condition Card */}
      <div style={{
        backgroundColor: '#031C32',
        borderRadius: '16px',
        padding: '20px',
        marginBottom: '16px'
      }}>
        <h3 style={{ margin: '0 0 20px 0', fontSize: '18px', fontWeight: 'bold', color: '#FBF9FA' }}>今日のコンディション</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#3C8DBC' }}>
              <img src="/icon/icon6.svg" alt="睡眠" width="20" height="20" style={{ filter: 'invert(0.6) sepia(1) saturate(2) hue-rotate(180deg) brightness(1.2)' }} />
              <span style={{ color: '#FBF9FA' }}>睡眠</span>
            </span>
            <span style={{ fontWeight: 'bold', color: '#FBF9FA', fontSize: '16px' }}>7.2 時間</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#3C8DBC' }}>
              <img src="/icon/icon7.svg" alt="体重" width="20" height="20" style={{ filter: 'invert(0.6) sepia(1) saturate(2) hue-rotate(180deg) brightness(1.2)' }} />
              <span style={{ color: '#FBF9FA' }}>体重</span>
            </span>
            <span style={{ fontWeight: 'bold', color: '#FBF9FA', fontSize: '16px' }}>65.4 kg</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#3C8DBC' }}>
              <img src="/icon/icon8.svg" alt="HRV" width="20" height="20" style={{ filter: 'invert(0.6) sepia(1) saturate(2) hue-rotate(180deg) brightness(1.2)' }} />
              <span style={{ color: '#FBF9FA' }}>HRV</span>
            </span>
            <span style={{ fontWeight: 'bold', color: '#FBF9FA', fontSize: '16px' }}>良好</span>
          </div>
        </div>
      </div>

      {/* Performance Highlights Card */}
      <div style={{
        backgroundColor: '#031C32',
        borderRadius: '16px',
        padding: '20px',
        marginBottom: '16px'
      }}>
        <h3 style={{ margin: '0 0 20px 0', fontSize: '18px', fontWeight: 'bold', color: '#FBF9FA' }}>パフォーマンスハイライト</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#3C8DBC' }}>
              <img src="/icon/icon11.svg" alt="週の総出場時間" width="20" height="20" style={{ filter: 'invert(0.6) sepia(1) saturate(2) hue-rotate(180deg) brightness(1.2)' }} />
              <span style={{ color: '#FBF9FA' }}>週の総出場時間</span>
            </span>
            <span style={{ fontWeight: 'bold', color: '#FBF9FA', fontSize: '16px' }}>12 h</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#3C8DBC' }}>
              <img src="/icon/icon9.svg" alt="総走行距離" width="20" height="20" style={{ filter: 'invert(0.6) sepia(1) saturate(2) hue-rotate(180deg) brightness(1.2)' }} />
              <span style={{ color: '#FBF9FA' }}>総走行距離</span>
            </span>
            <span style={{ fontWeight: 'bold', color: '#FBF9FA', fontSize: '16px' }}>35.2 km</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#3C8DBC' }}>
              <img src="/icon/icon2.svg" alt="スタッツ" width="20" height="20" style={{ filter: 'invert(0.6) sepia(1) saturate(2) hue-rotate(180deg) brightness(1.2)' }} />
              <span style={{ color: '#FBF9FA' }}>スタッツ</span>
            </span>
            <span style={{ fontWeight: 'bold', color: '#FBF9FA', fontSize: '16px' }}>2G / 1A</span>
          </div>
        </div>
      </div>

      {/* Schedule Card */}
      <div style={{
        backgroundColor: '#031C32',
        borderRadius: '16px',
        padding: '20px',
        marginBottom: '16px'
      }}>
        <h3 style={{ margin: '0 0 20px 0', fontSize: '18px', fontWeight: 'bold', color: '#FBF9FA' }}>予定</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img src="/icon/icon3.svg" alt="予定" width="20" height="20" style={{ filter: 'invert(0.6) sepia(1) saturate(2) hue-rotate(180deg) brightness(1.2)' }} />
            <span style={{ color: '#FBF9FA' }}>9/9(火) 18:00 vs XYZFCユース</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img src="/icon/icon3.svg" alt="予定" width="20" height="20" style={{ filter: 'invert(0.6) sepia(1) saturate(2) hue-rotate(180deg) brightness(1.2)' }} />
            <span style={{ color: '#FBF9FA' }}>9/12(金) 18:00 vs ABC高校</span>
          </div>
        </div>
      </div>

      {/* Coaching Feed Card */}
      <div style={{
        backgroundColor: '#031C32',
        borderRadius: '16px',
        padding: '20px'
      }}>
        <h3 style={{ margin: '0 0 20px 0', fontSize: '18px', fontWeight: 'bold', color: '#FBF9FA' }}>コーチングフィード</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src="/icon/icon10.svg" alt="フィードバック" width="20" height="20" style={{ filter: 'invert(0.6) sepia(1) saturate(2) hue-rotate(180deg) brightness(1.2)' }} />
          <span style={{ color: '#FBF9FA' }}>フィードバックあり (新着3件)</span>
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
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
      <h2 style={{ color: '#3C8DBC', margin: '0', fontSize: '24px', fontWeight: 'bold' }}>スタッツ</h2>
      <button style={{
        backgroundColor: '#3C8DBC',
        color: '#FBF9FA',
        border: 'none',
        borderRadius: '25px',
        padding: '12px 20px',
        fontSize: '14px',
        fontWeight: 'bold',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '6px'
      }}>
        + 新規登録
      </button>
    </div>
    
    {/* Match Cards - Vertical Layout */}
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
      
      {/* Match 1 - Active with blue border */}
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
              backgroundColor: '#00385B',
              borderRadius: '8px',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px'
            }}>
              <img src="/icon/icon12.svg" alt="動画" width="24" height="24" style={{ filter: 'invert(0.6) sepia(1) saturate(2) hue-rotate(180deg) brightness(1.2)' }} />
            </div>
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
              backgroundColor: '#026ACB',
              borderRadius: '8px',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}>
              <img src="/icon/icon13.svg" alt="スタッツ" width="24" height="24" style={{ filter: 'invert(1)' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Match 2 - Active border */}
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
          }}>2025/9/1 VS 浅草FC</h3>
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
              backgroundColor: '#00385B',
              borderRadius: '8px',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px'
            }}>
              <img src="/icon/icon12.svg" alt="動画" width="24" height="24" style={{ filter: 'invert(0.6) sepia(1) saturate(2) hue-rotate(180deg) brightness(1.2)' }} />
            </div>
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
              backgroundColor: '#026ACB',
              borderRadius: '8px',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}>
              <img src="/icon/icon13.svg" alt="スタッツ" width="24" height="24" style={{ filter: 'invert(1)' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Match 3 - Active border */}
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
          }}>2025/8/25 VS FC東京ユース</h3>
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
              backgroundColor: '#00385B',
              borderRadius: '8px',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px'
            }}>
              <img src="/icon/icon12.svg" alt="動画" width="24" height="24" style={{ filter: 'invert(0.6) sepia(1) saturate(2) hue-rotate(180deg) brightness(1.2)' }} />
            </div>
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
              backgroundColor: '#026ACB',
              borderRadius: '8px',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}>
              <img src="/icon/icon13.svg" alt="スタッツ" width="24" height="24" style={{ filter: 'invert(1)' }} />
            </div>
          </div>
        </div>
      </div>

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
    { id: 'calendar', label: 'カレンダー', iconPath: '/icon/icon3.svg' },
    { id: 'stats', label: 'スタッツ', iconPath: '/icon/icon2.svg' },
    { id: 'home', label: 'ホーム', iconPath: '/icon/icon1.svg' },
    { id: 'ai-buddy', label: 'AIバディ', iconPath: '/icon/icon4.svg' },
    { id: 'support', label: 'サポート', iconPath: '/icon/icon5.svg' }
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
          Football LOG
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