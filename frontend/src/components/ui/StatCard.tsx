import React from 'react'
import { Card } from './Card'

interface StatCardProps {
  icon: React.ComponentType<{ size?: number; color?: string }>;  
  label: string;
  value: string | number;
  unit?: string;
  iconColor?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  icon: Icon,
  label,
  value,
  unit,
  iconColor = '#059669'
}) => {
  return (
    <Card>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
        <Icon size={24} color={iconColor} />
        <div style={{ flex: 1 }}>
          <div style={{
            fontSize: '14px',
            color: '#6b7280',
            fontWeight: '500',
            marginBottom: '4px'
          }}>
            {label}
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '4px'
          }}>
            <span style={{
              fontSize: '20px',
              fontWeight: '700',
              color: '#111827'
            }}>
              {value}
            </span>
            {unit && (
              <span style={{
                fontSize: '14px',
                color: '#6b7280',
                fontWeight: '400'
              }}>
                {unit}
              </span>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};