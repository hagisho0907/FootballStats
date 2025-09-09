import React, { useState } from 'react';
import { useAppStore } from '../stores/useAppStore';
import { Calendar as CalendarIcon, Plus } from 'lucide-react';
import { Card } from '../components/ui/Card';

export const CalendarPage: React.FC = () => {
  const { notes, addNote } = useAppStore();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeTab, setActiveTab] = useState<'calendar' | 'notes'>('calendar');

  // Generate calendar days for current month
  const generateCalendarDays = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const firstDay = new Date(year, month, 1);
    // const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const days = [];
    const currentDate = new Date(startDate);

    for (let i = 0; i < 42; i++) {
      days.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return days;
  };

  const calendarDays = generateCalendarDays();
  const today = new Date();
  const currentMonth = selectedDate.getMonth();

  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const getNotesForDate = (date: Date) => {
    const dateStr = formatDate(date);
    return notes.filter(note => note.date === dateStr);
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setActiveTab('notes');
  };

  const handleAddNote = () => {
    const title = prompt('ノートのタイトルを入力してください:');
    const content = prompt('ノートの内容を入力してください:');
    
    if (title && content) {
      addNote({
        title,
        content,
        date: formatDate(selectedDate),
        type: 'general'
      });
    }
  };

  return (
    <div style="min-h-screen bg-gray-50">
      {/* Header - footballLOG Style */}
      <div style="bg-gradient-to-r from-footballGreen to-footballGreen-dark text-white p-4 relative overflow-hidden">
        <div style="absolute inset-0 bg-black bg-opacity-10 backdrop-blur-sm"></div>
        <div style="relative flex items-center justify-between">
          <div>
            <h1 style="text-xl font-bold">footballLOG</h1>
            <p style="text-green-100 text-sm opacity-90">Calendar & Notes</p>
          </div>
          <button style="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors">
            <CalendarIcon style="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div style="bg-white border-b">
        <div style="flex">
          <button
            style={`flex-1 py-3 px-4 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'calendar'
                ? 'border-footballGreen text-footballGreen'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('calendar')}
          >
            カレンダー
          </button>
          <button
            style={`flex-1 py-3 px-4 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'notes'
                ? 'border-footballGreen text-footballGreen'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('notes')}
          >
            サッカーノート
          </button>
        </div>
      </div>

      {/* Calendar Tab */}
      {activeTab === 'calendar' && (
        <div style="p-4">
          {/* Month Header */}
          <div style="flex items-center justify-between mb-4">
            <button
              onClick={() => {
                const newDate = new Date(selectedDate);
                newDate.setMonth(newDate.getMonth() - 1);
                setSelectedDate(newDate);
              }}
              style="p-2 text-footballGreen hover:text-footballGreen-dark transition-colors"
            >
              ◀
            </button>
            <h2 style="text-lg font-semibold text-gray-900">
              {selectedDate.getFullYear()}年 {selectedDate.getMonth() + 1}月
            </h2>
            <button
              onClick={() => {
                const newDate = new Date(selectedDate);
                newDate.setMonth(newDate.getMonth() + 1);
                setSelectedDate(newDate);
              }}
              style="p-2 text-footballGreen hover:text-footballGreen-dark transition-colors"
            >
              ▶
            </button>
          </div>

          {/* Calendar Grid */}
          <div style="bg-white rounded-lg shadow-sm">
            {/* Week Days Header */}
            <div style="grid grid-cols-7 border-b">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} style="p-3 text-center text-sm font-medium text-gray-500">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div style="grid grid-cols-7">
              {calendarDays.map((date, index) => {
                const isCurrentMonth = date.getMonth() === currentMonth;
                const isToday = formatDate(date) === formatDate(today);
                const hasNotes = getNotesForDate(date).length > 0;
                const isSelected = formatDate(date) === formatDate(selectedDate);

                return (
                  <button
                    key={index}
                    onClick={() => handleDateClick(date)}
                    style={`
                      p-3 text-sm border-b border-r relative
                      ${!isCurrentMonth ? 'text-gray-300' : 'text-gray-900'}
                      ${isToday ? 'bg-footballGreen bg-opacity-10 text-footballGreen font-semibold' : ''}
                      ${isSelected ? 'bg-footballGreen bg-opacity-5 border-footballGreen border-opacity-30' : ''}
                      hover:bg-gray-50
                    `}
                  >
                    <div style="w-full h-12 flex items-center justify-center">
                      {date.getDate()}
                    </div>
                    {hasNotes && (
                      <div style="absolute bottom-1 right-1 w-2 h-2 bg-footballGreen rounded-full"></div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Notes Tab */}
      {activeTab === 'notes' && (
        <div style="p-4">
          {/* Date Info */}
          <div style="mb-4">
            <h2 style="text-lg font-semibold text-gray-900 mb-2">
              {selectedDate.getFullYear()}年{selectedDate.getMonth() + 1}月{selectedDate.getDate()}日
            </h2>
          </div>

          {/* Add Note Button */}
          <button
            onClick={handleAddNote}
            style="w-full mb-4 bg-footballGreen text-white py-3 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-footballGreen-dark transition-colors shadow-lg"
          >
            <Plus style="w-5 h-5" />
            <span style="font-medium">新しいノート</span>
          </button>

          {/* Notes List */}
          <div style="space-y-3">
            {getNotesForDate(selectedDate).length === 0 ? (
              <Card style="text-center py-8">
                <p style="text-gray-500">この日のノートはありません</p>
              </Card>
            ) : (
              getNotesForDate(selectedDate).map((note) => (
                <Card key={note.id} style="p-4">
                  <div style="flex justify-between items-start mb-2">
                    <h3 style="font-semibold text-gray-900">{note.title}</h3>
                    <span style={`
                      px-2 py-1 rounded-full text-xs font-medium
                      ${note.type === 'training' ? 'bg-blue-100 text-blue-800' : ''}
                      ${note.type === 'match' ? 'bg-red-100 text-red-800' : ''}
                      ${note.type === 'general' ? 'bg-gray-100 text-gray-800' : ''}
                    `}>
                      {note.type === 'training' ? '練習' : note.type === 'match' ? '試合' : '一般'}
                    </span>
                  </div>
                  <p style="text-gray-600 text-sm">{note.content}</p>
                  <div style="mt-2 text-xs text-gray-400">
                    {new Date(note.createdAt).toLocaleTimeString('ja-JP')}
                  </div>
                </Card>
              ))
            )}
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      {activeTab === 'calendar' && (
        <button
          onClick={handleAddNote}
          style="fixed bottom-24 right-4 bg-footballGreen text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center hover:bg-footballGreen-dark hover:scale-105 transition-all duration-200 border-2 border-white"
        >
          <Plus style="w-7 h-7" />
        </button>
      )}
    </div>
  );
};