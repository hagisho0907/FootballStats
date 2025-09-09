import React from 'react';

interface CardProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  elevated?: boolean;
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'outlined' | 'filled';
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  style = {},
  elevated = false,
  size = 'medium',
  variant = 'default'
}) => {
  const sizeStyles = {
    small: { padding: '12px', borderRadius: '8px' },
    medium: { padding: '16px', borderRadius: '12px' },
    large: { padding: '20px', borderRadius: '16px' }
  };

  const variantStyles = {
    default: {
      backgroundColor: 'white',
      border: '1px solid #e5e7eb'
    },
    outlined: {
      backgroundColor: 'transparent',
      border: '2px solid #059669'
    },
    filled: {
      backgroundColor: '#f0fdf4',
      border: '1px solid #059669'
    }
  };

  const baseStyle: React.CSSProperties = {
    ...sizeStyles[size],
    ...variantStyles[variant],
    boxShadow: elevated 
      ? '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
      : '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    ...style
  };

  return (
    <div style={baseStyle}>
      {children}
    </div>
  );
};