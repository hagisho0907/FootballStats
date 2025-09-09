import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppStore } from '../../stores/useAppStore';
import { NAV_ITEMS } from '../../constants/navigation';

export const BottomNavigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setActiveTab } = useAppStore();

  const handleTabClick = (tabId: string, path: string) => {
    setActiveTab(tabId as any);
    navigate(path);
  };

  return (
    <nav style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'white',
      borderTop: '1px solid #e5e7eb',
      paddingBottom: '8px',
      zIndex: 50
    }}>
      <div style={{
        maxWidth: '448px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-around',
        padding: '8px'
      }}>
        {NAV_ITEMS.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id, item.path)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                padding: '8px',
                backgroundColor: isActive ? '#059669' : 'transparent',
                borderRadius: '8px',
                border: 'none',
                color: isActive ? 'white' : '#6b7280',
                fontSize: '12px',
                fontWeight: '600',
                cursor: 'pointer',
                minWidth: '60px'
              }}
            >
              <Icon 
                {...({size: 24} as any)}
                {...({color: isActive ? 'white' : '#6b7280'} as any)}
              />
              {item.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
};