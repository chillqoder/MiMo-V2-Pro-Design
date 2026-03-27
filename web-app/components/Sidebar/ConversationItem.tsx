'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { Pin, BellOff, CheckCheck } from 'lucide-react';
import { Avatar } from '@/components/UI/Avatar';
import { Badge } from '@/components/UI/Badge';
import { Conversation } from '@/lib/mockData';
import { formatMessageTime } from '@/lib/utils/dateFormat';

interface ConversationItemProps {
  conversation: Conversation;
  isActive: boolean;
  onClick: () => void;
  index: number;
}

export const ConversationItem = memo(function ConversationItem({ conversation, isActive, onClick, index }: ConversationItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.03 }}
      onClick={onClick}
      whileHover={{ scale: 1.005, backgroundColor: 'var(--bg-elevated)' }}
      whileTap={{ scale: 0.995 }}
      className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors ${
        isActive ? 'bg-bg-elevated' : ''
      }`}
    >
      <Avatar
        src={conversation.avatar}
        name={conversation.name}
        size={48}
        showOnline={!conversation.isGroup && !conversation.isChannel}
        isOnline={conversation.isOnline}
      />

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className={`font-medium truncate ${isActive ? 'text-accent' : 'text-text-primary'}`}>
            {conversation.name}
          </span>
          {conversation.isPinned && (
            <Pin size={12} className="text-text-secondary flex-shrink-0" />
          )}
          {conversation.isMuted && (
            <BellOff size={12} className="text-text-secondary flex-shrink-0" />
          )}
        </div>

        <div className="flex items-center gap-2 mt-0.5">
          {conversation.lastMessage.includes('Voice message') && (
            <span className="text-accent text-sm">🎤</span>
          )}
          {conversation.lastMessage.includes('file') && (
            <span className="text-accent text-sm">📎</span>
          )}
          <span className="text-text-secondary text-sm truncate flex-1">
            {conversation.lastMessage}
          </span>
        </div>
      </div>

      <div className="flex flex-col items-end gap-1">
        <span className="text-text-secondary text-xs">
          {formatMessageTime(conversation.lastMessageTime)}
        </span>
        <div className="flex items-center gap-1">
          <Badge count={conversation.unreadCount} />
          {conversation.lastMessage.includes('✓✓') && (
            <CheckCheck size={14} className="text-accent" />
          )}
        </div>
      </div>
    </motion.div>
  );
});
