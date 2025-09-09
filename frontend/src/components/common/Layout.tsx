import React from 'react';
import { BottomNavigation } from './BottomNavigation';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f9fafb',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Main Content */}
      <main style={{
        flex: 1,
        paddingBottom: '80px',
        overflow: 'hidden'
      }}>
        <div style={{
          height: '100%',
          maxWidth: '448px',
          margin: '0 auto',
          backgroundColor: 'white'
        }}>
          {children}
        </div>
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};