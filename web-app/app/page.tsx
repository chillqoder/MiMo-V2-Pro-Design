'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Sidebar } from '@/components/Sidebar';
import { ChatPanel } from '@/components/Chat';
import { InfoPanel } from '@/components/InfoPanel';
import { ConversationProvider, useConversationContext } from '@/lib/hooks/useConversation';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/lib/hooks/useTheme';

function MessengerContent() {
  const { selectedConversation } = useConversationContext();
  const [showInfoPanel, setShowInfoPanel] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { theme, toggleTheme, mounted } = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setSidebarOpen(true);
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
    if (theme === 'light') {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [theme, mounted]);

  useEffect(() => {
    if (isMobile && selectedConversation && !showInfo) {
      setShowChat(true);
      setSidebarOpen(false);
    }
  }, [isMobile, selectedConversation, showInfo]);

  const handleAvatarClick = () => {
    if (isMobile) {
      setShowInfo(true);
    } else {
      setShowInfoPanel(!showInfoPanel);
    }
  };

  const handleBackFromChat = () => {
    setShowChat(false);
    setSidebarOpen(true);
  };

  const handleBackFromInfo = () => {
    if (isMobile) {
      setShowInfo(false);
    }
  };

  return (
    <>
      {/* Mobile Header */}
      {isMobile && (
        <div className="lg:hidden flex items-center justify-between px-4 py-3 bg-bg-secondary border-b border-border">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-text-primary"
          >
            <Menu size={24} />
          </button>
          <button
            onClick={toggleTheme}
            className="text-text-primary p-2"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      )}

      <div className="flex flex-1 h-full overflow-hidden">
        {/* Sidebar */}
        {(!isMobile || sidebarOpen) && (
          <div className={`${isMobile ? 'w-full' : ''} ${isMobile && showChat ? 'hidden' : ''}`}>
            <Sidebar onProfileClick={handleAvatarClick} isMobile={isMobile} />
          </div>
        )}

        {/* Chat Panel */}
        {(!isMobile || (!showInfo && showChat)) && (
          <div className={`flex-1 flex flex-col min-w-0 ${isMobile && !showChat ? 'hidden' : ''}`}>
            <div className="relative flex-1 flex flex-col">
              {isMobile && showChat && selectedConversation && (
                <div className="absolute top-0 left-0 right-0 z-10 flex items-center gap-2 px-2 py-2 bg-bg-secondary border-b border-border">
                  <button onClick={handleBackFromChat} className="p-2 text-text-primary">
                    <X size={20} />
                  </button>
                  <span className="font-semibold text-text-primary">{selectedConversation.name}</span>
                </div>
              )}
              <div className={`flex-1 ${isMobile && showChat ? 'pt-12' : ''}`}>
                <ChatPanel onAvatarClick={handleAvatarClick} isMobile={isMobile} />
              </div>
            </div>
          </div>
        )}

        {/* Info Panel */}
        <AnimatePresence>
          {selectedConversation && (showInfoPanel || showInfo) && (
            <div className={`${isMobile ? 'w-full absolute inset-0 z-20' : 'w-80'}`}>
              {isMobile && showInfo && (
                <div className="lg:hidden flex items-center gap-2 px-2 py-2 bg-bg-secondary border-b border-border">
                  <button onClick={handleBackFromInfo} className="p-2 text-text-primary">
                    <X size={20} />
                  </button>
                  <span className="font-semibold text-text-primary">Info</span>
                </div>
              )}
              <InfoPanel
                conversation={selectedConversation}
                onClose={() => {
                  if (isMobile) {
                    setShowInfo(false);
                  } else {
                    setShowInfoPanel(false);
                  }
                }}
              />
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default function Home() {
  return (
    <ConversationProvider>
      <main className="h-screen w-screen overflow-hidden bg-bg-primary flex flex-col">
        <MessengerContent />
      </main>
    </ConversationProvider>
  );
}
