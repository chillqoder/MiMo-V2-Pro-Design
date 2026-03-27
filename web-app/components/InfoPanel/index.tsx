'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, BellOff, Search, MoreHorizontal, ChevronDown, ChevronUp, FileText, Link, Users, Ban } from 'lucide-react';
import Image from 'next/image';
import { Avatar } from '@/components/UI/Avatar';
import { Toggle } from '@/components/UI/Toggle';
import { Tooltip } from '@/components/UI/Tooltip';
import { MediaGrid } from './MediaGrid';
import { Conversation } from '@/lib/mockData';

interface InfoPanelProps {
  conversation: Conversation;
  onClose: () => void;
}

interface SectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function Section({ title, children, defaultOpen = true }: SectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 text-text-secondary hover:text-text-primary transition-colors"
      >
        <span className="font-medium text-sm">{title}</span>
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-3">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function InfoPanel({ conversation, onClose }: InfoPanelProps) {
  const [notifications, setNotifications] = useState(true);
  const [showImage, setShowImage] = useState(false);

  const mediaImages = [
    'https://picsum.photos/seed/m1/200',
    'https://picsum.photos/seed/m2/200',
    'https://picsum.photos/seed/m3/200',
    'https://picsum.photos/seed/m4/200',
    'https://picsum.photos/seed/m5/200',
    'https://picsum.photos/seed/m6/200',
    'https://picsum.photos/seed/m7/200',
    'https://picsum.photos/seed/m8/200',
    'https://picsum.photos/seed/m9/200',
  ];

  return (
    <motion.div
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '100%', opacity: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="w-80 h-full bg-bg-secondary border-l border-border overflow-y-auto flex flex-col"
    >
      <div className="flex justify-between items-center px-4 py-3 border-b border-border">
        <span className="font-semibold text-text-primary">Info</span>
      </div>

      <div className="flex flex-col items-center py-6 px-4">
        <button
          onClick={() => setShowImage(true)}
          className="focus:outline-none focus:ring-2 focus:ring-accent rounded-full"
        >
          <Avatar
            src={conversation.avatar}
            name={conversation.name}
            size={100}
            showOnline={!conversation.isGroup && !conversation.isChannel}
            isOnline={conversation.isOnline}
          />
        </button>

        <h2 className="mt-4 text-xl font-semibold text-text-primary">{conversation.name}</h2>
        <p className="mt-1 text-sm text-text-secondary">
          {conversation.isGroup
            ? `${conversation.members?.length || 0} members`
            : conversation.isOnline
            ? 'online'
            : 'offline'}
        </p>
      </div>

      <div className="flex justify-center gap-4 px-4 pb-4">
        <Tooltip content="Message">
          <button className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center hover:bg-accent-hover transition-colors">
            <MessageCircle size={20} />
          </button>
        </Tooltip>
        <Tooltip content={conversation.isMuted ? 'Unmute' : 'Mute'}>
          <button className="w-12 h-12 rounded-full bg-bg-elevated text-text-primary flex items-center justify-center hover:bg-bg-secondary transition-colors">
            <BellOff size={20} />
          </button>
        </Tooltip>
        <Tooltip content="Search">
          <button className="w-12 h-12 rounded-full bg-bg-elevated text-text-primary flex items-center justify-center hover:bg-bg-secondary transition-colors">
            <Search size={20} />
          </button>
        </Tooltip>
        <Tooltip content="More">
          <button className="w-12 h-12 rounded-full bg-bg-elevated text-text-primary flex items-center justify-center hover:bg-bg-secondary transition-colors">
            <MoreHorizontal size={20} />
          </button>
        </Tooltip>
      </div>

      {!conversation.isGroup && (
        <Section title="About">
          <p className="text-sm text-text-secondary">
            Mobile developer and tech enthusiast
          </p>
        </Section>
      )}

      <Section title={`Shared Media (${mediaImages.length})`}>
        <MediaGrid images={mediaImages} />
      </Section>

      <Section title="Shared Files">
        <div className="space-y-2">
          {['project-specs.pdf', 'design-mockup.fig', 'budget-q1.xlsx'].map((file) => (
            <div key={file} className="flex items-center gap-3 p-2 hover:bg-bg-elevated rounded cursor-pointer">
              <FileText size={20} className="text-text-secondary" />
              <div className="flex-1">
                <p className="text-sm text-text-primary truncate">{file}</p>
                <p className="text-xs text-text-secondary">2.4 MB</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Shared Links">
        <div className="space-y-2">
          {['github.com/project', 'notion.so/design', 'figma.com/mockup'].map((link) => (
            <a key={link} href="#" className="flex items-center gap-3 p-2 hover:bg-bg-elevated rounded">
              <Link size={20} className="text-accent" />
              <span className="text-sm text-accent truncate">{link}</span>
            </a>
          ))}
        </div>
      </Section>

      {conversation.isGroup && conversation.members && (
        <Section title={`Members (${conversation.members.length})`}>
          <div className="space-y-2">
            {conversation.members.map((member) => (
              <div key={member.id} className="flex items-center gap-3 p-2">
                <Avatar src={member.avatar} name={member.name} size={36} showOnline isOnline={member.isOnline} />
                <div>
                  <p className="text-sm text-text-primary font-medium">{member.name}</p>
                  <p className="text-xs text-text-secondary">@{member.username}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      )}

      <Section title="Notifications">
        <div className="space-y-3">
          <Toggle checked={notifications} onChange={setNotifications} label="Message notifications" />
        </div>
      </Section>

      <div className="p-4 mt-auto">
        <button className="w-full flex items-center justify-center gap-2 py-3 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors">
          <Ban size={18} />
          <span>{conversation.isGroup ? 'Leave group' : 'Block user'}</span>
        </button>
      </div>

      <AnimatePresence>
        {showImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={() => setShowImage(false)}
          >
            {conversation.avatar && (
              <Image
                src={conversation.avatar}
                alt={conversation.name}
                width={600}
                height={600}
                className="object-contain"
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
