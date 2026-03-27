export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  isOnline: boolean;
  lastSeen?: string;
  bio?: string;
  phone?: string;
}

export interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: Date;
  type: 'text' | 'image' | 'file' | 'voice' | 'sticker' | 'system';
  imageUrl?: string;
  fileName?: string;
  fileSize?: string;
  voiceDuration?: string;
  replyTo?: string;
  forwardedFrom?: string;
  reactions?: { emoji: string; count: number }[];
  status?: 'sent' | 'delivered' | 'read';
}

export interface Conversation {
  id: string;
  name: string;
  avatar: string;
  isGroup: boolean;
  isChannel?: boolean;
  lastMessage: string;
  lastMessageTime: Date;
  unreadCount: number;
  isPinned: boolean;
  isMuted: boolean;
  isOnline?: boolean;
  members?: User[];
  messages: Message[];
}

export interface Folder {
  id: string;
  name: string;
  count: number;
}

export const currentUser: User = {
  id: 'current-user',
  name: 'Konstantin',
  username: 'konstantin',
  avatar: 'https://picsum.photos/seed/current/200',
  isOnline: true,
  bio: 'Mobile developer',
  phone: '+1 234 567 8901',
};

export const users: User[] = [
  { id: '1', name: 'Sarah Chen', username: 'sarahchen', avatar: 'https://picsum.photos/seed/sarah/200', isOnline: true, bio: 'Working on something cool 🔥', phone: '+1 234 567 8902' },
  { id: '2', name: 'Alex Rivera', username: 'alexr', avatar: 'https://picsum.photos/seed/alex/200', isOnline: false, lastSeen: '2h ago', bio: 'Away until Monday', phone: '+1 234 567 8903' },
  { id: '3', name: 'Emma Wilson', username: 'emmaw', avatar: 'https://picsum.photos/seed/emma/200', isOnline: true, bio: 'Design lead @techco', phone: '+1 234 567 8904' },
  { id: '4', name: 'James Miller', username: 'jamesm', avatar: 'https://picsum.photos/seed/james/200', isOnline: false, lastSeen: '1d ago', phone: '+1 234 567 8905' },
  { id: '5', name: 'Maria Garcia', username: 'maria', avatar: 'https://picsum.photos/seed/maria/200', isOnline: true, bio: 'Available for projects', phone: '+1 234 567 8906' },
  { id: '6', name: 'David Kim', username: 'davidk', avatar: 'https://picsum.photos/seed/david/200', isOnline: false, lastSeen: '30m ago', phone: '+1 234 567 8907' },
  { id: '7', name: 'Lisa Johnson', username: 'lisaj', avatar: 'https://picsum.photos/seed/lisa/200', isOnline: true, phone: '+1 234 567 8908' },
  { id: '8', name: 'Tom Brown', username: 'tomb', avatar: 'https://picsum.photos/seed/tom/200', isOnline: false, lastSeen: '5h ago', phone: '+1 234 567 8909' },
  { id: '9', name: 'Tech Team', username: 'techteam', avatar: 'https://picsum.photos/seed/team/200', isOnline: true, bio: '24/7 support', phone: '+1 234 567 8910' },
  { id: '10', name: 'News Channel', username: 'newschan', avatar: 'https://picsum.photos/seed/news/200', isOnline: false, lastSeen: '3d ago', bio: 'Daily updates', phone: '+1 234 567 8911' },
  { id: '11', name: 'Michael Lee', username: 'michaell', avatar: 'https://picsum.photos/seed/michael/200', isOnline: true, phone: '+1 234 567 8912' },
  { id: '12', name: 'Julia Roberts', username: 'juliar', avatar: 'https://picsum.photos/seed/julia/200', isOnline: false, lastSeen: '1w ago', phone: '+1 234 567 8913' },
];

const createMessage = (
  id: string,
  senderId: string,
  content: string,
  timestamp: Date,
  type: Message['type'] = 'text',
  extras: Partial<Message> = {}
): Message => ({
  id,
  senderId,
  content,
  timestamp,
  type,
  ...extras,
});

export const conversations: Conversation[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    avatar: 'https://picsum.photos/seed/sarah/200',
    isGroup: false,
    lastMessage: 'Hey! Did you see the new design? 🎨',
    lastMessageTime: new Date(Date.now() - 1000 * 60 * 5),
    unreadCount: 2,
    isPinned: true,
    isMuted: false,
    isOnline: true,
    messages: [
      createMessage('m1', '1', 'Hi there! Ready to chat?', new Date(Date.now() - 1000 * 60 * 60 * 24)),
      createMessage('m2', 'current', 'Sure! What do you need?', new Date(Date.now() - 1000 * 60 * 60 * 23)),
      createMessage('m3', '1', 'I wanted to discuss the new project timeline', new Date(Date.now() - 1000 * 60 * 60 * 22)),
      createMessage('m4', 'current', 'Sounds good. Lets schedule a meeting', new Date(Date.now() - 1000 * 60 * 60 * 21)),
      createMessage('m5', '1', 'Perfect! How about tomorrow at 2pm?', new Date(Date.now() - 1000 * 60 * 60 * 20)),
      createMessage('m6', 'current', 'Works for me. Ill send the invite', new Date(Date.now() - 1000 * 60 * 60 * 19)),
      createMessage('m7', '1', 'Great! Also, check out this design I found', new Date(Date.now() - 1000 * 60 * 60 * 18)),
      createMessage('m8', '1', 'Hey! Did you see the new design? 🎨', new Date(Date.now() - 1000 * 60 * 5), 'text', { status: 'delivered' }),
    ],
  },
  {
    id: '2',
    name: 'Alex Rivera',
    avatar: 'https://picsum.photos/seed/alex/200',
    isGroup: false,
    lastMessage: 'The deployment went smoothly!',
    lastMessageTime: new Date(Date.now() - 1000 * 60 * 60 * 2),
    unreadCount: 0,
    isPinned: true,
    isMuted: false,
    isOnline: false,
    messages: [
      createMessage('m9', '2', 'Hey team, starting the deployment now', new Date(Date.now() - 1000 * 60 * 60 * 5)),
      createMessage('m10', 'current', 'Good luck! 🍀', new Date(Date.now() - 1000 * 60 * 60 * 4)),
      createMessage('m11', '2', 'Thanks! Everything looks good so far', new Date(Date.now() - 1000 * 60 * 60 * 3)),
      createMessage('m12', 'current', 'Nice! Keep us posted', new Date(Date.now() - 1000 * 60 * 60 * 2.5)),
      createMessage('m13', '2', 'The deployment went smoothly!', new Date(Date.now() - 1000 * 60 * 60 * 2)),
    ],
  },
  {
    id: '3',
    name: 'Tech Team',
    avatar: 'https://picsum.photos/seed/team/200',
    isGroup: true,
    lastMessage: 'Emma: Build completed successfully',
    lastMessageTime: new Date(Date.now() - 1000 * 60 * 30),
    unreadCount: 5,
    isPinned: false,
    isMuted: false,
    members: [
      users[2], users[3], users[4], users[5]
    ],
    messages: [
      createMessage('m14', '1', 'Starting the nightly build', new Date(Date.now() - 1000 * 60 * 60 * 3)),
      createMessage('m15', '4', 'Ill run the tests', new Date(Date.now() - 1000 * 60 * 60 * 2.5)),
      createMessage('m16', '2', 'Ill check the performance metrics', new Date(Date.now() - 1000 * 60 * 60 * 2)),
      createMessage('m17', '3', 'Emma: Build completed successfully', new Date(Date.now() - 1000 * 60 * 30)),
    ],
  },
  {
    id: '4',
    name: 'Emma Wilson',
    avatar: 'https://picsum.photos/seed/emma/200',
    isGroup: false,
    lastMessage: 'Can you review PR #234 when you get a chance?',
    lastMessageTime: new Date(Date.now() - 1000 * 60 * 60 * 4),
    unreadCount: 0,
    isPinned: false,
    isMuted: true,
    isOnline: true,
    messages: [
      createMessage('m18', '3', 'Hey! Just pushed the new UI changes', new Date(Date.now() - 1000 * 60 * 60 * 6)),
      createMessage('m19', 'current', 'Nice! Sending screenshots now', new Date(Date.now() - 1000 * 60 * 60 * 5)),
      createMessage('m20', '3', 'Love it! The new animations look great', new Date(Date.now() - 1000 * 60 * 60 * 4.5)),
      createMessage('m21', 'current', 'Thanks! Used Framer Motion for those', new Date(Date.now() - 1000 * 60 * 60 * 4.25)),
      createMessage('m22', '3', 'Can you review PR #234 when you get a chance?', new Date(Date.now() - 1000 * 60 * 60 * 4)),
    ],
  },
  {
    id: '5',
    name: 'James Miller',
    avatar: 'https://picsum.photos/seed/james/200',
    isGroup: false,
    lastMessage: 'Lets catch up next week',
    lastMessageTime: new Date(Date.now() - 1000 * 60 * 60 * 24),
    unreadCount: 0,
    isPinned: false,
    isMuted: false,
    isOnline: false,
    messages: [
      createMessage('m23', '4', 'Hey, are you free this weekend?', new Date(Date.now() - 1000 * 60 * 60 * 26)),
      createMessage('m24', 'current', 'Yeah! What did you have in mind?', new Date(Date.now() - 1000 * 60 * 60 * 25)),
      createMessage('m25', '4', 'I was thinking we could grab lunch', new Date(Date.now() - 1000 * 60 * 60 * 24.5)),
      createMessage('m26', 'current', 'Sounds good! How about that new place?', new Date(Date.now() - 1000 * 60 * 24.25)),
      createMessage('m27', '4', 'Lets catch up next week', new Date(Date.now() - 1000 * 60 * 60 * 24)),
    ],
  },
  {
    id: '6',
    name: 'Maria Garcia',
    avatar: 'https://picsum.photos/seed/maria/200',
    isGroup: false,
    lastMessage: 'Check out these photos from the trip!',
    lastMessageTime: new Date(Date.now() - 1000 * 60 * 60 * 3),
    unreadCount: 3,
    isPinned: false,
    isMuted: false,
    isOnline: true,
    messages: [
      createMessage('m28', '5', 'Hey! Just got back from vacation', new Date(Date.now() - 1000 * 60 * 60 * 5)),
      createMessage('m29', 'current', 'Nice! How was it?', new Date(Date.now() - 1000 * 60 * 60 * 4)),
      createMessage('m30', '5', 'Amazing! Will share photos soon', new Date(Date.now() - 1000 * 60 * 60 * 3.5)),
      createMessage('m31', '5', 'Check out these photos from the trip!', new Date(Date.now() - 1000 * 60 * 60 * 3), 'image', { imageUrl: 'https://picsum.photos/seed/vacation1/400/300' }),
    ],
  },
  {
    id: '7',
    name: 'David Kim',
    avatar: 'https://picsum.photos/seed/david/200',
    isGroup: false,
    lastMessage: 'Voice message (0:32)',
    lastMessageTime: new Date(Date.now() - 1000 * 60 * 60 * 6),
    unreadCount: 0,
    isPinned: false,
    isMuted: false,
    isOnline: false,
    messages: [
      createMessage('m32', '6', 'Heres the voice note I mentioned', new Date(Date.now() - 1000 * 60 * 60 * 6)),
      createMessage('m33', '6', 'Voice message (0:32)', new Date(Date.now() - 1000 * 60 * 60 * 6), 'voice', { voiceDuration: '0:32' }),
    ],
  },
  {
    id: '8',
    name: 'Lisa Johnson',
    avatar: 'https://picsum.photos/seed/lisa/200',
    isGroup: false,
    lastMessage: 'Thanks for the help! 🙏',
    lastMessageTime: new Date(Date.now() - 1000 * 60 * 60 * 8),
    unreadCount: 0,
    isPinned: false,
    isMuted: true,
    isOnline: true,
    messages: [
      createMessage('m34', '7', 'Hey, need some help with the API', new Date(Date.now() - 1000 * 60 * 60 * 10)),
      createMessage('m35', 'current', 'Sure! What seems to be the issue?', new Date(Date.now() - 1000 * 60 * 60 * 9)),
      createMessage('m36', '7', 'Getting a 500 error on the endpoint', new Date(Date.now() - 1000 * 60 * 60 * 8.5)),
      createMessage('m37', 'current', 'Ah, that might be the auth token. Check the docs', new Date(Date.now() - 1000 * 60 * 60 * 8.25)),
      createMessage('m38', '7', 'Thanks for the help! 🙏', new Date(Date.now() - 1000 * 60 * 60 * 8), 'text', { status: 'read' }),
    ],
  },
  {
    id: '9',
    name: 'News Channel',
    avatar: 'https://picsum.photos/seed/news/200',
    isGroup: false,
    isChannel: true,
    lastMessage: 'Breaking: Tech Giants Report Record Earnings',
    lastMessageTime: new Date(Date.now() - 1000 * 60 * 60 * 12),
    unreadCount: 1,
    isPinned: true,
    isMuted: false,
    isOnline: false,
    messages: [
      createMessage('m39', '10', 'Breaking: Tech Giants Report Record Earnings', new Date(Date.now() - 1000 * 60 * 60 * 12), 'text', { status: 'sent' }),
    ],
  },
  {
    id: '10',
    name: 'Michael Lee',
    avatar: 'https://picsum.photos/seed/michael/200',
    isGroup: false,
    lastMessage: 'File: project-specs.pdf (2.4 MB)',
    lastMessageTime: new Date(Date.now() - 1000 * 60 * 60 * 36),
    unreadCount: 0,
    isPinned: false,
    isMuted: false,
    isOnline: true,
    messages: [
      createMessage('m40', '11', 'Sent you the project specs', new Date(Date.now() - 1000 * 60 * 60 * 36)),
      createMessage('m41', '11', 'File: project-specs.pdf (2.4 MB)', new Date(Date.now() - 1000 * 60 * 60 * 36), 'file', { fileName: 'project-specs.pdf', fileSize: '2.4 MB' }),
    ],
  },
  {
    id: '11',
    name: 'Tom Brown',
    avatar: 'https://picsum.photos/seed/tom/200',
    isGroup: false,
    lastMessage: 'See you tomorrow!',
    lastMessageTime: new Date(Date.now() - 1000 * 60 * 60 * 48),
    unreadCount: 0,
    isPinned: false,
    isMuted: false,
    isOnline: false,
    messages: [
      createMessage('m42', '8', 'Hey, are we still on for tomorrow?', new Date(Date.now() - 1000 * 60 * 60 * 49)),
      createMessage('m43', 'current', 'Absolutely! Looking forward to it', new Date(Date.now() - 1000 * 60 * 60 * 48.5)),
      createMessage('m44', '8', 'See you tomorrow!', new Date(Date.now() - 1000 * 60 * 60 * 48)),
    ],
  },
  {
    id: '12',
    name: 'Julia Roberts',
    avatar: 'https://picsum.photos/seed/julia/200',
    isGroup: false,
    lastMessage: 'Perfect! Ill set up the meeting',
    lastMessageTime: new Date(Date.now() - 1000 * 60 * 60 * 72),
    unreadCount: 0,
    isPinned: false,
    isMuted: false,
    isOnline: false,
    messages: [
      createMessage('m45', '12', 'Could you join our panel discussion?', new Date(Date.now() - 1000 * 60 * 60 * 74)),
      createMessage('m46', 'current', 'Id love to! What topic?', new Date(Date.now() - 1000 * 60 * 60 * 73)),
      createMessage('m47', '12', 'Future of web development', new Date(Date.now() - 1000 * 60 * 60 * 72.5)),
      createMessage('m48', 'current', 'Sounds interesting! Count me in', new Date(Date.now() - 1000 * 60 * 60 * 72.25)),
      createMessage('m49', '12', 'Perfect! Ill set up the meeting', new Date(Date.now() - 1000 * 60 * 60 * 72)),
    ],
  },
];

export const folders = [
  { id: 'all', name: 'All', count: 12 },
  { id: 'unread', name: 'Unread', count: 6 },
  { id: 'work', name: 'Work', count: 4 },
  { id: 'personal', name: 'Personal', count: 5 },
  { id: 'groups', name: 'Groups', count: 3 },
];

export const tabs = [
  { id: 'all', name: 'All' },
  { id: 'unread', name: 'Unread' },
  { id: 'groups', name: 'Groups' },
  { id: 'channels', name: 'Channels' },
];

export const emojis = [
  '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃',
  '😉', '😊', '😇', '🥰', '😍', '🤩', '😘', '😗', '☺️', '😚',
  '😙', '🥲', '😋', '😛', '😜', '🤪', '😝', '🤑', '🤗', '🤭',
  '🤫', '🤔', '🤐', '🤨', '😐', '😑', '😶', '😏', '😒', '🙄',
  '😬', '🤥', '😌', '😔', '😪', '🤤', '😴', '😷', '🤒', '🤕',
  '👍', '👎', '👏', '🙌', '🤝', '🙏', '💪', '🤘', '🤙', '👋',
  '❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '💔', '❣️', '💕',
];
