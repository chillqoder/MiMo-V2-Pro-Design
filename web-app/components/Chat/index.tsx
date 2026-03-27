'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { ChatHeader } from './Header';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';
import { useConversationContext } from '@/lib/hooks/useConversation';

interface ChatPanelProps {
  onAvatarClick: () => void;
  isMobile?: boolean;
}

export function ChatPanel({ onAvatarClick, isMobile }: ChatPanelProps) {
  const { selectedConversation, sendMessage } = useConversationContext();

  if (!selectedConversation) {
    return (
      <div className="flex-1 flex items-center justify-center bg-bg-primary">
        <p className="text-text-secondary">Select a conversation to start</p>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={selectedConversation.id}
        initial={isMobile ? { x: '100%' } : undefined}
        animate={{ x: 0 }}
        exit={isMobile ? { x: '100%' } : undefined}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={`flex flex-col h-full bg-bg-primary ${
          isMobile ? 'w-full absolute inset-0' : 'flex-1'
        }`}
      >
        <ChatHeader conversation={selectedConversation} onAvatarClick={onAvatarClick} />

        <MessageList conversation={selectedConversation} />

        <MessageInput onSend={sendMessage} />
      </motion.div>
    </AnimatePresence>
  );
}
