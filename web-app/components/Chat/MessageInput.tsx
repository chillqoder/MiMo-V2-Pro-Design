'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Smile, Mic, Send, Paperclip, Image, FileText, MapPin, BarChart } from 'lucide-react';
import { EmojiPicker } from './EmojiPicker';
import { Tooltip } from '@/components/UI/Tooltip';

interface MessageInputProps {
  onSend: (message: string) => void;
}

export function MessageInput({ onSend }: MessageInputProps) {
  const [message, setMessage] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showAttachMenu, setShowAttachMenu] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 120) + 'px';
    }
  }, [message]);

  const handleSend = () => {
    if (message.trim()) {
      onSend(message.trim());
      setMessage('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleEmojiSelect = (emoji: string) => {
    setMessage((prev) => prev + emoji);
    textareaRef.current?.focus();
  };

  const attachItems = [
    { icon: Image, label: 'Photo' },
    { icon: FileText, label: 'File' },
    { icon: BarChart, label: 'Poll' },
    { icon: MapPin, label: 'Location' },
  ];

  return (
    <div className="px-4 py-3 border-t border-border bg-bg-secondary">
      <div className="flex items-end gap-2 bg-bg-elevated rounded-2xl px-4 py-2">
        <div className="flex items-center gap-1">
          <div className="relative">
            <Tooltip content="Attach">
              <button
                onClick={() => setShowAttachMenu(!showAttachMenu)}
                className="w-10 h-10 flex items-center justify-center text-text-secondary hover:text-text-primary rounded-full transition-all"
              >
                <Paperclip size={20} />
              </button>
            </Tooltip>

            <AnimatePresence>
              {showAttachMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-full mb-2 left-0 bg-bg-elevated rounded-lg shadow-xl py-2 border border-border"
                >
                  {attachItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => setShowAttachMenu(false)}
                      className="w-full flex items-center gap-3 px-4 py-2 text-text-primary hover:bg-bg-secondary text-sm transition-colors"
                    >
                      <item.icon size={18} />
                      {item.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative">
            <Tooltip content="Emoji">
              <button
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                className="w-10 h-10 flex items-center justify-center text-text-secondary hover:text-text-primary rounded-full transition-all"
              >
                <Smile size={20} />
              </button>
            </Tooltip>

            <AnimatePresence>
              {showEmojiPicker && (
                <EmojiPicker
                  onSelect={handleEmojiSelect}
                  onClose={() => setShowEmojiPicker(false)}
                />
              )}
            </AnimatePresence>
          </div>
        </div>

        <textarea
          ref={textareaRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Message"
          rows={1}
          className="flex-1 bg-transparent text-text-primary py-2 text-sm outline-none resize-none placeholder:text-text-secondary min-h-[24px] max-h-[120px]"
        />

        <motion.div
          layout
          className="flex items-center"
        >
          {message.trim() ? (
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleSend}
              className="w-10 h-10 flex items-center justify-center bg-accent rounded-full text-white"
            >
              <Send size={18} />
            </motion.button>
          ) : (
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 flex items-center justify-center text-text-secondary hover:text-text-primary rounded-full transition-all"
            >
              <Mic size={20} />
            </motion.button>
          )}
        </motion.div>
      </div>
    </div>
  );
}
