import React from 'react';
import { Home, Calendar, BarChart3, MessageCircle, Settings } from 'lucide-react';
import * as Types from '../types';

type TabType = Types.TabType;

export interface NavItem {
  id: TabType;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  path: string;
}

export const NAV_ITEMS: NavItem[] = [
  {
    id: 'home',
    label: 'ホーム',
    icon: Home,
    path: '/',
  },
  {
    id: 'calendar',
    label: 'カレンダー',
    icon: Calendar,
    path: '/calendar',
  },
  {
    id: 'stats',
    label: 'スタッツ',
    icon: BarChart3,
    path: '/stats',
  },
  {
    id: 'ai-buddy',
    label: 'AIバディ',
    icon: MessageCircle,
    path: '/ai-buddy',
  },
  {
    id: 'support',
    label: 'サポート',
    icon: Settings,
    path: '/support',
  },
];