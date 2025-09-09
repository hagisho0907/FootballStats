import React, { useState, useRef, useEffect } from 'react';
import { useAppStore } from '../stores/useAppStore';
import { mockAIBuddies, mockChatMessages } from '../data/mockData';
import { MessageCircle, Send, ArrowLeft, Bot, User } from 'lucide-react';
import { Card } from '../components/ui/Card';
import * as Types from '../types';

type AIBuddy = Types.AIBuddy;
type ChatMessage = Types.ChatMessage;

export const AIBuddyPage: React.FC = () => {
  const { selectedBuddy, setSelectedBuddy } = useAppStore();
  const [messages, setMessages] = useState<ChatMessage[]>(mockChatMessages);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBuddyIcon = (type: string) => {
    switch (type) {
      case 'highlight': return '⚽';
      case 'tactics': return '📋';
      case 'stats': return '📊';
      case 'medical': return '🏥';
      case 'conditioning': return '💪';
      default: return '🤖';
    }
  };

  const getBuddyColor = (type: string) => {
    switch (type) {
      case 'highlight': return 'bg-blue-500';
      case 'tactics': return 'bg-green-500';
      case 'stats': return 'bg-purple-500';
      case 'medical': return 'bg-red-500';
      case 'conditioning': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  const handleBuddySelect = (buddy: AIBuddy) => {
    setSelectedBuddy(buddy);
    // Reset messages when selecting a new buddy
    setMessages([
      {
        id: '1',
        role: 'assistant',
        content: `こんにちは！私は${buddy.name}です。${buddy.description}どのようなことでお手伝いできますか？`,
        timestamp: new Date().toISOString()
      }
    ]);
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || !selectedBuddy) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: inputMessage,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = {
        highlight: [
          'あなたの個人プレーを分析しました。特にドリブルの成功率が向上していますね！',
          '前回の試合で良いパスを出していました。さらに改善するポイントをお教えします。',
          'シュートの精度について分析してみましょう。練習方法をご提案します。'
        ],
        tactics: [
          'チームの戦術について解説します。4-3-3フォーメーションの利点を活用しましょう。',
          '相手チームの弱点を分析しました。サイド攻撃が効果的だと思います。',
          'ポジション取りについてアドバイスします。スペースの使い方を改善できますね。'
        ],
        stats: [
          'あなたの統計データを分析した結果、パス成功率が85%と非常に良好です。',
          '過去5試合のパフォーマンス推移をグラフで説明します。',
          'チーム内での貢献度が向上しています。具体的な数値で示しますね。'
        ],
        medical: [
          '怪我の予防について大切なポイントをお伝えします。ウォーミングアップを重視しましょう。',
          '疲労度チェックの結果、十分な休息を取ることをお勧めします。',
          '栄養管理について、試合前後の食事のアドバイスをします。'
        ],
        conditioning: [
          '現在のフィジカルコンディションは良好です。さらなる向上のためのメニューを提案します。',
          'スプリント能力向上のためのトレーニング方法をご紹介します。',
          '持久力テストの結果に基づいて、個別のトレーニングプランを作成しました。'
        ]
      };

      const buddyResponses = responses[selectedBuddy.type as keyof typeof responses] || responses.stats;
      const randomResponse = buddyResponses[Math.floor(Math.random() * buddyResponses.length)];

      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: randomResponse,
        timestamp: new Date().toISOString()
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!selectedBuddy) {
    // Buddy Selection Screen
    return (
      <div style="min-h-screen bg-gray-50">
        {/* Header */}
        <div style="bg-gradient-to-r from-footballGreen to-footballGreen-dark text-white p-4">
          <h1 style="text-xl font-bold flex items-center">
            <MessageCircle style="w-6 h-6 mr-2" />
            footballLOG
          </h1>
          <p style="text-green-100 text-sm mt-1 opacity-90">
            AI Buddy
          </p>
        </div>

        {/* Buddy Selection */}
        <div style="p-4 space-y-4">
          {mockAIBuddies.map((buddy) => (
            <Card
              key={buddy.id}
              style="p-4 cursor-pointer hover:shadow-md transition-all hover:scale-[1.02]"
              onClick={() => handleBuddySelect(buddy)}
            >
              <div style="flex items-center space-x-4">
                <div style={`w-16 h-16 ${getBuddyColor(buddy.type)} rounded-full flex items-center justify-center text-2xl`}>
                  {getBuddyIcon(buddy.type)}
                </div>
                <div style="flex-1">
                  <h3 style="font-semibold text-lg text-gray-900 mb-1">
                    {buddy.name}
                  </h3>
                  <p style="text-gray-600 text-sm leading-relaxed">
                    {buddy.description}
                  </p>
                </div>
                <div style="text-footballGreen">
                  <MessageCircle style="w-6 h-6" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Info Section */}
        <div style="p-4 mt-8">
          <Card style="p-6 bg-gradient-to-r from-green-50 to-emerald-50">
            <div style="text-center">
              <Bot style="w-12 h-12 text-footballGreen mx-auto mb-3" />
              <h3 style="font-semibold text-gray-900 mb-2">
                AIバディについて
              </h3>
              <p style="text-gray-600 text-sm leading-relaxed">
                各分野の専門AIがあなたのサッカーライフをサポートします。
                質問や相談があればいつでもお気軽にお声かけください！
              </p>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  // Chat Screen
  return (
    <div style="min-h-screen bg-gray-50 flex flex-col">
      {/* Chat Header */}
      <div style="bg-gradient-to-r from-footballGreen to-footballGreen-dark text-white p-4 flex items-center space-x-3">
        <button
          onClick={() => setSelectedBuddy(null)}
          style="p-1 hover:bg-white hover:bg-opacity-20 rounded transition-colors"
        >
          <ArrowLeft style="w-6 h-6" />
        </button>
        <div style={`w-10 h-10 ${getBuddyColor(selectedBuddy.type)} rounded-full flex items-center justify-center`}>
          {getBuddyIcon(selectedBuddy.type)}
        </div>
        <div style="flex-1">
          <h2 style="font-semibold">{selectedBuddy.name}</h2>
          <p style="text-green-100 text-xs opacity-90">オンライン</p>
        </div>
      </div>

      {/* Messages */}
      <div style="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            style={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div style={`flex items-start space-x-2 max-w-[80%]`}>
              {message.role === 'assistant' && (
                <div style={`w-8 h-8 ${getBuddyColor(selectedBuddy.type)} rounded-full flex items-center justify-center text-sm flex-shrink-0`}>
                  {getBuddyIcon(selectedBuddy.type)}
                </div>
              )}
              <div
                style={`px-4 py-2 rounded-2xl ${
                  message.role === 'user'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white shadow-sm border'
                }`}
              >
                <p style="text-sm">{message.content}</p>
                <div style={`text-xs mt-1 ${
                  message.role === 'user' ? 'text-primary-100' : 'text-gray-400'
                }`}>
                  {new Date(message.timestamp).toLocaleTimeString('ja-JP', {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </div>
              </div>
              {message.role === 'user' && (
                <div style="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                  <User style="w-4 h-4 text-gray-600" />
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div style="flex justify-start">
            <div style="flex items-start space-x-2">
              <div style={`w-8 h-8 ${getBuddyColor(selectedBuddy.type)} rounded-full flex items-center justify-center text-sm`}>
                {getBuddyIcon(selectedBuddy.type)}
              </div>
              <div style="bg-white shadow-sm border px-4 py-2 rounded-2xl">
                <div style="flex space-x-1">
                  <div style="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div style="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div style="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div style="p-4 bg-white border-t">
        <div style="flex space-x-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={`${selectedBuddy.name}に質問してください...`}
            style="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            disabled={isTyping}
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim() || isTyping}
            style="bg-primary-600 text-white p-2 rounded-full hover:bg-primary-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            <Send style="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};