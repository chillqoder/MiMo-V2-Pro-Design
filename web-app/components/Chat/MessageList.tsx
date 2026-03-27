'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Message } from './Message';
import { TypingIndicator } from './TypingIndicator';
import { Conversation, User, currentUser } from '@/lib/mockData';
import { formatFullDate } from '@/lib/utils/dateFormat';

interface MessageListProps {
  conversation: Conversation;
}

export function MessageList({ conversation }: MessageListProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [unreadCount, setUnreadCount] = useState(conversation.unreadCount);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'auto' });
  }, [conversation.id, conversation.messages]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const isAtBottom = target.scrollHeight - target.scrollTop - target.clientHeight < 100;
    if (!isAtBottom) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
      setUnreadCount(0);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    setShowScrollButton(false);
  };

  let lastDate: string | null = null;

  return (
    <div className="flex-1 overflow-hidden relative">
      <div className="h-full overflow-y-auto px-4 py-2 scrollbar-thin" onScroll={handleScroll}>
        <div className="min-h-full flex flex-col justify-end">
          {conversation.messages.map((message, index) => {
          const sender = message.senderId === 'current-user'
            ? currentUser
            : conversation.members?.find(m => m.id === message.senderId);

          const showDate = index === 0 || 
            formatFullDate(message.timestamp) !== formatFullDate(conversation.messages[index - 1].timestamp);

          const isOutgoing = message.senderId === 'current-user';

            return (
              <div key={message.id}>
                {showDate && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-center my-4"
                  >
                    <span className="px-3 py-1 bg-bg-secondary text-text-secondary text-xs rounded-full">
                      {formatFullDate(message.timestamp)}
                    </span>
                  </motion.div>
                )}
                <Message
                  message={message}
                  isOutgoing={isOutgoing}
                  sender={sender}
                  showAvatar={conversation.isGroup && !isOutgoing}
                />
              </div>
            );
          })}

          <TypingIndicator />

          <div ref={messagesEndRef} />
        </div>
      </div>

      <AnimatePresence>
        {showScrollButton && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToBottom}
            className="absolute bottom-4 right-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white shadow-lg"
          >
            <ArrowDown size={20} />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1.5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
