'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Plus, Users, Hash } from 'lucide-react';
import { Avatar } from '@/components/UI/Avatar';
import { SearchBar } from './SearchBar';
import { FolderTabs } from './FolderTabs';
import { ConversationItem } from './ConversationItem';
import { currentUser, tabs, folders, Conversation } from '@/lib/mockData';
import { useConversationContext } from '@/lib/hooks/useConversation';

interface SidebarProps {
  onProfileClick: () => void;
  isMobile?: boolean;
}

export function Sidebar({ onProfileClick, isMobile }: SidebarProps) {
  const { conversationsList, selectedConversationId, selectConversation } = useConversationContext();
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [activeFolder, setActiveFolder] = useState('all');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const filteredConversations = useMemo(() => {
    let filtered = conversationsList;

    if (activeTab === 'unread') {
      filtered = filtered.filter(c => c.unreadCount > 0);
    } else if (activeTab === 'groups') {
      filtered = filtered.filter(c => c.isGroup);
    } else if (activeTab === 'channels') {
      filtered = filtered.filter(c => c.isChannel);
    }

    if (searchQuery) {
      filtered = filtered.filter(c =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered.sort((a, b) => {
      if (a.isPinned && !b.isPinned) return -1;
      if (!a.isPinned && b.isPinned) return 1;
      return b.lastMessageTime.getTime() - a.lastMessageTime.getTime();
    });
  }, [conversationsList, activeTab, searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <AnimatePresence>
      {sidebarOpen && (
        <motion.div
          initial={isMobile ? { x: '-100%' } : undefined}
          animate={{ x: 0 }}
          exit={isMobile ? { x: '-100%' } : undefined}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className={`flex flex-col h-full bg-bg-secondary ${
            isMobile ? 'w-full absolute inset-0' : 'w-80'
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-3">
              <button
                onClick={onProfileClick}
                className="focus:outline-none focus:ring-2 focus:ring-accent rounded-full"
              >
                <Avatar
                  src={currentUser.avatar}
                  name={currentUser.name}
                  size={40}
                  showOnline
                  isOnline={currentUser.isOnline}
                />
              </button>
              <h1 className="text-xl font-semibold text-text-primary">Telegram</h1>
            </div>

            <div className="flex items-center gap-2">
              <SearchBar
                onSearch={handleSearch}
                isExpanded={searchExpanded}
                onToggle={() => setSearchExpanded(!searchExpanded)}
              />
              <button className="w-11 h-11 flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-bg-elevated rounded-full transition-all">
                <Plus size={22} />
              </button>
              <button className="lg:hidden w-11 h-11 flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-bg-elevated rounded-full transition-all">
                <Menu size={22} onClick={() => setSidebarOpen(false)} />
              </button>
            </div>
          </div>

          <div className="flex gap-1 px-2 pt-3">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-2 px-3 text-sm font-medium rounded-full transition-colors relative ${
                  activeTab === tab.id
                    ? 'text-text-primary'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-bg-elevated rounded-full"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10">
                  {tab.id === 'groups' ? <Users size={16} /> : tab.id === 'channels' ? <Hash size={16} /> : tab.name}
                </span>
              </motion.button>
            ))}
          </div>

          <FolderTabs
            folders={folders}
            activeFolder={activeFolder}
            onSelectFolder={setActiveFolder}
          />

          <div className="flex-1 overflow-y-auto scrollbar-thin">
            {filteredConversations.map((conversation, index) => (
              <ConversationItem
                key={conversation.id}
                conversation={conversation}
                isActive={conversation.id === selectedConversationId}
                onClick={() => selectConversation(conversation.id)}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
