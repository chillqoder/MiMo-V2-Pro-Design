'use client';

import { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { File, CheckCheck, ArrowLeft } from 'lucide-react';
import { Avatar } from '@/components/UI/Avatar';
import { Reactions } from './Reactions';
import { ContextMenu } from './ContextMenu';
import { VoiceMessage } from './VoiceMessage';
import { Message as MessageType, User } from '@/lib/mockData';
import { formatMessageTime } from '@/lib/utils/dateFormat';

interface MessageProps {
  message: MessageType;
  isOutgoing: boolean;
  sender?: User;
  showAvatar?: boolean;
  showDate?: boolean;
}

export const Message = memo(function Message({ message, isOutgoing, sender, showAvatar = false, showDate = false }: MessageProps) {
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [contextMenuPos, setContextMenuPos] = useState({ x: 0, y: 0 });
  const [showImage, setShowImage] = useState(false);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setContextMenuPos({ x: e.clientX, y: e.clientY });
    setShowContextMenu(true);
  };

  const bubbleStyle = isOutgoing
    ? 'bg-bg-bubble-out text-white rounded-br-sm'
    : 'bg-bg-bubble-in text-text-primary rounded-bl-sm';

  const alignStyle = isOutgoing ? 'items-end' : 'items-start';

  return (
    <>
      {showDate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center my-4"
        >
          <span className="px-3 py-1 bg-bg-secondary text-text-secondary text-xs rounded-full">
            {formatMessageTime(message.timestamp)}
          </span>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, x: isOutgoing ? 20 : -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={`flex gap-2 px-4 py-0.5 ${alignStyle}`}
        onContextMenu={handleContextMenu}
      >
        {!isOutgoing && showAvatar && (
          <div className="self-end mb-6">
            <Avatar src={sender?.avatar} name={sender?.name || 'User'} size={32} />
          </div>
        )}

        <div className={`flex flex-col max-w-[70%] ${isOutgoing ? 'items-end' : 'items-start'}`}>
          {message.type === 'system' ? (
            <div className="px-3 py-1.5 bg-bg-elevated text-text-secondary text-sm rounded-lg text-center">
              {message.content}
            </div>
          ) : (
            <>
              {message.replyTo && (
                <div className="w-full px-3 py-2 bg-bg-secondary/50 border-l-2 border-accent rounded-r-lg mb-1">
                  <p className="text-xs text-text-secondary truncate">{message.replyTo}</p>
                  <p className="text-sm text-text-primary line-clamp-2">{message.content}</p>
                </div>
              )}

              {message.forwardedFrom && (
                <p className="text-xs text-text-secondary mb-1">Forwarded from {message.forwardedFrom}</p>
              )}

              <div className={`px-4 py-2 ${bubbleStyle} shadow-sm`}>
                {message.type === 'image' && message.imageUrl && (
                  <div
                    className="cursor-pointer rounded-lg overflow-hidden"
                    onClick={() => setShowImage(true)}
                  >
                    <Image
                      src={message.imageUrl}
                      alt="Shared image"
                      width={250}
                      height={200}
                      className="object-cover"
                    />
                  </div>
                )}

                {message.type === 'file' && (
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                      <File size={20} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{message.fileName}</p>
                      <p className="text-xs opacity-70">{message.fileSize}</p>
                    </div>
                  </div>
                )}

                {message.type === 'voice' && message.voiceDuration && (
                  <VoiceMessage duration={message.voiceDuration} />
                )}

                {message.type === 'sticker' && (
                  <div className="text-4xl">� sticker</div>
                )}

                {(message.type === 'text' || !message.type) && (
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                )}

                <div className={`flex items-center gap-1 mt-1 ${isOutgoing ? 'justify-end' : 'justify-start'}`}>
                  <span className="text-xs opacity-50">
                    {formatMessageTime(message.timestamp)}
                  </span>
                  {isOutgoing && message.status && (
                    <span className="flex">
                      {message.status === 'read' ? (
                        <CheckCheck size={14} className="text-accent" />
                      ) : (
                        <CheckCheck size={14} className="text-text-secondary" />
                      )}
                    </span>
                  )}
                </div>
              </div>

              <Reactions reactions={message.reactions} />
            </>
          )}
        </div>
      </motion.div>

      <AnimatePresence>
        {showContextMenu && (
          <ContextMenu
            x={contextMenuPos.x}
            y={contextMenuPos.y}
            onClose={() => setShowContextMenu(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={() => setShowImage(false)}
          >
            <button className="absolute top-4 right-4 text-white p-2">
              <ArrowLeft size={24} />
            </button>
            {message.imageUrl && (
              <Image
                src={message.imageUrl}
                alt="Full size"
                width={800}
                height={600}
                className="object-contain"
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});
