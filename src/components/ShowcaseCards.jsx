import React from 'react';
import { User, Home, Settings, Upload, MessageSquare } from 'lucide-react';

const cards = [
  {
    title: 'Student Dashboard',
    desc: 'View upcoming deadlines, recent feedback, and quick actions for uploads and drafts.',
    icon: <Home className="h-5 w-5" />,
    badge: 'Realtime'
  },
  {
    title: 'File Upload',
    desc: 'Drag-and-drop interface with progress, validation, and resumable transfers.',
    icon: <Upload className="h-5 w-5" />,
    badge: 'Secure'
  },
  {
    title: 'Chat & Feedback',
    desc: 'Inline annotations and threaded conversations to speed up review cycles.',
    icon: <MessageSquare className="h-5 w-5" />,
    badge: 'Collaborative'
  },
  {
    title: 'Profile & Settings',
    desc: 'Manage identity via Clerk, notification preferences, and access tokens.',
    icon: <User className="h-5 w-5" />,
    badge: 'Personalized'
  },
  {
    title: 'Admin Settings',
    desc: 'Control roles, folder permissions, and webhooks synchronization policies.',
    icon: <Settings className="h-5 w-5" />,
    badge: 'Granular'
  }
];

export default function ShowcaseCards() {
  return (
    <section id="showcase" className="relative scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-2xl font-semibold sm:text-3xl">What you can build on day one</h2>
        <p className="mt-3 text-sm text-white/70 sm:text-base">
          A modular UI with reusable components following BEM-inspired conventions and Tailwind utilities.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, idx) => (
          <article key={idx} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-5 transition hover:from-white/[0.1]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
                  {card.icon}
                </span>
                <h3 className="text-base font-semibold">{card.title}</h3>
              </div>
              <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-medium text-white/80">
                {card.badge}
              </span>
            </div>
            <p className="mt-3 text-sm text-white/70">{card.desc}</p>
            <div className="mt-4 h-28 w-full overflow-hidden rounded-lg border border-white/10 bg-neutral-900/60">
              <div className="h-full w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500/10 via-orange-400/10 to-transparent" />
            </div>
          </article>
        ))}
      </div>
      <div className="mx-auto mt-10 max-w-xl text-center">
        <a href="#" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-white/90">
          Preview Demo
        </a>
      </div>
    </section>
  );
}
