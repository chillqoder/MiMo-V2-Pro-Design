You are a senior frontend engineer and UI/UX designer. Build a complete, 
pixel-perfect Telegram Web-style messenger UI as a Next.js 14+ App Router 
project using TypeScript, Tailwind CSS, and Framer Motion. No backend, 
no API calls, no authentication — pure UI with hardcoded mock data.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TECH STACK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Next.js 14+ (App Router, TypeScript)
- Tailwind CSS (custom config with CSS variables)
- Framer Motion for all animations
- Lucide React for icons
- next/font for typography (use a distinctive font pair — 
  NOT Inter. Consider Geist + DM Sans, or Outfit + JetBrains Mono)
- CSS custom properties for full theme system (dark + light)
- No external UI libraries (shadcn, MUI, etc.) — build everything custom

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LAYOUT & STRUCTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Three-panel layout (desktop):
  [Sidebar: 320px fixed] | [Chat panel: flex-1] | [Info panel: 320px, 
  toggleable]

Mobile: full-screen single panel with slide transitions between views.

Responsive breakpoints:
  - <768px: mobile (only one panel visible at a time)
  - 768–1280px: two-panel (sidebar + chat)
  - >1280px: three-panel with info panel toggle

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SIDEBAR PANEL — components/Sidebar/
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Top bar: avatar (current user), search input with animated expand, 
  compose button, hamburger menu
- Search: animated overlay that slides down and filters conversations 
  in real time (mock filtering)
- Conversation list: virtualized-style scroll, each item includes:
    • Avatar with online indicator dot (animated pulse)
    • Bold name, truncated last message, timestamp
    • Unread badge with spring pop-in animation
    • Pinned indicator (pin icon, subtle)
    • Muted indicator
    • Message status icons (sent / delivered / read — double checkmarks)
  Hover state: smooth background transition with slight scale
  Active state: accent background, text color shift
- Tabs at top: All / Unread / Groups / Channels (pill-style tab switcher 
  with animated underline/slide indicator)
- Folder chips below tabs (like Telegram folders): "Work", "Personal", 
  "Unread" — horizontally scrollable, active chip has filled style
- Drag-to-reorder conversations (Framer Motion drag constraints)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CHAT PANEL — components/Chat/
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Header:
  - Avatar, name, status ("online" / "last seen 2h ago"), 
    video call + search + more icons
  - Clicking avatar opens the Info panel with slide animation

Messages area:
  - Date dividers ("Today", "Yesterday", "March 20") with fade-in
  - Incoming messages: left-aligned, rounded bubble (top-right sharp), 
    avatar shown for groups
  - Outgoing messages: right-aligned, accent color, tail bottom-right
  - Message types:
      • Text (with inline emoji support)
      • Image (rounded corners, click to "lightbox" overlay)
      • File attachment (icon + filename + size chip)
      • Voice message (waveform visualization — use SVG bars — with 
        play button and duration)
      • Reply quote block (border-left accent, truncated original message)
      • Forwarded message (header "Forwarded from X")
      • Sticker (transparent background, larger size)
      • System messages ("You joined the group", "Call ended 4m 32s")
  - Timestamps on each bubble (subtle, bottom-right)
  - Read receipts on outgoing (animated checkmarks)
  - Message reactions: emoji row below bubble, 
    click to toggle with spring bounce
  - Hover on message: action toolbar appears (reply, react, forward, 
    more) — slides in from the side with stagger
  - Long-press simulation on mobile (context menu)
  - New messages animate in with: slide-up + fade (incoming from left, 
    outgoing from right)
  - "Scroll to bottom" FAB appears when scrolled up — with unread count badge

Input area:
  - Textarea that auto-grows (1–5 lines), smooth height transition
  - Left icons: attach (paperclip with popover menu: Photo, File, 
    Poll, Location), emoji picker button
  - Right: microphone icon that transforms into send button when text 
    is present (Framer Motion layout animation)
  - Emoji picker: floating panel above input, animated grid with 
    category tabs and search
  - Typing indicator: three animated dots bubble (wave animation) 
    appears in message list

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INFO / PROFILE PANEL — components/InfoPanel/
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Slides in from the right with spring animation (Framer Motion 
  AnimatePresence)
- Large avatar at top (can be clicked for full-screen view)
- Name, bio, phone/username, status
- Action buttons row: Message, Mute, Search, More
- Expandable sections (accordion with height animation):
    • Media grid (photos — 3 columns, lazy-loaded style)
    • Shared files list
    • Shared links list
    • Group members list (if group)
- Notification settings toggle
- "Block user" / "Leave group" destructive action at bottom

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ANIMATIONS — use Framer Motion throughout
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- AnimatePresence for all panel mounts/unmounts
- Layout animations for input growth, badge changes
- Staggered list renders (sidebar conversations on load)
- Message send: origin-bottom-right scale + opacity
- Message receive: origin-bottom-left slide + opacity
- Tab switch: sliding indicator with spring physics
- Reaction toggle: spring scale bounce (0 → 1.3 → 1)
- Scroll to bottom FAB: spring entrance from below
- Context menu: scale from 0.9 + opacity
- Voice message waveform: bars animate heights in sequence
- Typing indicator: wave keyframe on three dots
- Mobile panel transitions: x-axis slide with spring

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DESIGN SYSTEM & VISUAL STYLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Dark theme (default) + light theme toggle stored in localStorage.

Dark palette (CSS variables):
  --bg-primary: #0e1117
  --bg-secondary: #161b22
  --bg-elevated: #1c2128
  --bg-bubble-in: #1e2a38
  --bg-bubble-out: #2b5278
  --accent: #3390ec
  --accent-hover: #4aa0f5
  --text-primary: #e6edf3
  --text-secondary: #8b949e
  --border: rgba(255,255,255,0.08)
  --online: #3fb950
  --unread: #3390ec

Visual details:
  - Backdrop blur on overlays and dropdowns (backdrop-filter: blur(12px))
  - Subtle noise texture overlay on sidebar background (SVG filter or 
    CSS grain)
  - Message bubbles: subtle box-shadow for depth
  - Scrollbar: thin custom styled (2px, accent color on hover)
  - Avatar placeholder: gradient based on name initials hash
  - Focus rings: accent color, 2px offset
  - All transitions: use cubic-bezier(0.25, 0.46, 0.45, 0.94) 
    as default easing

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MOCK DATA — lib/mockData.ts
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Create realistic, varied mock data:
- 12+ conversations (mix of DMs, groups, channels)
- Each conversation: 20–40 messages of varied types
- Include: text, images (use picsum.photos), files, voice messages, 
  replies, reactions, forwarded, system messages
- Realistic names, timestamps, statuses, unread counts
- Some pinned, some muted, some with unread

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FILE STRUCTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
app/
  layout.tsx          — font loading, theme provider, global styles
  page.tsx            — messenger layout shell
components/
  Sidebar/
    index.tsx
    ConversationItem.tsx
    SearchBar.tsx
    FolderTabs.tsx
  Chat/
    index.tsx
    Header.tsx
    MessageList.tsx
    Message.tsx
    MessageInput.tsx
    TypingIndicator.tsx
    EmojiPicker.tsx
    VoiceMessage.tsx
    Reactions.tsx
    ContextMenu.tsx
  InfoPanel/
    index.tsx
    MediaGrid.tsx
  UI/
    Avatar.tsx         — with online dot, initials fallback
    Badge.tsx
    Tooltip.tsx
    Toggle.tsx
lib/
  mockData.ts
  hooks/
    useTheme.ts
    useConversation.ts
  utils/
    dateFormat.ts
    colorHash.ts       — deterministic color from string

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
QUALITY REQUIREMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Zero TypeScript errors (strict mode on)
- All components use React.memo where appropriate
- No layout shift on load
- Smooth 60fps animations (will-change, transform over layout props)
- Keyboard accessible (Tab navigation, Escape to close panels)
- Mobile touch gestures: swipe right to go back on mobile
- Pixel-perfect spacing — use a consistent 4px base grid
- Every interactive element has hover, active, and focus states

Build the entire project. Start with the layout shell and 
mock data, then build each panel component by component. 
Show the complete file for each component — no truncation.