'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { conversations, Conversation } from '@/lib/mockData';

interface ConversationContextType {
  selectedConversationId: string;
  selectedConversation: Conversation | null;
  conversationsList: Conversation[];
  selectConversation: (id: string) => void;
  sendMessage: (content: string) => void;
}

const ConversationContext = createContext<ConversationContextType | null>(null);

export function ConversationProvider({ children }: { children: ReactNode }) {
  const [selectedConversationId, setSelectedConversationId] = useState<string>(conversations[0]?.id || '');
  const [conversationsList, setConversationsList] = useState<Conversation[]>(conversations);

  const selectedConversation = conversationsList.find(c => c.id === selectedConversationId) || null;

  const selectConversation = (id: string) => {
    setSelectedConversationId(id);
    setConversationsList(prev => prev.map(c => 
      c.id === id ? { ...c, unreadCount: 0 } : c
    ));
  };

  const sendMessage = (content: string) => {
    if (!selectedConversation) return;

    const newMessage = {
      id: `msg-${Date.now()}`,
      senderId: 'current-user',
      content,
      timestamp: new Date(),
      type: 'text' as const,
      status: 'sent' as const,
    };

    setConversationsList(prev => prev.map(c => 
      c.id === selectedConversationId 
        ? { 
            ...c, 
            messages: [...c.messages, newMessage],
            lastMessage: content,
            lastMessageTime: new Date(),
          } 
        : c
    ));
  };

  return (
    <ConversationContext.Provider value={{
      selectedConversationId,
      selectedConversation,
      conversationsList,
      selectConversation,
      sendMessage,
    }}>
      {children}
    </ConversationContext.Provider>
  );
}

export function useConversationContext() {
  const context = useContext(ConversationContext);
  if (!context) {
    throw new Error('useConversationContext must be used within ConversationProvider');
  }
  return context;
}