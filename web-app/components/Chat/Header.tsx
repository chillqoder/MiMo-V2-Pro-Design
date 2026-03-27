'use client';

import { Video, Search, MoreHorizontal } from 'lucide-react';
import { Avatar } from '@/components/UI/Avatar';
import { Tooltip } from '@/components/UI/Tooltip';
import { Conversation } from '@/lib/mockData';

interface ChatHeaderProps {
  conversation: Conversation;
  onAvatarClick: () => void;
}

export function ChatHeader({ conversation, onAvatarClick }: ChatHeaderProps) {
  const status = conversation.isOnline
    ? 'online'
    : conversation.lastMessageTime
    ? `last seen ${conversation.lastMessageTime.toLocaleTimeString()}`
    : 'offline';

  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-bg-secondary">
      <div className="flex items-center gap-3">
        <button onClick={onAvatarClick} className="focus:outline-none focus:ring-2 focus:ring-accent rounded-full">
          <Avatar
            src={conversation.avatar}
            name={conversation.name}
            size={44}
            showOnline={!conversation.isGroup && !conversation.isChannel}
            isOnline={conversation.isOnline}
          />
        </button>
        <div>
          <h2 className="font-semibold text-text-primary">{conversation.name}</h2>
          <p className="text-sm text-text-secondary">{conversation.isGroup ? `${conversation.members?.length || 0} members` : status}</p>
        </div>
      </div>

      <div className="flex items-center gap-1">
        <Tooltip content="Video call">
          <button className="w-10 h-10 flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-bg-elevated rounded-full transition-all">
            <Video size={20} />
          </button>
        </Tooltip>
        <Tooltip content="Search">
          <button className="w-10 h-10 flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-bg-elevated rounded-full transition-all">
            <Search size={20} />
          </button>
        </Tooltip>
        <Tooltip content="More">
          <button className="w-10 h-10 flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-bg-elevated rounded-full transition-all">
            <MoreHorizontal size={20} />
          </button>
        </Tooltip>
      </div>
    </div>
  );
}
